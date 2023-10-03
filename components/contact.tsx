"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      {/* "" */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block w-8 h-8 text-gray-400 mb-8"
        viewBox="0 0 975.036 975.036"
      >
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <div className="mb-32">
        <div className="mb-10 xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <span className="text-gray-700 mt-6 dark:text-white/80">
            연락을 기다리고 있습니다.
          </span>
          <br className="hidden lg:inline-block" />
          <a
            className="text-sm border-b-2 mt-1 inline-block border-gray-400"
            href="mailto:wkaaks23@gmail.com"
          >
            wkaaks23@gmail.com
          </a>
        </div>
        {/* icon animation */}
        <div className="h-full flex flex-col items-center justify-center">
          <div className="w-10 h-10 relative animate-bounce">
            <Image alt="Logo" src="/logo.png" fill sizes="none" />
          </div>
        </div>
        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-2 mb-4"></span>
        {/* name , junior */}
        <h2 className="text-gray-900 dark:text-white font-medium title-font tracking-wider text-basic mb-1">
          LEE YUSEUNG
        </h2>
        <p className="text-gray-500 text-sm mb-5">junior developer</p>
        {/* git & notion. Link */}
        <div className="flex justify-center mt-7">
          <a
            href="https://github.com/26seung"
            target="blank"
            className="inline-flex text-xs text-white dark:text-white bg-indigo-500 focus:scale-[1.15] hover:scale-[1.15] border-0 py-3 px-3 mr-2 focus:outline-none hover:bg-indigo-600 rounded"
          >
            GitHub
          </a>
          <a
            href="https://ebony-statistic-df3.notion.site/Junior-Backend-LeeYuSeung-343f30692dc542ad82a103fffe42cb81?pvs=4"
            target="blank"
            className="inline-flex text-xs text-white dark:text-white bg-indigo-500 focus:scale-[1.15] hover:scale-[1.15] border-0 py-3 px-3 mr-2 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Notion
          </a>
        </div>
      </div>
    </section>
  );
}
