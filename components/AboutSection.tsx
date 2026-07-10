"use client"

import React from "react"
import { motion } from "framer-motion"
import { HiOutlineBriefcase, HiOutlineShieldCheck } from "react-icons/hi"

interface Experience {
  role: string
  company: string
  location: string
  mode: string
  period: string
  bullets: string[]
  stack: string[]
}

const experiences: Experience[] = [
  {
    role: "Full-Stack Developer (Freelance)",
    company: "PT Bee Digital",
    location: "Jakarta, Indonesia",
    mode: "Remote",
    period: "Feb 2026 – Jun 2026",
    bullets: [
      "Built core ERP Warehouse Management System (WAKASA Automotive) end-to-end as lead full-stack developer — covering inbound, outbound, stock opname, and reporting modules.",
      "Implemented backend with Laravel RESTful APIs, queue jobs, role-based access control, and inventory state machine to support multi-warehouse automotive operations.",
    ],
    stack: ["Laravel", "Vue.js", "Ant Design", "MySQL", "Docker"],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "JogjaCode",
    location: "Yogyakarta, Indonesia",
    mode: "Hybrid",
    period: "Sep 2024 – Dec 2025",
    bullets: [
      "Architected and developed ERP-based SIM SPMI modules (audit, document control, standard compliance) for multiple universities, supporting end-to-end internal quality assurance workflows.",
      "Built role-based multi-tenant dashboards for UNIPOL and UMPO, enabling per-institution configuration, evaluation matrices, and audit reporting.",
    ],
    stack: ["Next.js", "React.js", "Node.js", "Fastify", "Tailwind CSS", "MySQL"],
  },
]

const skillGroups = [
  {
    label: "// languages",
    items: ["JavaScript", "TypeScript", "Go / Golang", "PHP"],
  },
  {
    label: "// frameworks",
    items: [
      "Next.js",
      "React.js",
      "Vue.js",
      "Nuxt.js",
      "TanStack Start",
      "Redux Toolkit",
      "Node.js",
      "Fastify",
      "Express.js",
      "Laravel",
      "Gin",
      "Fiber",
    ],
  },
  {
    label: "// data",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Gorm"],
  },
  {
    label: "// tools & cloud",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Cloudflare",
      "Vercel",
      "Postman",
      "Figma",
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

function AboutSection() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        custom={0}
        className="mb-14 md:mb-20"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-3">
          {"// about"}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Full-stack engineer with
          <br />
          <span className="text-neutral-400 dark:text-neutral-600">a bias for shipping.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
          I build production ERP, SaaS, and retail platforms end-to-end — from database schema
          to pixel-perfect UI. Currently based in Yogyakarta, open to remote work worldwide.
        </p>
      </motion.div>

      {/* Two-column: experience (left, wider) + right rail (education + cert) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">
        {/* Experience column */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="flex items-center gap-3"
          >
            <HiOutlineBriefcase className="text-teal-600 dark:text-teal-400" size={22} />
            <h3 className="text-lg font-mono uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
              Experience
            </h3>
          </motion.div>

          <ol className="relative border-l-2 border-neutral-200 dark:border-neutral-800 space-y-10 pl-6">
            {experiences.map((exp, idx) => (
              <motion.li
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={idx + 2}
                className="relative"
              >
                {/* Timeline dot */}
                <span
                  aria-hidden
                  className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center"
                >
                  <span className="absolute h-4 w-4 rounded-full bg-teal-500/20 animate-pulse" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-teal-500 ring-2 ring-white dark:ring-zinc-950" />
                </span>

                {/* Period badge */}
                <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-1">
                  {exp.period} · {exp.mode}
                </p>
                <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  {exp.role}
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-3">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 leading-relaxed">
                      <span className="mt-2 inline-block h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span key={s} className="chip-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Right rail: certification */}
        <div className="space-y-10">
          {/* Certification */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={5}
          >
            <div className="flex items-center gap-3 mb-5">
              <HiOutlineShieldCheck className="text-teal-600 dark:text-teal-400" size={22} />
              <h3 className="text-lg font-mono uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                Certification
              </h3>
            </div>
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-5 space-y-2">
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-50 leading-snug">
                National Certified Developer
              </h4>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                BNSP · Indonesian Professional Certification Authority
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                Validated proficiency in application development, adhering to national
                competency standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills matrix */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        custom={6}
        className="mt-20 md:mt-28"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400 mb-3">
          {"// stack"}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
          Tools of the trade.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={idx + 7}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-5"
            >
              <p className="font-mono text-xs text-teal-600 dark:text-teal-400 mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="chip-mono hover:border-teal-500/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
