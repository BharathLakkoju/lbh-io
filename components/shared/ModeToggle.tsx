"use client";

import * as React from "react";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const toggleDark = "dark";
const toggleLight = "light";

export default function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    if (theme === toggleDark) {
      setTheme(toggleLight);
    } else {
      setTheme(toggleDark);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="p-0 h-fit w-fit cursor-pointer bg-transparent hover:bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0 focus-within:ring-0"
    >
      <SunMoon className="size-6 transition-all text-black dark:text-white cursor-pointer" />
    </div>
  );
}
