import React from "react";

import { projectsData } from "@/libs/data";
import Project from "./project";
import SectionHeading from "./Section-heading";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-28">
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
