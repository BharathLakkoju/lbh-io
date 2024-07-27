"use client";
import React from "react";
import Link from "next/link";
import LinkedBadge from "@/components/shared/LinkedBadge";
import { SiRust, SiShadcnui } from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Icon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import doit from "@/public/doit.png";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const languagesAndTools = [
  {
    name: "React",
    type: ["library", "framework", "current"],
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
    type: ["library", "framework", "fullstack", "current", "learn"],
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
    type: ["language", "currentlang"],
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
    type: ["language", "currentlang", "current"],
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
    type: ["language", "currentlang"],
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
    type: ["database", "current"],
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
    type: ["framework", "library", "current"],
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
    type: ["tool", "Version Control", "current"],
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
    type: ["tool", "deployment tool", "current"],
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
    type: ["library", "framework", "current"],
    Icon: <SiShadcnui className="size-2 mr-1" />,
    href: "https://ui.shadcn.com/",
  },
  {
    name: "Node.js",
    type: ["library", "framework", "current"],
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
  {
    name: "HTML",
    type: ["language"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="html"
      />
    ),
    href: "#",
  },
  {
    name: "CSS",
    type: ["language"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="css"
      />
    ),
    href: "#",
  },
  {
    name: "MongoDB",
    type: ["database"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="mongodb"
      />
    ),
    href: "https://mongodb.com",
  },
  {
    name: "Prisma ORM",
    type: ["library", "framework", "current"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="prisma"
      />
    ),
    href: "https://prisma.io",
  },
  {
    name: "Data Structures and Algorithms",
    type: ["Programming Skills", "learn"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=JHNvegaTfHjR&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="data structures and algorithms"
      />
    ),
    href: "",
  },
  {
    name: "GoLang",
    type: ["language", "learn"],
    Icon: (
      <BiLogoGoLang
        className="size-4 mr-1 text-blue-400"
        width={16}
        height={16}
      />
    ),
    href: "https://golang.org",
  },
  {
    name: "Docker",
    type: ["tool", "learn"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="docker"
      />
    ),
    href: "https://docker.com",
  },
  {
    name: "Rust",
    type: ["language", "learn"],
    Icon: (
      <SiRust className="size-4 mr-1 text-orange-600" width={16} height={16} />
    ),
    href: "https://rust.org",
  },
  {
    name: "Flutter",
    type: ["framework", "learn"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="flutter"
      />
    ),
    href: "https://flutter.dev",
  },
  {
    name: "firebase",
    type: ["framework", "tool", "learn"],
    Icon: (
      <Image
        src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
        className="size-4 mr-1"
        width={16}
        height={16}
        alt="firebase"
      />
    ),
    href: "https://firebase.google.com",
  },
];

export default function Homepage() {
  return (
    <>
      {/* <HomePage /> */}
      <span className="text-xl">hey, I'm Bharath 👋🏻</span>
      {/* <Separator className="mt-5 bg-[#111010] dark:bg-gray-200 " /> */}
      <div className="inline-block mt-7 text-sm">
        I'm an aspiring software engineer and a full-stack developer. I love to{" "}
        <Link
          className="dark:text-gray-200 dark:underline underline underline-offset-2 font-medium inline-flex align-middle px-1"
          href="#last"
        >
          build
          <ArrowUpRight className="size-5 group-hover:-rotate-[30deg]" />
        </Link>
        {` things that make a difference. I'm currently looking for an opportunity
        to work on a project that will help me grow as a developer and a person. `}
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
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
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
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
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
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
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
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
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
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
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
            className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
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
        {/* <Separator className="mt-5 bg-[#111010] dark:bg-gray-200" /> */}
        <div className="mt-7">
          My Current Tech Stack:
          <div className="flex flex-wrap gap-4 mt-3">
            {languagesAndTools
              .filter((language) => language.type.includes("current"))
              .map((language) => (
                <LinkedBadge
                  key={language.name}
                  href={language.href}
                  Icon={language.Icon}
                  name={language.name}
                  className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
                />
              ))}
          </div>
        </div>
        <div className="mt-10">
          Notable work and projects using current tech stack
          <div className="grid md:grid-cols-2 gap-5 mt-3 w-full justify-center items-center">
            <Link
              href="https://doit-io.vercel.app"
              className="flex items-center gap-2 max-w-[300px] md:max-w-[350px]"
              target="_blank"
            >
              <div className="flex items-center justify-between px-5 gap-3 min-w-[320px] md:min-w-[300px] min-h-[60px] dark:bg-[#262626] bg-gray-300 rounded-md">
                <Avatar>
                  <div className="flex items-center justify-center w-full h-full dark:bg-gray-300 bg-gray-100 rounded-full">
                    <AvatarImage
                      src="/doit.png"
                      alt="doit"
                      className="size-6"
                    />
                  </div>
                  <AvatarFallback className="flex items-center justify-center w-full h-full -ml-10">
                    <ExternalLink className="size-4 dark:text-white text-black" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex justify-between items-center min-w-[250px] md:min-w-[150px] md:gap-12">
                  <div className="dark:text-white text-black font-medium flex flex-col ">
                    <span className="text-lg md:text-sm ">
                      Task Management App
                    </span>
                    <span className="text-sm md:text-xs dark:text-gray-300 text-gray-600">
                      doit-io
                    </span>
                  </div>
                  <ArrowTopRightIcon className="size-8 dark:text-gray-400 text-gray-600 group-hover:text-gray-100 transform transition-transform duration-300" />
                </div>
              </div>
            </Link>
            <Link
              href="https://lbh-io.vercel.app"
              className="flex items-center gap-2"
              target="_blank"
            >
              <div className="flex items-center justify-between px-5 min-w-[320px] gap-1 md:min-w-[300px] min-h-[60px] dark:bg-[#262626] bg-gray-300 rounded-md">
                <Avatar>
                  <div className="flex items-center justify-center w-full h-full">
                    <AvatarImage
                      src="/favicon.ico"
                      alt="doit"
                      className="size-6"
                    />
                  </div>
                  <AvatarFallback className="flex items-center justify-center w-full h-full -ml-10">
                    <ExternalLink className="size-4 dark:text-white text-black" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex justify-between items-center min-w-[250px] md:min-w-[200px] md:gap-12">
                  <div className="dark:text-white text-black font-medium flex flex-col ">
                    <span className="text-lg md:text-sm ">Portfolio</span>
                    <span className="text-sm md:text-xs dark:text-gray-300 text-gray-600">
                      lbh-io
                    </span>
                  </div>
                  <ArrowTopRightIcon className="size-8 dark:text-gray-400 text-gray-600 group-hover:text-gray-100 transform transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex w-full justify-start text-xs mt-2">
            <div>you can learn more about my work</div>
            <Link
              className="dark:text-gray-200 dark:underline underline underline-offset-2 font-medium inline-flex align-middle px-1"
              href="/work"
            >
              here
              <ArrowUpRight className="size-5 group-hover:-rotate-[30deg]" />
            </Link>
          </div>
        </div>
        <div className="mt-10">
          My scope of interest:
          <div className="flex flex-wrap gap-4 mt-3">
            {languagesAndTools
              .filter((language) => language.type.includes("learn"))
              .map((language) => (
                <LinkedBadge
                  key={language.name}
                  href={language.href}
                  Icon={language.Icon}
                  name={language.name}
                  className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
                />
              ))}
          </div>
        </div>
        <div className="mt-7">
          Languages that I'm comfortable with:
          <div className="flex flex-wrap gap-4 mt-3">
            {languagesAndTools
              .filter((language) => language.type.includes("currentlang"))
              .map((language) => (
                <LinkedBadge
                  key={language.name}
                  href={language.href}
                  Icon={language.Icon}
                  name={language.name}
                  className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
                />
              ))}
          </div>
        </div>
        <div className="mt-7">
          I'm used to working with the following tools and languages:
          <div className="flex flex-wrap gap-4 mt-3">
            <LinkedBadge
              href="https://nextjs.org"
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
              className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
            />
            {languagesAndTools
              .filter(
                (language) =>
                  (language.type.includes("tool") &&
                    !language.type.includes("learn")) ||
                  (language.type.includes("language") &&
                    !language.type.includes("learn")) ||
                  (language.type.includes("framework") &&
                    !language.type.includes("learn"))
              )
              .map((language) => (
                <LinkedBadge
                  key={language.name}
                  href={language.href}
                  Icon={language.Icon}
                  name={language.name}
                  className="border text-xs md:text-sm border-gray-800 dark:border-gray-300 text-gray-200 bg-gray-300 dark:text-gray-100 dark:bg-[#262626] px-2 py-1 rounded-md"
                />
              ))}
          </div>
          <div id="last" className="mt-7">
            <span>
              I have a strong background in both frontend and backend
              development, with hands-on experience in technologies such as
              React, Next.js, Node.js, and various databases including MySQL and
              MongoDB. Additionally, my projects and work experience have
              equipped me with a solid foundation in building scalable and
              efficient web applications.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
