"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'

function HeroSection() {
    return (
        <section id='home'>
            <div className='flex flex-col text-center items-center justify-center my-10 py-16'>
                <div className='mt-4'>
                    <Image className='rounded-full shadow-2xl' src="/informal.jpg" alt='' width={250} height={250} />
                </div>
                <div className='py-2 px-2 mt-4 mx-4 max-w-3xl'>
                    <p className='text-lg mt-4 mb-6 text-left '>
                        Hello, I&#39;m{" "}
                        <span className='font-semibold text-teal-600'>
                            Habib,{" "}
                        </span>
                        an Informatics student currently residing in Yogyakarta, Indonesia.
                        My main area of expertise lies in{" "}
                        <span className='font-semibold text-teal-600'>
                            Fullstack Engineering{" "}
                        </span>
                        and also quite passionate about{" "}
                        <span className='font-semibold text-teal-600'>
                        cloud services{" "}
                        </span>
                         and {" "}
                        <span className='font-semibold text-teal-600'>
                            cloud engineering   .{" "}
                        </span>
                        My goal is to create software that not only simplifies tasks but also adds meaningful value to people&#39;s lives.
                    </p>
                    <Link
                    to='projects'
                    className='cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:text-neutral-500'
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection