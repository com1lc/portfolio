import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eatNsplit from "@/public/eatNsplit.png";
import likedlist from "@/public/likedlist.png";
import theWildOasis from "@/public/theWildOasis.png";
import pizza from "@/public/pizza.png";
import vansLife from "@/public/vansLife.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated",
        location: "Songkla, TH",
        description:
            "I graduated from Prince of Songkla University in Computer Engineering.",
        icon: React.createElement(LuGraduationCap),
        date: "2017",
    },
    {
        title: "ABAP Developer",
        location: "Bangkok, TH",
        description:
            "I worked as a ABAP developer for 1 years and 9 month at Atos IT Solutions and Services A/S,I also upskilled to the Jr.ABAPer.",
        icon: React.createElement(CgWorkAlt),
        date: "2018 - 2020",
    },
    {
        title: "Technician",
        location: "Nakhon Si Thammarat, TH",
        description:
            "Installation 3G/4G/5G equipments both internal & external of server rack cabinet, Commissioning and integration BBU (NodeB/eNodeB/IPRAN),Wiring and cable management,Producing installation report for customer, Feeder measurement for testing VSWR & return loss,Fix alarm & problem at site",
        icon: React.createElement(FaReact),
        date: "2022 - 2023",
    },
] as const;

export const projectsData = [
    {
        title: "Liked List",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: [
            "React",
            "Next.js",
            "MongoDB",
            "Tailwind",
            "mongoose",
            "NextAuth",
        ],
        url: "https://likedlist.vercel.app/",
        imageUrl: likedlist,
    },
    {
        title: "Vans Life",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        url: "https://vans-life-mu.vercel.app/",
        imageUrl: vansLife,
    },
    {
        title: "Fast Pizza Co.",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Redux", "Tailwind", "React-router-dom"],
        url: "https://fast-pizza-coco.vercel.app",
        imageUrl: pizza,
    },
    {
        title: "Eat N' Split",
        description:
            "Split a bill with friends and family in a quick and easy way.",
        tags: ["React", "React-router-dom", "javascript", "CSS"],
        url: "https://eat-n-split-brown.vercel.app",
        imageUrl: eatNsplit,
    },
    {
        title: "The Wild Oasis",
        description:
            "The Wild Oasis is a user friendly hotel management application. This application is designed to manage hotel operations, and various customization options.",
        tags: [
            "React",
            "react-router",
            "react-query",
            "Styled-Component",
            "supabase",
            "react-hot-toast",
        ],
        url: "https://the-wild-oasis-eta-ecru.vercel.app",
        imageUrl: theWildOasis,
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React-Router-Dom",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Styled Components",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Express",
    "PostgreSQL",
    "Framer Motion",
] as const;
