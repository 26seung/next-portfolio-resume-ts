"use client";
import { dataHeader } from "@/lib/constants";
import React, { createContext, useContext, useState } from "react";

export type SectionNameType = (typeof dataHeader)[number]["label"];

type ActiveSectionContextType = {
  activeSection: SectionNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// ContextAPI 사용해서 Header 이벤트 작업
const SectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContext = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionNameType>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export default ActiveSectionContext;

//  Context
export const useActiveSectionContext = () => {
  const context = useContext(SectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
