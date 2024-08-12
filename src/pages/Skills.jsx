import React from 'react'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import IconCloud from "@/components/magicui/icon-cloud";
import BlurFade from '@/components/magicui/blur-fade';

const Skills = () => {

  const mySkills = [
    "react",
    "express",
    "nodedotjs",
    "mongodb",
    "redux",
    "javascript",
    "html5",
    "css3",
    "tailwindcss",
    "bootstrap",
    "cplusplus",
    "netlify",
    "github",
    "figma",
  ];

  const skillsText = "Skilled in taking projects from concept to completion, consistently delivering high-quality, scalable solutions on time, with a focus on innovation, excellence, and user satisfaction."

  return (
    <>
      <span id='SkillsPage' className="allCenter">
        <AnimatedShinyText className="inline-flex text-4xl items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>Skills</span>
        </AnimatedShinyText>
      </span>

      <section className="flex max-md:flex-col items-center md:justify-center my-10 max-md:mt-10">
        {/* Text Content */}
        <div className="sectionLeft max-md:text-center w-full p-4 md:w-2/5">
          <BlurFade delay={0.25} inView className="text-xl md:text-4xl text-black dark:text-white md:leading-[3rem]">
            {skillsText}
          </BlurFade>
        </div>

        {/* Skills */}
        <div className="sectionRight w-full md:w-2/5 allCenter">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
            <BlurFade delay={0.25} inView >
              <IconCloud iconSlugs={mySkills} />
            </BlurFade>
          </div>
        </div>


      </section>
    </>
  )
}

export default Skills

