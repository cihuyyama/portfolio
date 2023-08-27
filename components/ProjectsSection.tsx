import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from './SlideUp';

const projects = [
    {
        name: "Netflix Clone",
        description: "Web Streaming application offers similar functionality and UI to Netflix and was built using SWR React hooks library for data fetching and axios for http client.",
        image: "/netflixclone.png",
        github: "https://github.com/cihuyyama/netflix-clone",
        link: "https://netflix-clone-cihuyyama.vercel.app/",
        stack: ['Next Js', 'Tailwind CSS', 'Prisma', 'MongoDB']
    },
    {
        name: "KopiSini POS",
        description: "Web application system management Point-of-Sale for CoffeShop. Using online transaction to get the exact amount of the products.",
        image: "/kopsin.png",
        github: "https://github.com/cihuyyama/kopsin",
        link: "https://kopsin.000webhostapp.com/",
        stack: ['Laravel', 'PHP', 'Bootstrap']
    }
]

function ProjectsSection() {
    return (
        <section id='projects'>
            <h1 className='my-10 text-center font-bold text-2xl'>
                Projects
            </h1>

            <div className='flex flex-col space-y-28'>
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset='-300px 0px -300px 0px'>
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className='mt-8 md:w-1/2 md:ml-8 mx-4'>
                                        <Link href={project.link} target='_blank'>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className='rounded-xl shadow-xl hover:opacity-70'
                                            />
                                        </Link>
                                    </div>
                                    <div className='mt-4 md:w-1/2 mx-4'>
                                        <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                                        <p className='md:mr-12 text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                                            {project.description}
                                        </p>
                                        <div className='flex flex-row align-bottom gap-4 my-5'>
                                        {project.stack.map((item, index) => (
                                            <div key={index} className='font-semibold text-teal-400'>
                                                {item}
                                            </div>
                                        ))}
                                        </div>
                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <Link href={project.github} target="_blank">
                                                <BsGithub size={30} className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare size={30} className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection