"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StorePage() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-black dark:via-purple-950/20 dark:to-black transition-colors duration-300">
            <SiteHeader />

            <main className="flex-1 pt-24">
                <section className="container px-4 md:px-6 mx-auto py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 dark:from-purple-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent mb-6">
                            BitRocket Store
                        </h1>
                        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                            Discover revolutionary vehicles powered by blockchain technology
                        </p>
                    </motion.div>

                    {/* Featured Product: The Rondo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative max-w-6xl mx-auto"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30" />
                        <div className="relative bg-gradient-to-br from-purple-100/50 to-cyan-100/50 dark:from-purple-950/50 dark:to-cyan-950/50 rounded-3xl border border-purple-500/30 overflow-hidden backdrop-blur-sm transition-colors duration-300">
                            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="inline-block w-fit rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-600 dark:text-purple-300 border border-purple-500/20">
                                        Featured Product
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                        The Rondo
                                    </h2>
                                    <p className="text-xl text-gray-700 dark:text-gray-300">
                                        An egg-shaped airborne aerodynamic vehicle that redefines personal transportation
                                    </p>
                                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            Vertical takeoff and landing capability
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            0.18 drag coefficient for maximum efficiency
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            AI-assisted flight control system
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            Blockchain-powered energy management
                                        </li>
                                    </ul>
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Link href="/store/rondo">
                                            <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600">
                                                Explore The Rondo
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                        <Button size="lg" variant="outline" className="rounded-full border-purple-500/50 text-gray-900 dark:text-white hover:bg-purple-500/10">
                                            View Specifications
                                        </Button>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-center">
                                    <div className="relative w-full aspect-square max-w-md">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative w-64 h-80">
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-600 rounded-[50%] opacity-90 shadow-2xl shadow-purple-500/50"
                                                    style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
                                                <div className="absolute inset-4 bg-gradient-to-br from-purple-900/80 via-black/60 to-cyan-900/80 rounded-[50%]"
                                                    style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
                                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-16 bg-gradient-to-br from-cyan-400/40 to-purple-400/40 rounded-full backdrop-blur-sm border border-cyan-300/30" />
                                                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Coming Soon Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20 text-center"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">More Products Coming Soon</h3>
                        <p className="text-gray-600 dark:text-gray-400">Stay tuned for more revolutionary vehicles and accessories</p>
                    </motion.div>
                </section>
            </main>

            <SiteFooter />
        </div>
    )
}
