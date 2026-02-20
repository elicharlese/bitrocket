"use client"

import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"

// Neon ring component for cyberpunk aesthetic
export const NeonRing = ({
  size = 200,
  color = "from-purple-500 to-cyan-500",
  opacity = 0.5,
  blur = "blur-2xl",
  animationDelay = 0,
  className = "",
}) => {
  return (
    <div
      className={`absolute rounded-full ${blur} bg-gradient-to-r ${color} opacity-${opacity * 100} animate-pulse ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}s`,
      }}
    />
  )
}

interface PageLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-purple-950/20 to-black overflow-x-hidden">
      {/* Cyberpunk background elements */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] bg-purple-900/20 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-cyan-900/20 animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-[400px] h-[400px] rounded-full blur-[80px] bg-fuchsia-900/20 animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></div>

        {/* Grid overlay for cyberpunk effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,15,84,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,15,84,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Horizontal light beam */}
        <div className="absolute top-1/3 -left-40 h-0.5 w-[150%] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform rotate-[5deg] blur"></div>
        <div className="absolute top-2/3 -left-40 h-0.5 w-[150%] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent transform -rotate-[8deg] blur"></div>
      </div>

      <SiteHeader />

      <main className="flex-1 pt-24">
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          {/* Neon rings */}
          <NeonRing
            size={700}
            color="from-purple-600/30 to-cyan-500/30"
            blur="blur-[100px]"
            className="absolute -top-60 -right-60 z-0"
          />
          <NeonRing
            size={500}
            color="from-fuchsia-600/20 to-blue-500/20"
            blur="blur-[80px]"
            className="absolute bottom-0 -left-60 z-0"
            animationDelay={2}
          />

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {title}
                </h1>
                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-[900px] text-gray-300 md:text-xl/relaxed"
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {children}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
