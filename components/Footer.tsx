import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram
} from "react-icons/ai";

function Footer() {
    return (
        <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl'>
            <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
            <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
                <div>© 2023 Muhammad Iqbal Al Habib</div>
                <div className='flex flex-row items-center justify-center space-x-2 mb-1'>
                    <a href="https://github.com/cihuyyama" rel="noreferrer" target="_blank">
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/iqbalal.habib/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineInstagram
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/iqbalalhabib/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                            size={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer