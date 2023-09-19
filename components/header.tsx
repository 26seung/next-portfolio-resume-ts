"use client";
import { dataHeader } from "@/lib/constants";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = () => {
  // const [activeSection, setActiveSection] = useState("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div>
      {/* z-[999] : 제일 위로 가게 설정 */}
      <header className="z-[999] relative">
        {/* <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"> */}
        {/* <div className="fixed top-0 left-1/2 -translate-x-1/2 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center rounded-full w-full bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"> */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center rounded-full px-5 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
            {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center"> */}
            <div className="flex flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {/* nav값 뿌리기 */}
              {dataHeader.map((data) => (
                <div
                  key={data.hash}
                  className="flex items-center justify-center relative"
                >
                  <Link
                    href={data.hash}
                    className={cn(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                      activeSection === data.label &&
                        "text-gray-950 dark:text-gray-200"
                      // : "text-zinc-400 bg-red-800"
                    )}
                    onClick={() => {
                      setActiveSection(data.label);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {data.label}
                    {data.label === activeSection && (
                      <span className="bg-gray-200 rounded-3xl absolute inset-0 -z-10 dark:bg-gray-800"></span>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
