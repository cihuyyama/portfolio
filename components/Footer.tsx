import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram
} from "react-icons/ai"

function Footer() {
    return (
        <footer className="mx-auto max-w-5xl px-4 sm:px-6">
            <hr className="w-full h-px mx-auto bg-neutral-200 dark:bg-neutral-700 border-0" />
            <div className="py-6 flex flex-col text-center text-neutral-600 dark:text-neutral-400 md:flex-row md:justify-between md:items-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Muhammad Iqbal Al Habib
                </p>
                <div className="flex items-center justify-center space-x-4 mt-3 md:mt-0">
                    <a
                        href="https://github.com/cihuyyama"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <AiOutlineGithub
                            className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-teal-600 dark:hover:text-teal-400"
                            size={22}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/iqbalal.habib/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <AiOutlineInstagram
                            className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-teal-600 dark:hover:text-teal-400"
                            size={22}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/iqbalalhabib/"
                        rel="noreferrer"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-teal-600 dark:hover:text-teal-400"
                            size={22}
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer