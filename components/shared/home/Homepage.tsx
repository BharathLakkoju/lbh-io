"use client";
import React from "react";
import HomePage from "@/components/mdx/HomePage.mdx";
import Link from "next/link";
import { FaGithub, FaLinux, FaReact } from "react-icons/fa";
import LinkedBadge from "../LinkedBadge";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNodejsFill,
} from "react-icons/ri";
import { SiDjango, SiShadcnui, SiTypescript, SiVercel } from "react-icons/si";
import { GrJava } from "react-icons/gr";
import { TbBrandPython } from "react-icons/tb";
import Image from "next/image";

const languagesAndTools = [
  {
    name: "React",
    type: ["library", "framework"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="react"
      />
    ),
    href: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    type: ["library", "framework", "fullstack"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
        className="size-4 mr-1"
        width={20}
        height={20}
        alt="next.js"
      />
    ),
    href: "https://nextjs.org/",
  },
  {
    name: "JavaScript",
    type: ["language"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
        width={16}
        height={16}
        alt="javascript"
        className="size-4 mr-1"
      />
    ),
    href: "https://javascript.info",
  },
  {
    name: "TypeScript",
    type: ["language"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
        width={16}
        height={16}
        alt="typescript"
        className="size-4 mr-1"
      />
    ),
    href: "https://typescriptlang.org",
  },
  {
    name: "Java",
    type: ["language"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
        width={16}
        height={16}
        className="size-4 mr-1"
        alt="java"
      />
    ),
    href: "https://java.com",
  },
  {
    name: "PostgreSQL",
    type: ["database"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
        width={16}
        height={16}
        alt="postgresql"
        className="size-4 mr-1"
      />
    ),
    href: "https://postgresql.org",
  },
  {
    name: "Tailwind CSS",
    type: ["framework", "library"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="tailwindcss"
      />
    ),
    href: "https://tailwindcss.com/",
  },
  {
    name: "Django",
    type: ["framework", "library"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=AksudKrBQryM&format=png&color=5C9800"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="django"
      />
    ),
    href: "https://djangoproject.com/",
  },
  {
    name: "Python",
    type: ["language"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
        width={16}
        height={16}
        alt="python"
        className="size-4 mr-1"
      />
    ),
    href: "https://python.org",
  },
  {
    name: "Git",
    type: ["tool"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
        width={16}
        height={16}
        alt="git"
        className="size-4 mr-1"
      />
    ),
    href: "https://git-scm.com/",
  },
  {
    name: "Vercel",
    type: ["tool", "deployment tool"],
    Icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 76 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5274 0L75.0548 65H0L37.5274 0Z"
          fill="none"
          className="dark:fill-white fill-black"
        />
      </svg>
    ),
    href: "https://vercel.com/",
  },
  {
    name: "Shadcn UI",
    type: ["library", "framework"],
    Icon: <SiShadcnui className="size-2 mr-1" />,
    href: "https://ui.shadcn.com/",
  },
  {
    name: "Node.js",
    type: ["library", "framework"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
        alt="NodeJS"
        width={16}
        height={16}
        className="size-4 mr-1"
      />
    ),
    href: "https://nodejs.org",
  },
  {
    name: "SQL",
    type: ["language"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=qGUfLiYi1bRN&format=png&color=000000"
        alt="MySQL"
        width={16}
        height={16}
        className="size-4 mr-1"
      />
    ),
    href: "https://sql.org",
  },
];

export default function Homepage() {
  return (
    <>
      {/* <HomePage /> */}
      <span className="text-2xl">hey, I'm Bharath 👋🏻</span>
      <div className="inline-block mt-5">
        I'm an aspiring software engineer and a full-stack developer. I love to{" "}
        <Link
          className="dark:text-gray-200 dark:underline underline font-bold"
          href="/work"
        >
          build
        </Link>
        {` things that make a difference. I'm currently looking for an opportunity
        to work on a project that will make a difference.`}
        <div className="mt-5 leading-8">
          {`I worked on and gained experience in building web applications using `}
          <LinkedBadge
            href="https://reactjs.org/"
            Icon={
              <Image
                src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
                className="size-4 mr-1"
                width={16}
                height={16}
                alt="react"
              />
            }
            name="React"
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
          />
          {` , `}
          <LinkedBadge
            href="https://nextjs.org/"
            Icon={
              <Image
                src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                className="size-4 mr-1"
                width={20}
                height={20}
                alt="next.js"
              />
            }
            name="Next.js"
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
          />
          {` , `}
          <LinkedBadge
            href="https://typescriptlang.org"
            Icon={
              <Image
                src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                width={16}
                height={16}
                alt="typescript"
                className="size-4 mr-1"
              />
            }
            name="TypeScript"
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
          />
          {` , `}
          <LinkedBadge
            href="https://tailwindcss.com/"
            Icon={
              <Image
                src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
                className="size-4 mr-1"
                width={16}
                height={16}
                alt="tailwindcss"
              />
            }
            name="Tailwind CSS"
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
          />
          {` , `}
          <LinkedBadge
            href="https://vercel.com/"
            Icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 76 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                  fill="none"
                  className="dark:fill-white fill-black"
                />
              </svg>
            }
            name="Vercel"
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
          />
          {` and `}
          <LinkedBadge
            href="https://djangoproject.com/"
            Icon={
              <Image
                src="https://img.icons8.com/?size=100&id=AksudKrBQryM&format=png&color=5C9800"
                className="size-4 mr-1"
                width={16}
                height={16}
                alt="django"
              />
            }
            name="Django"
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
          />
          {` . `}
          <span>
            This is part of my daily routine to learn new technologies and
            improve my skills.
          </span>
        </div>
        <div className="mt-5">
          I'm also a big fan of open source and I'm always looking for ways to
          contribute to open source projects.
        </div>
        <div>
          My Current Tech Stack:
          <div className="flex flex-wrap gap-4 mt-3">
            {languagesAndTools
              .filter((language) => language.type.includes("tool"))
              .map((language) => (
                <LinkedBadge
                  key={language.name}
                  href={language.href}
                  Icon={language.Icon}
                  name={language.name}
                  className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
                />
              ))}
          </div>
        </div>
        <div className="mt-5">
          I'm used to working with the following tools:
          <div className="flex flex-wrap gap-4 mt-3">
            {languagesAndTools.map((language) => (
              <LinkedBadge
                key={language.name}
                href={language.href}
                Icon={language.Icon}
                name={language.name}
                className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-zinc-700 px-2 py-1 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
