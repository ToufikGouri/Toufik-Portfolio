import React, { useRef } from 'react'
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Lightbulb, Target, NotepadText, Sparkles, Laptop, MonitorCheck, Heart } from 'lucide-react'

const AnimatedBeamByMe = () => {

    // Refs of all the divs
    const containerRef = useRef(null);
    const div1Ref = useRef(null);   // left refs
    const div2Ref = useRef(null);   // left refs
    const div3Ref = useRef(null);   // left refs
    const midRef = useRef(null);
    const outputRef = useRef(null);

    // Animation Beam Props
    const userSide = [
        {
            text: "Your Vision",
            logo: <Lightbulb />,
            ref: div1Ref,
        },
        {
            text: "Your Goals",
            logo: <Target />,
            ref: div2Ref,
        },
        {
            text: "Your Concept",
            logo: <NotepadText />,
            ref: div3Ref,
        }
    ]
    const mySide = {
        text: "My Skills & Work",
        ref: midRef,
        logo1: <Sparkles />,
        logo2: <Laptop />
    }
    const outputSide = {
        text: "Your Dream Project",
        ref: outputRef,
        logo1: <Heart />,
        logo2: <MonitorCheck />
    }


    return (
        <>
            <div
                className={cn(
                    "relative w-full sm:w-[55%] max-md:mb-10 flex items-center justify-center rounded-lg bg-background md:p-10",
                )}
                ref={containerRef}
            >
                <div className="md:ms-14 max-sm:text-[10px] flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
                    {/* User side - Left*/}
                    <div className="flex flex-col justify-center gap-2">
                        {userSide.map(val =>
                            <div ref={val.ref} key={val.text} className='z-10 relative py-2'>
                                <div className='z-10 flex size-11 md:size-12 items-center justify-center rounded-full border-2 border-border text-black bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]'>{val.logo}</div>
                                <p className={`w-28 borders text-center md:text-end absolute || max-md:right-2/4 max-md:translate-x-2/4 max-md:top-14 ||  md:right-14 md:top-2/4 md:-translate-y-2/4`}>{val.text}</p>
                            </div>
                        )}
                    </div>
                    {/* My side - Mid*/}
                    <div className="flex flex-col justify-center">
                        <div ref={mySide.ref} className='z-10 relative'>
                            <div className='z-10 flex size-14 md:size-20 items-center justify-center rounded-full border-2 border-border text-black bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]'>
                                {mySide.logo1}{mySide.logo2}
                            </div>
                            <p className={`w-16 md:w-40 text-center absolute left-[50%] -translate-x-[50%]`}>{mySide.text}</p>
                        </div>
                    </div>
                    {/* Outside - Right */}
                    <div className="flex flex-col justify-center">
                        <div ref={outputSide.ref} className='z-10 relative'>
                            <div className='z-10 flex size-14 md:size-20 items-center justify-center rounded-full border-2 border-border text-black bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]'>
                                {outputSide.logo1}{outputSide.logo2}
                            </div>
                            <p className={`w-16 md:w-40 text-center absolute left-[50%] -translate-x-[50%]`}>{outputSide.text}</p>
                        </div>
                    </div>
                </div>
                {/* Animated beams */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={midRef}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={midRef}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={midRef}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={midRef}
                    toRef={outputRef}
                />
            </div>
        </>
    )
}

export default AnimatedBeamByMe

