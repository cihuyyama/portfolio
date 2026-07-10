"use client"
import React, { useState } from "react"
import { Link } from "react-scroll"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { AiOutlineGithub } from "react-icons/ai"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Projects", page: "projects" },
]

export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)

    return (
        <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-4 md:block">
                        <Link to="home" smooth={true} duration={500}>
                            <h2 className="text-xl font-bold cursor-pointer hover:text-teal-600 transition-colors duration-200">
                                Iqbal Al Habib
                            </h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                                onClick={() => setNavbar(!navbar)}
                                aria-label={navbar ? "Close menu" : "Open menu"}
                            >
                                {navbar ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <div className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.page}
                                    className="block text-neutral-600 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200 cursor-pointer"
                                    activeClass="!text-teal-600 dark:!text-teal-400"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onClick={() => setNavbar(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="https://github.com/cihuyyama"
                                rel="noreferrer"
                                target="_blank"
                                aria-label="GitHub profile"
                                className="block md:inline-block"
                            >
                                <AiOutlineGithub
                                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400"
                                    size={24}
                                />
                            </a>
                            {currentTheme === "dark" ? (
                                <button
                                    onClick={() => setTheme("light")}
                                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    aria-label="Switch to light mode"
                                >
                                    <RiSunLine size={20} className="text-yellow-400" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                    className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    aria-label="Switch to dark mode"
                                >
                                    <RiMoonFill size={20} className="text-neutral-700" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}