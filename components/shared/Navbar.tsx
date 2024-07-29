"use client";
import Link from "next/link";
import ModeToggle from "@/components/shared/ModeToggle";
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/spotlight";
import { useEffect } from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  // "/resume": {
  //   name: "resume",
  // },
  // "/blog": {
  //   name: "blog",
  // },
  // "/guestbook": {
  //   name: "guestbook",
  // },
};

export default function Navbar() {
  let { theme, resolvedTheme } = useTheme();
  let fillColor = "white";
  if (
    theme === undefined ||
    theme === "system" ||
    resolvedTheme === undefined ||
    resolvedTheme === "system"
  ) {
    theme = "dark";
    fillColor = "white";
  } else if (theme === "light") {
    fillColor = "purple";
  }
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 fixed -z-10"
        fill={fillColor}
      />
      <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 items-center justify-between w-full">
              <div className="flex flex-row space-x-0">
                {Object.entries(navItems).map(([path, { name }]) => {
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                    >
                      {name}
                    </Link>
                  );
                })}
                <Link
                  href="https://drive.google.com/file/d/1X-ukshNUg5T-GkOQ9dB9yd_MibuKRPul/view?usp=sharing"
                  target="_blank"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  resume
                </Link>
              </div>
              <ModeToggle />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
