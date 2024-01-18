"use client";

import React from "react";

import { projectsData } from "@/libs/data";
import Project from "./project";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/libs/hook";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
