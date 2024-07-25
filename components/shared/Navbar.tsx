"use client";
import Link from "next/link";
import ModeToggle from "@/components/shared/ModeToggle";
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/spotlight";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "blog",
  },
  "/guestbook": {
    name: "guestbook",
  },
};

export default function Navbar() {
  let { theme } = useTheme();
  let fillColor = "white";
  if (theme === undefined) {
    theme = "dark";
  }
  if (theme === "light") {
    fillColor = "purple";
  }
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
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
              </div>
              <ModeToggle />
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
