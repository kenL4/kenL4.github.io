'use client'

import Image from "next/image";
import Hero from "./components/hero";
import { useRef } from "react";
import AboutMe from "./components/aboutme";

export default function Home() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="items-center justify-between">
      <Hero nextSectionRef={aboutMeRef}/>
      <AboutMe ref={aboutMeRef}/>
    </div>
  );
}
