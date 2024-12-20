"use client"
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { BackgroundLines } from "@/components/ui/background-lines";


function HeroSection() {
    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col max-md:px-[16px]">
            <div
                className="h-[100vh] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
            >
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="p-4 relative z-10 w-full text-center" >
                    <h1
                        className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
                    >Master the art of music</h1>
                    <p
                        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                    >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
                    <div className="mt-4">
                        <Link href={"/courses"}>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
                            >
                                Explore courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </BackgroundLines>
    )
}

export default HeroSection