"use client";
import React from "react";
import Animation from "./animation";
import { dataIntro } from "@/lib/constants";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="flex items-center justify-center body-font max-w-[50rem] sm:mb-0 scroll-mt-[100rem] "
    >
      {/* <div className="relative"> */}
      {/* <div className=""> */}
      <div className="mb-32 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <div className="font-bold">{dataIntro[1]}</div>
        <div className="font-bold">{dataIntro[2]}</div>
        {/* </div> */}
        <Animation />
      </div>
    </section>
  );
};

export default Intro;
