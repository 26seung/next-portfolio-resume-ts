"use client";
import {
  SectionNameType,
  useActiveSectionContext,
} from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//  페이지 이동에 따른 헤더CSS 이벤트
export function useSectionInView(
  SectionNameType: SectionNameType,
  threshold = 0.8
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionNameType);
    }
  }, [inView, setActiveSection, timeOfLastClick, SectionNameType]);

  return {
    ref,
  };
}
