"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

//  nextjs 지원하는 다크모드 버튼 적용
//  SSR에서 localstorage 의 정보값을 바로 가져오지 못하여 오류가 발생
//  useEffect 를 사용하여 클라이언트 측에서 렌더링 후 아이콘을 출력 하도록 작업
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <button
      className="fixed top-5 right-5 bg-amber-100 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-slate-700 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {loaded ? theme === "light" ? <BsSun /> : <BsMoon /> : <></>}
    </button>
  );
}
