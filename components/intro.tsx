"use client";
import React from "react";
import Animation from "./animation";
import { HiDownload } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { RiNotionFill } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const introText = [
  {
    index: 1,
    font: "",
    label: "👋 안녕하세요. 저는 개발자",
  },
  {
    index: 2,
    font: "text-5xl",
    label: "이유승 입니다.",
  },
];

const Intro = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="flex items-center justify-center body-font max-w-[10rem] sm:mb-0 scroll-mt-[10rem] "
    >
      {/* //  intro text */}
      <div className="mb-32 mt-4 px-4 text-2xl font-medium text-center !leading-[1.5] sm:text-4xl">
        {introText.map((intro) => (
          <div className={cn("font-bold", intro.font)} key={intro.index}>
            {intro.label}
          </div>
        ))}

        {/* //  intro link (notion, git) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-40 text-lg mt-10 font-medium">
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            이력서 PDF
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-xl rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://ebony-statistic-df3.notion.site/Junior-Backend-LeeYuSeung-343f30692dc542ad82a103fffe42cb81"
            target="_blank"
          >
            <RiNotionFill />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-xl rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/26seung"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
        {/* //  lottie animation */}
        <Animation />
        {/* //  line */}
        <div className="flex items-center justify-center bg-gray-200 h-16 w-1 rounded-full mt-4 sm:mx-auto dark:bg-opacity-20"></div>
      </div>
    </section>
  );
};

export default Intro;
