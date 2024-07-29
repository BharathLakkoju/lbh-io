import React from "react";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <>
      <div className="mt-7 flex flex-col items-center justify-center gap-4">
        <span>check my profile and follow me on:</span>
        <div className="">
          <Link
            className="dark:text-gray-200 font-medium inline-flex align-middle px-1"
            target="_blank"
            href="https://linkedin.com/in/bharath-lakkoju"
          >
            <ArrowTopRightIcon className="size-5 group-hover:-rotate-[30deg]" />
            linkedin
          </Link>
          <Link
            className="dark:text-gray-200 font-medium inline-flex align-middle px-1"
            href="/resume"
          >
            <ArrowTopRightIcon className="size-5 group-hover:-rotate-[30deg]" />
            Resume
          </Link>
          <Link
            className="dark:text-gray-200 font-medium inline-flex align-middle px-1"
            target="_blank"
            href="https://github.com/bharathlakkoju"
          >
            <ArrowTopRightIcon className="size-5 group-hover:-rotate-[30deg]" />
            github
          </Link>
        </div>
      </div>
    </>
  );
}
