"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface PathBasedStyleProps {
  children: ReactNode;
}

const PathBasedStyle = ({ children }: PathBasedStyleProps) => {
  const pathname = usePathname();

  // Determine background class based on pathname
  let bgClass = "";
  if (pathname !== "/") {
    bgClass = "mt-[80px]"; // Darker black gradient with subtle depth
  }
  // bgClass = "bg-gradient-to-br from-[#38bdf8] via-[#1d4ed8] to-[#38bdf8]"; // blue gradient
  // bgClass = "bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]";


  return <main className={`flex-grow ${bgClass}`}>{children}</main>;
};

export default PathBasedStyle;
