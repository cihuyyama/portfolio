"use client"

import React, { useEffect, useRef, ReactNode } from "react"

interface Props {
    offset?: string
    children?: ReactNode
}

export default function SlideUp({ children, offset = "0px" }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slideUpCubiBezier")
                        observer.unobserve(entry.target)
                    }
                })
            },
            { rootMargin: offset }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [offset])

    return (
        <div ref={ref} className="opacity-0">
            {children}
        </div>
    )
}