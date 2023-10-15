"use client";
import React from "react";
import Lottie from "react-lottie-player";
import animationJson from "@/public/animation.json";

const Animation = () => {
  return (
    <div className="flex justify-end pl-80 ">
      <Lottie
        loop
        animationData={animationJson}
        play
        style={{ width: 380, height: 380 }}
      />
    </div>
  );
};

export default Animation;
