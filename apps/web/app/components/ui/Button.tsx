"use client";
import { motion, useAnimation } from "motion/react";
import { useState } from "react";

interface ButtonProps {
  isSignin: boolean;
  onClick?: () => void;
}

export default function Button({ isSignin, onClick }: ButtonProps) {
  const controls = useAnimation();

  const handleTap = async () => {
    await controls.start({
      scale: [1, 0.98, 1.02, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    if (onClick) onClick();
  };

  return (
    <motion.button
      onClick={handleTap}
      className="relative overflow-hidden bg-[#FF0080] text-white p-2 rounded-xl w-80 cursor-pointer"
      animate={controls}
    >
      <span className="text-white">{isSignin ? "Sign in" : "Sign up"}</span>
    </motion.button>
  );
}
