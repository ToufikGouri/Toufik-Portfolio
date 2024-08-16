import React from "react"
import AboutImg from "../assets/AboutImg.png"
import { useSelector } from "react-redux"
import { MagicCard } from "@/components/magicui/magic-card"
import { University } from "lucide-react"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import BlurFade from "@/components/magicui/blur-fade"

const About = () => {

    const aboutMeText = "I am Toufik Gouri, an experienced Full-Stack Developer based in Bhiwandi (Thane), India. I am proficient in ReactJS, Redux, NodeJs, ExpressJs, and MongoDB, with a proven track record of developing responsive and dynamic web applications."
    const isDarkMode = useSelector(state => state.isDarkMode)

    return (
        <div className="h-screen max-md:mb-20">
            <span id="AboutPage" className="allCenter">
                <AnimatedShinyText className="inline-flex text-4xl items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>About Me</span>
                </AnimatedShinyText>

            </span>

            <section className="flex max-md:flex-col items-center md:justify-center my-10  max-md:mt-10">
                {/* About Image */}
                <div className="sectionLeft w-full md:w-2/5 allCenter">
                    <div className='h-[300px] w-[300px] rounded-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(${AboutImg})` }}></div>
                </div>

                {/* Text Content */}
                <div className="sectionRight w-full p-4 md:w-2/5">
                    <BlurFade delay={0.25} inView className="md:text-2xl max-md:mx-2 text-justify text-black dark:text-white" >
                        {aboutMeText}
                    </BlurFade>

                    {/* Highest Qualification */}
                    <BlurFade delay={0.25} inView>
                        <MagicCard
                            className="cursor-pointer my-6 p-4 flex-col items-center justify-center shadow-2xl"
                            gradientColor={isDarkMode ? "#262626" : "#D9D9D955"}
                        >
                            <h1 className="text-center font-bold mb-2 text-xl sm:text-2xl allCenter flex-row max-md:justify-start">Highest Qualification&nbsp;<University /></h1>
                            <h2 className="text-xl sm:text-2xl font-bold">Bachelor Of Engineering In Computer Science</h2>
                            <p className="sm:text-lg mb-2 text-gray-400">SknSits Sinhgad College Of Engineering, Lonavala | SPPU</p>
                            <p className="text-lg sm:text-xl font-semibold text-green-700">2020-2024 | Completed</p>
                        </MagicCard>
                    </BlurFade>

                </div>
            </section>

        </div>
    )
}

export default About

