import { ProjectData } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiNotionFill } from "react-icons/ri";

interface OwnProps {
  project: ProjectData;
}

const ProjectItem = ({ project }: OwnProps) => {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-2 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-3 px-5 sm:pl-10 sm:pr-0 sm:pt-8 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem]">
          {/* 제목 */}
          <h1 className="text-[1.3rem] font-extrabold">{project.title}</h1>
          {/* 내용 */}
          <p className="mt-5 pl-1 text-sm leading-relaxed text-gray-700 dark:text-white/70">
            {project.description}
          </p>
          {/* 개인프로젝트 */}
          <div className="text-[0.7rem] text-center px-2 py-1 sm:mt-auto rounded-md hover:scale-110 bg-pink-200 dark:bg-pink-600 w-20">
            {project.type}
          </div>
          {/* 사용스킬 */}
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tags.map((tag) => (
              <div
                className="bg-black/[0.7] px-3 py-1.5 text-[0.6rem] uppercase tracking-tight hover:scale-110 text-white rounded-full dark:text-white/70"
                key={tag.id}
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
        {/* image */}
        <div className="">
          <Image
            src={project.imgSrc}
            alt="Project Image"
            quality={100}
            width={500}
            height={500}
            priority
            className="absolute hidden sm:block top-7 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-10
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-10
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-20"
          />
          {/* notion & git. Link */}
          <div className="flex absolute top-[18.8rem] gap-2 right-10 group-even:right-[initial] group-even:left-10">
            <a
              className="text-base bg-white px-3 py-3 items-center flex gap-1 rounded-full focus:scale-110 hover:scale-110 transition cursor-pointer borderBlack dark:bg-white/20"
              href={project.moreUrl}
              target="_blank"
            >
              {/* notion */}
              <RiNotionFill className="opacity-60" />
            </a>
            <a
              className="text-base bg-white px-3 py-3 items-center flex gap-1 rounded-full focus:scale-110 hover:scale-110 transition cursor-pointer borderBlack dark:bg-white/20"
              href={project.github}
              target="_blank"
            >
              {/* git */}
              <BsGithub className="opacity-60" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectItem;
