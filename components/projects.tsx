"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import ProjectItem from "./project-item";
import { useSectionInView } from "@/lib/hooks";
import axios from "axios";

export async function notionData() {
  const response = await axios.post("/api/project");
  const rows = response.data.results.map((res: string) => res);
  return rows;
}

const Projects = () => {
  //  프로젝트 길이, threshold 추가
  const { ref } = useSectionInView("Projects", 0.5);
  const [projectsData, setProjectsData] = useState<string[]>([]);
  const [countProject, setCountProject] = useState<string>();

  useEffect(() => {
    if (projectsData.length === 0) {
      notionData().then((res) => {
        setProjectsData(res);
        setCountProject(res.length);
        console.log("::", res);
      });
    }
  }, []);

  console.log("::");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="mb-32 ">
        <h1 className="mb-14 text-center sm:text-xl text-xl font-medium title-font text-gray-900">
          Current Number of Projects :
          <span className="pl-2 text-2xl text-indigo-400 dark:text-amber-300">
            {countProject}
          </span>
        </h1>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
