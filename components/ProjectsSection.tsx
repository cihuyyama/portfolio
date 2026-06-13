import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
        name: "Netflix Clone",
        description: "A streaming web app with Netflix-like UI, built with SWR for data fetching and Axios as the HTTP client.",
        image: "/netflixclone.png",
        github: "https://github.com/cihuyyama/netflix-clone",
        link: "https://netflix-clone-cihuyyama.vercel.app/",
        stack: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    },
    {
        name: "KopiSini POS",
        description: "A point-of-sale management system for coffee shops with online transaction tracking and product management.",
        image: "/kopsin.png",
        github: "https://github.com/cihuyyama/kopsin",
        link: "https://kopsin.000webhostapp.com/",
        stack: ["Laravel", "PHP", "Bootstrap"],
    },
]

function ProjectsSection() {
    return (
        <section id="projects" className="max-w-5xl mx-auto px-4">
            <h2 className="py-10 text-center font-bold text-3xl">
                Projects
            </h2>

            <div className="flex flex-col space-y-20 pb-16">
                {projects.map((project, idx) => (
                    <div key={idx}>
                        <SlideUp offset="-200px 0px -200px 0px">
                            <div className="flex flex-col md:flex-row md:space-x-10 items-center">
                                <div className="md:w-1/2">
                                    <Link href={project.link} target="_blank">
                                        <Image
                                            src={project.image}
                                            alt={`${project.name} screenshot`}
                                            width={1000}
                                            height={600}
                                            className="rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                                        />
                                    </Link>
                                </div>
                                <div className="mt-6 md:mt-0 md:w-1/2">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                        {project.name}
                                    </h3>
                                    <p className="text-base leading-relaxed mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.stack.map((item, index) => (
                                            <span
                                                key={index}
                                                className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            aria-label={`${project.name} source code`}
                                        >
                                            <BsGithub
                                                size={24}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400"
                                            />
                                        </Link>
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            aria-label={`${project.name} live demo`}
                                        >
                                            <BsArrowUpRightSquare
                                                size={24}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection