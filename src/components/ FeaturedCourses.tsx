import React from 'react';
import courseData from "../data/music_courses.json";
import Link from 'next/link';
import { TailwindcssButtons } from './ui/TailwindcssButtons';
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
            <div>2</div>

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