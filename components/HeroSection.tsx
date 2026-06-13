"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'

function HeroSection() {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center py-20 md:py-28 px-4">
                <div className="relative">
                    <Image
                        className="rounded-full shadow-2xl ring-4 ring-teal-600/20"
                        src="/informal.jpg"
                        alt="Muhammad Iqbal Al Habib"
                        width={200}
                        height={200}
                        priority
                    />
                </div>
                <div className="mt-8 max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Hi, I&apos;m{" "}
                        <span className="text-teal-600 dark:text-teal-400">Habib</span>
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                        An Informatics student based in Yogyakarta, Indonesia.
                        I specialize in{" "}
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                            Fullstack Engineering
                        </span>
                        {" "}and am passionate about{" "}
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                            cloud services
                        </span>
                        . My goal is to build software that simplifies tasks and adds meaningful value.
                    </p>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="inline-block cursor-pointer text-white font-semibold px-8 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection