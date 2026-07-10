"use client"

import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { BsGithub, BsArrowUpRight } from "react-icons/bs"
import { HiOutlineStatusOnline } from "react-icons/hi"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  large?: boolean
}

const accentMap = {
  teal: {
    ring: "ring-teal-500/30",
    glow: "from-teal-500/40 via-cyan-500/20 to-transparent",
    text: "text-teal-500 dark:text-teal-400",
    dot: "bg-teal-500",
    border: "hover:border-teal-500/50",
  },
  amber: {
    ring: "ring-amber-500/30",
    glow: "from-amber-500/40 via-orange-500/20 to-transparent",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    border: "hover:border-amber-500/50",
  },
  violet: {
    ring: "ring-violet-500/30",
    glow: "from-violet-500/40 via-fuchsia-500/20 to-transparent",
    text: "text-violet-500 dark:text-violet-400",
    dot: "bg-violet-500",
    border: "hover:border-violet-500/50",
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

export default function ProjectCard({
  project,
  index,
  large = false,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const accent = accentMap[project.accent]

  // Mouse-tracked motion values for 3D tilt physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring transforms for buttery motion
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 }
  const rotateX: MotionValue<number> = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  )
  const rotateY: MotionValue<number> = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    springConfig
  )

  // Glow position tracks cursor
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm p-6 md:p-8 transition-colors duration-300 ${accent.border} ${large ? "md:col-span-2" : ""}`}
    >
      {/* Cursor-tracked radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${glowX.get()} ${glowY.get()}, rgba(20, 184, 166, 0.08), transparent 40%)`,
        }}
      />
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${accent.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}
      />

      {/* Terminal-style status bar */}
      <div className="relative flex items-center justify-between mb-6 font-mono text-xs">
        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 flex-wrap">
          <span className={`inline-block h-2 w-2 rounded-full ${accent.dot} shadow-[0_0_8px_currentColor] ${accent.text}`} />
          <span className="uppercase tracking-widest">
            {project.status === "live" ? "LIVE" : project.status === "wip" ? "WIP" : "ARCHIVED"}
          </span>
          <span className="text-neutral-400 dark:text-neutral-600">/</span>
          <span>{project.year}</span>
          {project.company && (
            <>
              <span className="text-neutral-400 dark:text-neutral-600">/</span>
              <span className="normal-case tracking-normal">{project.company}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-500">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              aria-label={`${project.name} source code`}
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <BsGithub size={16} />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              aria-label={`${project.name} live demo`}
              className={`transition-colors hover:${accent.text}`}
            >
              <HiOutlineStatusOnline size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Preview area */}
      {project.image && (
        <div className="relative mb-6 overflow-hidden rounded-xl border border-neutral-200/60 dark:border-neutral-800 aspect-[16/9] bg-neutral-100 dark:bg-neutral-950">
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative space-y-4">
        <div>
          <p className={`font-mono text-xs uppercase tracking-widest mb-2 ${accent.text}`}>
            {project.category}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {project.tagline}
          </p>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights list */}
        <ul className="space-y-1.5 text-sm text-neutral-600 dark:text-neutral-400">
          {project.highlights.slice(0, large ? 5 : 3).map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className={`mt-1.5 inline-block h-1 w-1 rounded-full ${accent.dot} flex-shrink-0`} />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            className={`inline-flex items-center gap-2 mt-4 font-mono text-sm ${accent.text} hover:gap-3 transition-all group/cta`}
          >
            <span className="border-b border-current pb-0.5">
              Visit {new URL(project.liveUrl).host}
            </span>
            <BsArrowUpRight
              size={14}
              className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
