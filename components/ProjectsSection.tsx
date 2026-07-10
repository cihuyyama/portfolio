"use client"

import React from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
      {/* Section header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headingVariants}
        className="mb-14 md:mb-20"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-3">
          {"// selected works"}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Building things that
          <br />
          <span className="text-neutral-400 dark:text-neutral-600">actually ship.</span>
        </h2>
        <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
          From enterprise warehouse operations to consumer SaaS — each project below is
          currently in production, serving real users, and paying its own bills.
        </p>
      </motion.div>

      {/* Bento grid: featured project (full width) + two cards side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            large={project.featured}
          />
        ))}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 text-center font-mono text-sm text-neutral-500 dark:text-neutral-500"
      >
        More projects on{" "}
        <a
          href="https://github.com/cihuyyama"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 dark:text-teal-400 hover:underline underline-offset-4"
        >
          github.com/cihuyyama
        </a>
      </motion.p>
    </section>
  )
}

export default ProjectsSection
