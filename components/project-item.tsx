import { ProjectData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiNotionFill } from "react-icons/ri";
import { PiArrowArcLeftFill, PiArrowArcRightFill } from "react-icons/pi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface OwnProps {
  project: ProjectData;
}

const ProjectItem = ({ project }: OwnProps) => {
  const providers = [
    { key: "notion", providerHref: project.moreUrl, Icon: RiNotionFill },
    { key: "github", providerHref: project.github, Icon: BsGithub },
  ];
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
          <div className="text-[0.7rem] text-center px-2 py-1 sm:mt-auto rounded-md hover:scale-110 bg-pink-200 dark:bg-pink-600 w-[5.3rem]">
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
        <div>
          <Image
            src={project.imgSrc}
            alt="Project Image"
            // quality={100}
            sizes="350px"
            width={500}
            height={500}
            placeholder="blur"
            blurDataURL={project.imgSrc}
            // blurDataURL={"/logo.png"}
            priority
            className="absolute hidden sm:block top-5 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-5
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-5
            group-even:group-hover:translate-y-4
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-20"
          />
          {/* notion & git. Link */}
          <div className="flex absolute top-[18.8rem] gap-2.5 right-10 group-even:right-[initial] group-even:left-10 ">
            {providers.map((provider) => (
              <Link
                key={provider.key}
                href={provider.providerHref}
                target="_blank"
                className="text-base border border-gray-400 dark:bg-black px-3 py-3 items-center flex gap-1 rounded-full hover:scale-125 transition cursor-pointer group-hover:dark:bg-white/25 group-hover:bg-yellow-100"
              >
                <provider.Icon className="opacity-60" />
              </Link>
            ))}
          </div>
          <div className="flex absolute top-[19.5rem] gap-1 right-[9.5rem] group-even:left-[9.5rem] group-even:right-[initial] ">
            <div className="flex group-hover:opacity-100 opacity-0 gap-1.5 mt-0.5 text-current animate-wiggle">
              <FaArrowLeft className="group-odd:hidden" />
              <span className="text-xs font-light">자세히 보기</span>
              <FaArrowRight className="group-even:hidden" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectItem;
