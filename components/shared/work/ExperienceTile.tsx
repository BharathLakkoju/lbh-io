"use client";
import Link from "next/link";
import React from "react";
import LinkedBadge from "@/components/shared/LinkedBadge";
import { Icon } from "@/components/ui/evervault-card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface ExperienceTileProps {
  name: string;
  company: string;
  description: string;
  duration: string;
  time: string;
  link: string;
}

export default function ExperienceTile({
  name,
  company,
  description,
  duration,
  time,
  link,
}: ExperienceTileProps) {
  return (
    <>
      <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white/15 dark:bg-black/15 backdrop:blur-xl flex flex-col items-start max-w-full mx-auto p-4 relative my-7">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        <div className="flex flex-col items-start justify-between w-full gap-3">
          <span className="text-xl font-medium">{name}</span>
          <div className="flex flex-row flex-wrap justify-between items-center w-full gap-2">
            <span className="text-lg dark:text-gray-300 text-gray-600">
              {company}
            </span>
            <div className="flex flex-row flex-wrap justify-start gap-2">
              <span className="text-sm dark:text-gray-300 text-gray-600">
                {duration}
              </span>
              <span className="text-sm dark:text-gray-300 text-gray-600">
                {time}
              </span>
            </div>
          </div>
          <span className="text-sm dark:text-gray-300 text-gray-600">
            {description}
          </span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link
              className="dark:text-gray-200 font-medium inline-flex items-center px-1 hover:animate-pulse transition-transform duration-300"
              target="_blank"
              href={link}
            >
              <ArrowTopRightIcon className="size-5 group-hover:-rotate-[30deg]" />
              check it out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
