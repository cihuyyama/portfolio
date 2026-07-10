"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________"

function HeroSection() {
  const headlineRef = useRef<HTMLSpanElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    // GSAP scramble/decoder effect on the name
    const target = headlineRef.current
    const roleTarget = roleRef.current
    if (!target || !roleTarget) return

    const finalName = "Habib"
    const finalRole = "Fullstack Engineering"

    const scramble = (
      element: HTMLElement,
      finalText: string,
      duration: number,
      delay: number
    ) => {
      const chars = finalText.split("")
      const state = chars.map(() => ({
        char: SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
        locked: false,
      }))

      const tl = gsap.timeline({ delay })
      tl.to(
        {},
        {
          duration,
          ease: "power2.inOut",
          onUpdate: function () {
            const progress = this.progress()
            const lockedCount = Math.floor(progress * chars.length)

            state.forEach((s, i) => {
              if (i < lockedCount) {
                s.locked = true
                s.char = chars[i]
              } else if (!s.locked) {
                s.char =
                  SCRAMBLE_CHARS[
                    Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                  ]
              }
            })

            element.textContent = state.map((s) => s.char).join("")
          },
          onComplete: () => {
            element.textContent = finalText
          },
        }
      )
    }

    scramble(target, finalName, 1.4, 0.4)
    scramble(roleTarget, finalRole, 1.8, 1.0)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Terminal grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Radial ambient glow */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 -z-10 h-[500px] bg-gradient-to-b from-teal-500/10 via-teal-500/5 to-transparent blur-3xl"
      />

      <div className="flex flex-col text-center items-center justify-center py-20 md:py-32 px-4">
        {/* Terminal prompt eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-8 flex items-center gap-2"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
          <span>~/portfolio ─ available for work</span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full bg-teal-500/20 blur-2xl scale-110"
          />
          <Image
            className="relative rounded-full shadow-2xl ring-4 ring-teal-600/20 dark:ring-teal-400/20"
            src="/informal.jpg"
            alt="Muhammad Iqbal Al Habib"
            width={180}
            height={180}
            priority
          />
        </motion.div>

        {/* Headline with GSAP scramble */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I&apos;m{" "}
            <span
              ref={headlineRef}
              className="text-teal-600 dark:text-teal-400 font-mono"
            >
              _____
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
            An Informatics student based in Yogyakarta, Indonesia.
            <br className="hidden md:block" />
            {" "}I specialize in{" "}
            <span
              ref={roleRef}
              className="font-semibold text-neutral-900 dark:text-neutral-100 font-mono"
            >
              _____
            </span>
            {" "}— building software that ships and adds real value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="group inline-flex items-center gap-2 cursor-pointer text-white font-semibold px-8 py-3.5 bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Scroll to projects section"
            >
              <span>View Projects</span>
              <span className="font-mono transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="inline-flex items-center gap-2 cursor-pointer font-mono text-sm px-6 py-3.5 text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <span>./about-me</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
