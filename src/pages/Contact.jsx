import React from 'react'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import ContactForm from '../myComponents/ContactForm'
import BlurFade from '@/components/magicui/blur-fade'
import AnimatedBeam from '../myComponents/AnimatedBeam'
import ShineBorder from '@/components/magicui/shine-border'
import { useSelector } from 'react-redux'

const Contact = () => {

    const isDarkMode = useSelector(state => state.isDarkMode)

    return (
        <>
            <span id='ContactPage' className="allCenter mt-20">
                <AnimatedShinyText className="inline-flex text-4xl items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span>Get In Touch</span>
                </AnimatedShinyText>
            </span>

            <BlurFade delay={0.25} inView>
                <ShineBorder
                    className="m-auto -z-10 w-11/12 sm:w-4/5 flex max-md:flex-col items-center md:justify-center my-10 py-10 max-md:mt-10 md:shadow-xl"
                    // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    color={isDarkMode ? "white" : "black"}
                >
                    <AnimatedBeam />
                    <ContactForm />
                </ShineBorder>
            </BlurFade>

        </>
    )
}

export default Contact