"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const aboutText = [
  {
    index: 1,
    font: "flex mb-4",
    label:
      "저는 주방가전을 주로 취급하는 제조업 회사에서 B2B 영업을 담당하여 첫 회사를 시작한 경험이 있습니다. 이 경험은 개발자와 관련된 업무는 아니지만, 새로운 제품과 거래처를 개발하고 관리 하였으며 사람들과의 원활한 커뮤니케이션을 통해 다양한 성과를 달성 하였고 이것은 저에게 성장의 기회가 되었던 다양한 경험입니다.",
  },
  {
    index: 2,
    font: "flex mb-4",
    label:
      "이 후, 개발자로 직무 전환을 위해 6개월 과정의 국비교육을 수료 하였고, RPA 엔지니어로서 업무 프로세스 자동화 시나리오를 개발하고 운영하는 업무를 담당 했었습니다.",
  },
  {
    index: 3,
    font: "",
    label:
      "풀 스택 개발자로 성장하기 위해서 Spring Boot, Next 등의 여러 기술들과 MSA 아키텍처 방식에도 관심을 가지고 학습하고 있습니다. 클라우드 환경에 대한 학습을 위하여 AWS 클라우드의 자격증 중 하나인 Solutions Architect-Associate (SAA) 자격증을 취득하였습니다.",
  },
  {
    index: 4,
    font: "flex justify-center",
    label:
      "이러한 노력들은 개발자로서 능력을 키우기 위한 것이며, 앞으로도 꾸준한 학습을 통해 기초를 다듬고 새로운 기술을 습득하여 전문가로 성장하겠습니다.",
  },
  {
    index: 5,
    font: "flex justify-center mt-5",
    label:
      "저는 끊임없는 도전과 성장에 적극적이며, 새로운 도전을 통해 더 큰 성과를 이뤄내고 싶습니다.",
  },
];

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-28 mt-4 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-32">
        <p className="mb-3">
          {aboutText.map((about) => (
            <span className={cn("font-medium", about.font)} key={about.index}>
              {about.label}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
