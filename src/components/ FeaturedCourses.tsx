import React from 'react';
import courseData from "../data/music_courses.json";
import Link from 'next/link';
import { TailwindcssButtons } from './ui/TailwindcssButtons';
import { BackgroundGradientDemo } from './freaturecoursecards/BackgroundGradientDemo';
function FeaturedCourses() {
    return (
        <div className='py-12 bg-gray-900'>
            {/* 1st */}
            <div>
                <div className='text-center'>
                    <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Feature Projects</h2>
                </div>
            </div>

            {/* 2nd */}
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-[1200px] mx-auto'>
                    <BackgroundGradientDemo />
                    <BackgroundGradientDemo />
                    <BackgroundGradientDemo />
                </div>
            </div>

            {/* 3rd */}
            <div className='mt-20 text-center'>
                <Link href={"/courses"}>
                    <TailwindcssButtons />
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses