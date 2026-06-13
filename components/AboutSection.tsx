import React from 'react'

const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Vue.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "AWS",
    "Docker",
]

function AboutSection() {
    return (
        <section id="about" className="max-w-4xl mx-auto px-4">
            <div className="py-16 md:py-20">
                <h2 className="text-center font-bold text-2xl mb-6">
                    Technologies I Work With
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutSection