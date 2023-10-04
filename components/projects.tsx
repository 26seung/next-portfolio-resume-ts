"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import ProjectItem from "./project-item";
import { useSectionInView } from "@/lib/hooks";
import axios from "axios";
import { ProjectType } from "@/lib/types";

type rowData = {
  title: string;
  github: string;
  description: string;
  imgSrc: string;
  type: string;
  tags: string;
  moreUrl: string;
}[];

// Notion API data
export async function notionData() {
  const response = await axios.post("/api/project");
  const rows = response.data.results.map((res: ProjectType) => res);
  // 데이터 가공
  const rowData: rowData = rows.map((row: ProjectType) => ({
    title: row.properties.name.title[0].plain_text,
    github: row.properties.GitHub.url,
    description: row.properties.Description.rich_text[0].plain_text,
    imgSrc: row.cover.file?.url,
    type: row.properties.Type.multi_select[0].name,
    tags: row.properties.Tags.multi_select,
    moreUrl: row.public_url,
  }));
  // 가공된 데이터 받기
  // const rows:rowData = response.data;
  console.log("rowData : ", rows);
  return rows;
}

const Projects = () => {
  //  프로젝트 길이, threshold 추가
  const { ref } = useSectionInView("Projects", 0.5);
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [countProject, setCountProject] = useState<string>();

  useEffect(() => {
    if (projectsData.length === 0) {
      notionData().then((res) => {
        setProjectsData(res);
        setCountProject(res.length);
        // console.log("::", res);
      });
    }
  }, [projectsData]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="mb-32 ">
        <div className="text-center mb-14">
          <h2 className="text-xs text-indigo-700 dark:text-indigo-500 tracking-widest font-medium title-font mb-1">
            PORTFOLIO WORK
          </h2>
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
        {/* item map */}
        {projectsData.map((data, index) => (
          <ProjectItem key={index} project={data} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
