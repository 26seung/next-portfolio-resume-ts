"use client";

import SectionHeading from "./section-heading";
import ProjectItem from "./project-item";
import { useSectionInView } from "@/lib/hooks";
import axios from "axios";
import { ProjectData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

// Notion API data
const fetchNotions = async () => {
  const response = await axios.post("/api/project");
  return response.data;
};

const Projects = () => {
  //  프로젝트 길이, threshold 추가
  const { ref } = useSectionInView("Projects", 0.38);

  // react-query 사용하여 data 가져오기
  const { data } = useQuery({
    queryKey: ["notionData"],
    queryFn: fetchNotions,
  });

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
              {data?.length}
            </span>
          </h1>
        </div>
        <div className="text-center mb-5 text-sm text-gray-500 font-medium title-font">
          프로젝트 소개와 코드는 (Notion, Git) 아이콘 클릭
        </div>
        <div></div>
        {/* 작업한 프로젝트 map */}
        {data?.map((data: ProjectData, index: number) => (
          <ProjectItem key={index} project={data} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
