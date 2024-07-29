import React from "react";
import ProjectTile from "@/components/shared/work/ProjectTile";
import { Icon } from "lucide-react";
import Image from "next/image";
import { SiPhpmyadmin, SiShadcnui } from "react-icons/si";
import { link } from "fs";
import ExperienceTile from "./ExperienceTile";

const projects = [
  {
    name: "task management app - doit-io",
    description:
      "A web application to manage and maintain user's tasks and information.",
    details: [
      {
        name: "Next.js",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
            className="size-4 mr-1"
            alt="nextjs"
            width={300}
            height={300}
          />
        ),
        href: "https://nextjs.org/",
      },
      {
        name: "React",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
            className="size-4 mr-1"
            alt="react"
            width={300}
            height={300}
          />
        ),
        href: "https://react.dev/",
      },
      {
        name: "PostgreSQL",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
            className="size-4 mr-1"
            alt="postgresql"
            width={300}
            height={300}
          />
        ),
        href: "https://postgresql.org",
      },
      {
        name: "TypeScript",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
            className="size-4 mr-1"
            alt="typescript"
            width={300}
            height={300}
          />
        ),
        href: "https://typescriptlang.org",
      },
      {
        name: "Prisma ORM",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000"
            className="size-4 mr-1"
            alt="prisma"
            width={300}
            height={300}
          />
        ),
        href: "https://prisma.io/",
      },
      {
        name: "Node.js",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
            alt="NodeJS"
            width={16}
            height={16}
            className="size-4 mr-1"
          />
        ),
        href: "https://nodejs.org/",
      },
      {
        name: "Git",
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
        name: "zod",
        Icon: (
          <Image
            src="https://zod.dev/logo.svg"
            className="size-4 mr-1"
            alt="zod"
            width={300}
            height={300}
          />
        ),
        href: "https://zod.dev/",
      },
      {
        name: "Tailwind CSS",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
            className="size-4 mr-1"
            alt="tailwindcss"
            width={300}
            height={300}
          />
        ),
        href: "https://tailwindcss.com/",
      },
      {
        name: "Shadcn UI Kit",
        Icon: <SiShadcnui className="size-2 mr-1" />,
        href: "https://shadcnui.com/",
      },
    ],
    link: "https://github.com/bharathlakkoju/doit-io",
    deployedlink: "https://doit-io.vercel.app/",
  },
  {
    name: "t&c privacy policy checking browser extension - t_checker",
    description:
      "A Browser extension which states reliability of privacy policies and terms included in the webpage that is being viewed. This provides Integration and Innovation to Execution of AI based Extensions • My role is to create a backend framework using Django to get requests and scrape the data then process to give valid Terms and conditions of the site.",
    details: [
      {
        name: "Django",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=AksudKrBQryM&format=png&color=5C9800"
            className="size-4 mr-1"
            alt="django"
            width={300}
            height={300}
          />
        ),
        href: "https://www.djangoproject.com/",
      },
      {
        name: "Python for Django",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "https://www.python.org/",
      },
      {
        name: "Tailwind CSS",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
            className="size-4 mr-1"
            alt="tailwindcss"
            width={300}
            height={300}
          />
        ),
        href: "https://tailwindcss.com/",
      },
      {
        name: "Git",
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
        name: "Render.com",
        Icon: (
          <Image
            src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/gkq3dkkfkec8edd6fuay"
            className="size-4 mr-1"
            alt="render"
            width={300}
            height={300}
          />
        ),
        href: "https://render.com/",
      },
      {
        name: "Machine Learning",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=114322&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "https://www.python.org/",
      },
      {
        name: "Rest API",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=45057&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "#",
      },
      {
        name: "chrome extension",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=12782&format=png&color=5C7CFA"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "https://chromewebstore.google.com/",
      },
    ],
    link: "https://github.com/bharathlakkoju/T_Checker",
    deployedlink: "",
  },
  {
    name: "api based movies and songs recommendations - aio-recommender",
    description:
      "A web app to test and imporove my knowledge over RESTful API's and Backend Development. This web app is used to showcase and retrieve predicted recommendations from api based database queries. It generates a list of recommened movies and songs with a single search of movie or a song name.",
    details: [
      {
        name: "Django",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=AksudKrBQryM&format=png&color=5C9800"
            className="size-4 mr-1"
            alt="django"
            width={300}
            height={300}
          />
        ),
        href: "https://www.djangoproject.com/",
      },
      {
        name: "Python for Django",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "https://www.python.org/",
      },
      {
        name: "Tailwind CSS",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
            className="size-4 mr-1"
            alt="tailwindcss"
            width={300}
            height={300}
          />
        ),
        href: "https://tailwindcss.com/",
      },
      {
        name: "Rest API",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=45057&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "https://www.django-rest-framework.org/",
      },
      {
        name: "Git",
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
        name: "Spotify API",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=G9XXzb9XaEKX&format=png&color=000000"
            className="size-4 mr-1"
            alt="spotify"
            width={300}
            height={300}
          />
        ),
        href: "https://developer.spotify.com/documentation/web-api/",
      },
      {
        name: "TMDB API",
        Icon: (
          <Image
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            className="size-4 mr-1"
            alt="tmdb"
            width={300}
            height={300}
          />
        ),
        href: "https://www.themoviedb.org/documentation/api",
      },
    ],
    link: "https://github.com/bharathlakkoju/aio-recommender",
    deployedlink: "https://aio-6mmt.onrender.com/",
  },
  {
    name: "showcase of video resumes - v-resume",
    description:
      "A web app to showcase my video resumes. It is a simple web app that uses a video player to showcase the video resumes of my college students. It is also integrated with authentication and authorization using php and phpmyadmin.",
    details: [
      {
        name: "PHP",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "https://www.php.net/",
      },
      {
        name: "MySQL",
        Icon: (
          <Image
            src="https://img.icons8.com/color/48/000000/mysql-logo.png"
            className="size-4 mr-1"
            alt="mysql"
            width={300}
            height={300}
          />
        ),
        href: "https://www.mysql.com/",
      },
      {
        name: "Bootstrap css",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000"
            className="size-4 mr-1"
            alt="python"
            width={300}
            height={300}
          />
        ),
        href: "https://getbootstrap.com/",
      },
      {
        name: "Git",
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
        name: "PHPMyAdmin",
        Icon: <SiPhpmyadmin className="size-4 mr-1" />,
        href: "https://www.phpmyadmin.net/",
      },
      {
        name: "HTML5",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="html"
          />
        ),
        href: "https://www.w3schools.com/html/",
      },
      {
        name: "CSS3",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="css"
          />
        ),
        href: "https://www.w3schools.com/css/",
      },
    ],
    link: "https://github.com/bharathlakkoju/v-resume",
    deployedlink: "",
  },
  {
    name: "api based star wars character data - swapi_task",
    description:
      "A web app that presents StarWars data using swapi api which is integrated to the React application tech stack. This website implements pagination and fetching using api calls.",
    details: [
      {
        name: "React",
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
        name: "vitejs",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="react"
          />
        ),
        href: "https://vitejs.dev/",
      },
      {
        name: "Typescript",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
            className="size-4 mr-1"
            alt="typescript"
            width={300}
            height={300}
          />
        ),
        href: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwindcss",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
            className="size-4 mr-1"
            alt="tailwindcss"
            width={300}
            height={300}
          />
        ),
        href: "https://tailwindcss.com/",
      },
      {
        name: "Shadcnui",
        Icon: <SiShadcnui className="size-4 mr-1" />,
        href: "https://ui.shadcn.com/",
      },
      {
        name: "swapi",
        Icon: (
          <Image
            src="https://swapi.dev/static/favicon.ico"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="react"
          />
        ),
        href: "https://swapi.dev/",
      },
    ],
    link: "https://github.com/bharathlakkoju/swapi_task",
    deployedlink: "https://swapitask.netlify.app/",
  },
  {
    name: "fun project with html, css and js - potatoloop",
    description:
      "A fun project with html, css and javascript. Open the link and click anywhere to see the magic happen.",
    details: [
      {
        name: "HTML5",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="html"
          />
        ),
        href: "https://www.w3schools.com/html/",
      },
      {
        name: "CSS3",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="css"
          />
        ),
        href: "https://www.w3schools.com/css/",
      },
      {
        name: "Javascript",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="js"
          />
        ),
        href: "https://www.w3schools.com/js/",
      },
      {
        name: "Tailwindcss",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
            className="size-4 mr-1"
            width={300}
            height={300}
            alt="tailwindcss"
          />
        ),
        href: "https://tailwindcss.com/",
      },
      {
        name: "React",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="react"
          />
        ),
        href: "https://react.dev/",
      },
      {
        name: "Node.js",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
            alt="NodeJS"
            width={16}
            height={16}
            className="size-4 mr-1"
          />
        ),
        href: "https://nodejs.org/en/",
      },
    ],
    link: "https://github.com/bharathlakkoju/potatoloop",
    deployedlink: "https://potatoloop.netlify.app/",
  },
  {
    name: "weather forecast using city name - hcfweather",
    description:
      "A Weather Search website that is implemented using HTML, CSS and JS to display the searched city name's weather at the moment. Used OpenWeatherApi to integrate the weather telecasting functionalities.",
    details: [
      {
        name: "HTML5",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="html"
          />
        ),
        href: "https://www.w3schools.com/html/",
      },
      {
        name: "CSS3",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="css"
          />
        ),
        href: "https://www.w3schools.com/css/",
      },
      {
        name: "Javascript",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="js"
          />
        ),
        href: "https://www.w3schools.com/js/",
      },
      {
        name: "OpenWeatherApi",
        Icon: (
          <Image
            src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_60x60.png"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="openweather"
          />
        ),
        href: "https://openweathermap.org/api",
      },
    ],
    link: "https://github.com/bharathlakkoju/hcf-weather",
    deployedlink: "https://hcfweather.netlify.app/",
  },
  {
    name: "Organic farming awareness website - orgafarms_srp",
    description:
      "A Project for my college, SRP - Societal Relevance Project based on Organic Farming Awareness to every one",
    details: [
      {
        name: "HTML5",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="html"
          />
        ),
        href: "https://www.w3schools.com/html/",
      },
      {
        name: "CSS3",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="css"
          />
        ),
        href: "https://www.w3schools.com/css/",
      },
      {
        name: "Javascript",
        Icon: (
          <Image
            src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
            className="size-4 mr-1"
            width={16}
            height={16}
            alt="js"
          />
        ),
        href: "https://www.w3schools.com/js/",
      },
    ],
    link: "https://github.com/bharathlakkoju/orgafarms_srp",
    deployedlink: "https://orgafarms.netlify.app/",
  },
];

const experiences = [
  {
    name: "Salesforce Developer Virtual Internship",
    company: "SmartInternz",
    description:
      "Gained experience on developing Salesforce content management and development of LWC and implement Apex. Completed Salesforce Developer SuperSet with 13 SuperBadges with a total of 80,600 Points and an overall 68 Badges with Expeditioner Rank.",
    duration: "3 mo's",
    time: "May 2023 - July 2023",
    link: "https://drive.google.com/file/d/11Y2AXI3NmrTREWr5eUZaYFYPc5W4JBZ-/view?usp=sharing",
  },
];

export default function WorkPage() {
  return (
    <>
      <div>
        <span className="font-medium text-2xl">projects</span>
        <div>
          {projects.map((project) => (
            <ProjectTile
              key={project.name}
              name={project.name}
              description={project.description}
              details={project.details}
              link={project.link}
              deployedlink={project.deployedlink}
            />
          ))}
        </div>
      </div>
      <div>
        <span className="font-medium text-2xl">experience</span>
        <div>
          {experiences.map((experience) => (
            <ExperienceTile key={experience.name} {...experience} />
          ))}
        </div>
      </div>
    </>
  );
}
