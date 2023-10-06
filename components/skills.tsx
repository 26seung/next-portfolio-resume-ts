"use client";
import { dataSkills } from "@/lib/constants";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 1);
  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      {/* 사용스킬 map */}
      <div className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-32">
        {dataSkills.map((skill, index) => (
          <div
            className="bg-white border border-black/20 rounded-xl px-5 py-3 focus:scale-125 hover:scale-125 active:scale-125 transition cursor-pointer dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
