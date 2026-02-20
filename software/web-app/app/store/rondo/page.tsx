"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Zap, Wind, Shield, Gauge } from "lucide-react"

export default function RondoPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // 3D rotation transforms based on scroll
    const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 20, -10, 15, -5, 0])
    const rotateY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 180, 360, 540, 720])
    const rotateZ = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 5, -5, 0])
    const scale = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.55, 0.75, 0.95, 1], [0.6, 1.3, 0.9, 1.4, 1, 1.2, 0.8])
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.3])
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, 0])

    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-black transition-colors duration-300">
            <SiteHeader />

            <main ref={containerRef} className="flex-1 pt-16">
                {/* Hero Section with 3D Model */}
                <section className="relative h-[200vh]">
                    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                        {/* Background effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-cyan-100/50 dark:from-purple-950/50 dark:via-black dark:to-cyan-950/50 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(138,75,255,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(138,75,255,0.1),transparent_70%)]" />

                        {/* 3D Rotating Vehicle */}
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                rotateZ,
                                scale,
                                opacity,
                                y
                            }}
                            className="relative w-full max-w-4xl aspect-square"
                        >
                            {/* Egg-shaped vehicle representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[600px] h-[600px]">
                                    {/* Glow effects */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
                                    <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />

                                    {/* Main egg shape */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-[400px] h-[500px]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-600 rounded-[50%] opacity-90 shadow-2xl shadow-purple-500/50"
                                                style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
                                            <div className="absolute inset-4 bg-gradient-to-br from-purple-900/80 via-black/60 to-cyan-900/80 rounded-[50%]"
                                                style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />

                                            {/* Cockpit window */}
                                            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-24 bg-gradient-to-br from-cyan-400/40 to-purple-400/40 rounded-full backdrop-blur-sm border border-cyan-300/30" />

                                            {/* Detail lines */}
                                            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                                            <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating text */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 dark:from-purple-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent mb-4">
                                The Rondo
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">Egg-Shaped Airborne Aerodynamic Vehicle</p>
                        </motion.div>
                    </div>
                </section>

                {/* Specifications Section */}
                <section className="relative py-32 bg-gradient-to-b from-white via-purple-50 to-white dark:from-black dark:via-purple-950/20 dark:to-black transition-colors duration-300">
                    <div className="container px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Revolutionary Design</h2>
                            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                                The Rondo combines aerodynamic perfection with cutting-edge propulsion technology
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Wind, title: "Aerodynamic", desc: "0.18 drag coefficient" },
                                { icon: Zap, title: "Electric VTOL", desc: "Vertical takeoff & landing" },
                                { icon: Gauge, title: "Top Speed", desc: "320 km/h cruise" },
                                { icon: Shield, title: "Safety", desc: "AI-assisted flight control" }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                                    <div className="relative p-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl border border-purple-500/20 h-full transition-colors duration-300">
                                        <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-700 dark:text-gray-300">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Section Placeholder */}
                <section className="relative py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-white to-cyan-100/30 dark:from-purple-950/30 dark:via-black dark:to-cyan-950/30 transition-colors duration-300" />
                    <div className="container px-4 md:px-6 mx-auto relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative max-w-5xl mx-auto"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-50" />
                            <div className="relative aspect-video bg-gradient-to-br from-purple-200/50 to-cyan-200/50 dark:from-purple-900/50 dark:to-cyan-900/50 rounded-3xl border border-purple-500/30 flex items-center justify-center transition-colors duration-300">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                                        <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-2" />
                                    </div>
                                    <p className="text-2xl text-gray-900 dark:text-white font-semibold">Experience The Rondo in Flight</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2">3D Animation Coming Soon</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-32 bg-gradient-to-t from-white via-purple-50 to-white dark:from-black dark:via-purple-950/20 dark:to-black transition-colors duration-300">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                                Pre-Order Now
                            </h2>
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                                Be among the first to experience the future of personal air travel
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-lg px-8 py-6">
                                    Reserve Your Rondo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full border-purple-500/50 text-gray-900 dark:text-white hover:bg-purple-500/10 text-lg px-8 py-6">
                                    Download Brochure
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    )
}
