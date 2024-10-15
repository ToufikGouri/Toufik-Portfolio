import React from 'react'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { MagicCard } from '@/components/magicui/magic-card'
import BlurFade from '@/components/magicui/blur-fade'
import { useSelector } from 'react-redux'
import Marquee from "@/components/magicui/marquee";
// --------------Images Import--------------
import EpicRecipesImg from "../assets/projects/EpicRecipes.png"
import WeblyImg from "../assets/projects/Webly.png"
import SocialNotesImg from "../assets/projects/SocialNotes.png"
import UdixImg from "../assets/projects/Udix.png"
import SmartMartImg from "../assets/projects/SmartMart.png"
import PlayReactImg from "../assets/projects/PlayReact.png"
import iNoteBookImg from "../assets/projects/iNoteBook.png"
import CryptoChaseImg from "../assets/projects/CryptoChase.png"
import BeastCodexImg from "../assets/projects/BeastCodex.png"
import FoodWorldImg from "../assets/projects/FoodWorld.png"


const Projects = () => {

    const isDarkMode = useSelector(state => state.isDarkMode)

    // Best 3 projects
    const bestProjects = [
        {
            name: "EpicRecipes",
            img: EpicRecipesImg,
            desc: "A platform for Cooking lovers. Search, select and make your favorite recipes and add your own recipe easily.",
            url: "https://epicrecipes.vercel.app"
        },
        {
            name: "Webly",
            img: WeblyImg,
            desc: "Webly is a modern blog platform integrating Contentful as a headless CMS for seamless content management.",
            url: "https://webly.vercel.app"
        },
        {
            name: "SocialNotes",
            img: SocialNotesImg,
            desc: "Adding your notes privately & connecting with world through social media at one place easily and securily.",
            url: "https://socialnote.vercel.app"
        },
    ]

    // List of all projects
    const allProjects = [
        {
            name: "Udix",
            img: UdixImg,
            desc: "A beautiful UI focused website for marketing agency that you'll love.",
            url: "https://udix7.netlify.app"
        },
        {
            name: "SmartMart",
            img: SmartMartImg,
            desc: "The coolest e-commerce wesbite with stunnig effects & features.",
            url: "https://smartmart7.netlify.app"
        },
        {
            name: "PlayReact",
            img: PlayReactImg,
            url: "https://playreact7.netlify.app"
        },
        {
            name: "iNoteBook",
            img: iNoteBookImg,
            url: "https://inotebook7.netlify.app"
        },
        {
            name: "CryptoChase",
            img: CryptoChaseImg,
            url: "https://crypto-chase.netlify.app"
        },
        {
            name: "BeastCodex",
            img: BeastCodexImg,
            url: "https://beastcodex.netlify.app"
        },
        {
            name: "FoodWorld",
            img: FoodWorldImg,
            url: "https://foodworld1.netlify.app"
        },
    ];


    return (
        <>
            <span id='ProjectsPage' className="allCenter">
                <AnimatedShinyText className="inline-flex text-4xl items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>Recent Projects</span>
                </AnimatedShinyText>
            </span>

            {/* Top Projects */}
            <section className="flex max-md:flex-col items-center md:justify-center my-10 max-md:mt-10">
                {bestProjects.map((val, ind) =>
                    <BlurFade delay={0.25 + ind * 0.05} inView key={ind} className="mx-4">
                        <MagicCard
                            className="cursor-pointer h-64 w-64 sm:h-96 sm:w-96 my-2 shadow-2xl"
                            gradientColor={isDarkMode ? "#262626" : "#D9D9D955"}
                        >
                            <a href={val.url} target='_blank' className='h-full text-center allCenter justify-between'>
                                <img src={val.img} alt={val.name} className='hover:scale-105 duration-200' />
                                <h2 className="text-2xl sm:text-3xl font-bold">{val.name}</h2>
                                <p className="sm:text-lg mb-2 dark:text-gray-400">{val.desc}</p>
                            </a>
                        </MagicCard>
                    </BlurFade>
                )}
            </section >

            {/* List of all Projects */}
            <BlurFade delay={0.25} inView className="mx-4 flex max-md:flex-col justify-center items-center">
                <div className="relative flex h-full w-[350px] md:w-96 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-background px-20 md:shadow-xl">
                    <div className="flex flex-row gap-4 [perspective:300px]">
                        <Marquee
                            className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
                            vertical
                            style={{
                                transform:
                                    "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
                            }} >
                            {allProjects.map((val, ind) => (
                                <a href={val.url} target='_blank' key={ind} >
                                    <img
                                        src={val.img}
                                        alt={val.name}
                                        className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover: ring-1 hover:ring-neutral-300"
                                    />
                                </a>
                            ))}
                        </Marquee>
                    </div>
                </div>
                {/* Text */}
                <p className='text-center text-3xl max-md:mt-6'>
                    & many more, <br /> view all on <a href="https://github.com/ToufikGouri" target='_blank' className='text-purple-500 hover:text-purple-400'>GitHub.</a>
                    <br /> <span className='text-sm dark:text-gray-400'>Tip: click on any project to visit it.</span>
                </p>
            </BlurFade> 

        </>
    )
}

export default Projects

