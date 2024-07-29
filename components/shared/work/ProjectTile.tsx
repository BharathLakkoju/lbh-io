"use client";
import Link from "next/link";
import React from "react";
import LinkedBadge from "@/components/shared/LinkedBadge";
import { Icon } from "@/components/ui/evervault-card";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface detailsProp {
  name: string;
  Icon: React.ReactNode;
  href: string;
}

interface ProjectTileProps {
  name: string;
  description: string;
  details: detailsProp[];
  link: string;
  deployedlink: string;
}

export default function ProjectTile({
  name,
  description,
  details,
  link,
  deployedlink,
}: ProjectTileProps) {
  return (
    <>
      <div className="border border-black/[0.2] dark:border-white/[0.2] bg-white/15 dark:bg-black/15 backdrop:blur-xl flex flex-col items-start max-w-full mx-auto p-4 relative my-7">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
        <div className="flex flex-col items-start justify-between w-full gap-3">
          <span className="text-xl font-medium">
            {name === "Render.com" ? "" : name}
          </span>
          <span className="text-sm dark:text-gray-300 text-gray-600">
            {description}
          </span>
          <span className="text-sm dark:text-gray-300 text-gray-600">
            tools:
          </span>
          <div className="flex flex-row flex-wrap justify-start gap-2">
            {details.map((detail) => (
              <LinkedBadge
                key={detail.name}
                Icon={detail.Icon}
                href={detail.href}
                name={detail.name}
                className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Link
              className="dark:text-gray-200 font-medium inline-flex items-center px-1 hover:animate-pulse transition-transform duration-300"
              target="_blank"
              href={link}
            >
              <ArrowTopRightIcon className="size-5 group-hover:-rotate-[30deg]" />
              project link
            </Link>
            {deployedlink === "" ? (
              ""
            ) : (
              <Link
                className="dark:text-gray-200 font-medium inline-flex items-center px-1 hover:animate-pulse transition-transform duration-300"
                target="_blank"
                href={deployedlink}
              >
                <ArrowTopRightIcon className="size-5 group-hover:-rotate-[30deg]" />
                deployed link
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
