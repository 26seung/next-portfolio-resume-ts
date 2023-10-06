"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import ProjectItem from "./project-item";
import { useSectionInView } from "@/lib/hooks";
import axios from "axios";
import { ProjectData } from "@/lib/types";

// Notion API data
async function notionData() {
  const response = await axios.post("/api/project");
  // 가공된 데이터를 받기
  const notionData = response.data;
  return notionData;
}

const Projects = () => {
  //  프로젝트 길이, threshold 추가
  const { ref } = useSectionInView("Projects", 0.5);
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const [countProject, setCountProject] = useState<string>();

  useEffect(() => {
    if (projectData.length === 0) {
      notionData().then((res) => {
        setProjectData(res);
        setCountProject(res.length);
      });
    }
  }, [projectData]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="mb-32 ">
        <div className="text-center mb-14">
          <h2 className="text-xs text-indigo-700 dark:text-indigo-500 tracking-widest font-medium title-font mb-1">
            PORTFOLIO WORK
          </h2>
          {/* 현재 작업한 프로젝트 count */}
          <h1 className="sm:text-xl text-xl font-medium title-font text-gray-900 dark:text-gray-50">
            Current Number of Projects :
            <span className="pl-2 text-2xl text-indigo-400 dark:text-amber-300">
              {countProject}
            </span>
          </h1>
        </div>
        <div className="text-center mb-5 text-sm text-gray-500 font-medium title-font">
          프로젝트 소개와 코드는 (Notion, Git) 아이콘 클릭
        </div>
        <div></div>
        {/* 작업한 프로젝트 map */}
        {projectData.map((data, index) => (
          <ProjectItem key={index} project={data} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
