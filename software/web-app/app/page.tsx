"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, Bell, Fuel, Timer, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Replace the existing header with our SiteHeader component
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Neon ring component for cyberpunk aesthetic
const NeonRing = ({
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

/* Add @keyframes for the scan effect */
const scanAnimation = `
@keyframes scan {
  0% { transform: translateY(-100%); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(1000%); opacity: 0; }
}
`

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Add keyframes to the document
    const styleElement = document.createElement("style")
    styleElement.innerHTML = scanAnimation
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

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
      {/* Then replace the header JSX with: */}
      <SiteHeader />
      <main className="flex-1 pt-24">
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <div className="container px-4 md:px-6 relative">
            {/* Neon ring background elements */}
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
            <NeonRing
              size={300}
              color="from-cyan-500/30 to-purple-600/30"
              blur="blur-[60px]"
              className="absolute top-1/2 left-1/3 z-0"
              animationDelay={1}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center relative z-10"
            >
              {/* Vertical neon line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent hidden lg:block"></div>
              <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20">
                    Revolutionizing EV Technology
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Blockchain Technology Meets the Future of EVs
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed">
                    Offset your EV charging costs with gas used in smart contracts. BitRocket transforms your vehicle
                    into a supercar with an innovative new power source.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-20 animate-pulse"
                  style={{ animationDuration: "4s" }}
                ></div>
                <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                  {/* Cyberpunk grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(138,75,255,0.3),transparent_70%)]"></div>
                  <img
                    src="/blockchain-ev-network.png"
                    alt="BitRocket EV Integration"
                    className="w-full h-full object-contain p-8"
                  />

                  {/* Neon scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
                </div>
                {/* Neon ring highlights */}
                <NeonRing
                  size={100}
                  color="from-cyan-500 to-blue-500"
                  blur="blur-xl"
                  className="-top-10 -right-10"
                  opacity={0.6}
                />
                <NeonRing
                  size={150}
                  color="from-fuchsia-500 to-purple-500"
                  blur="blur-xl"
                  className="-bottom-10 -left-10"
                  opacity={0.5}
                  animationDelay={1.5}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

          {/* Cyberpunk background elements */}
          <NeonRing
            size={800}
            color="from-purple-600/20 to-cyan-500/20"
            blur="blur-[120px]"
            className="absolute top-1/4 left-1/4 z-0"
          />
          <NeonRing
            size={600}
            color="from-cyan-500/20 to-fuchsia-500/20"
            blur="blur-[100px]"
            className="absolute bottom-1/4 right-1/4 z-0"
            animationDelay={2}
          />

          {/* Crossed neon lines */}
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform rotate-[1deg]"></div>
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -rotate-[1deg]"></div>

          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Supercharge Your EV Experience
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                  BitRocket transforms your electric vehicle with cutting-edge blockchain technology
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative h-full flex flex-col items-center text-center p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 overflow-hidden">
                  {/* Neon corner highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

                  {/* Cyberpunk grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition duration-300 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">New Power Source</h3>
                  <p className="text-gray-300 relative z-10">
                    Turn your vehicle into a supercar by integrating a revolutionary power source
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative h-full flex flex-col items-center text-center p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 overflow-hidden">
                  {/* Neon corner highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

                  {/* Cyberpunk grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition duration-300 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Bell className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">Real-time Alerts</h3>
                  <p className="text-gray-300 relative z-10">
                    Receive notifications and alerts based on real-time blockchain data
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative h-full flex flex-col items-center text-center p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 overflow-hidden">
                  {/* Neon corner highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

                  {/* Cyberpunk grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition duration-300 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Fuel className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">Smart Contract Gas</h3>
                  <p className="text-gray-300 relative z-10">
                    Gas sourced from smart-contract migrations (Tradent) to offset charging costs
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition duration-700"></div>
                <div className="relative h-full flex flex-col items-center text-center p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 overflow-hidden">
                  {/* Neon corner highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

                  {/* Cyberpunk grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition duration-300 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Timer className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">Minimized Charge Time</h3>
                  <p className="text-gray-300 relative z-10">
                    Complete your trips in record time with reduced charging requirements
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          {/* Neon rings */}
          <NeonRing
            size={900}
            color="from-cyan-600/20 to-fuchsia-500/20"
            blur="blur-[150px]"
            className="absolute top-1/3 right-1/4 z-0"
          />
          <NeonRing
            size={700}
            color="from-purple-600/20 to-blue-500/20"
            blur="blur-[120px]"
            className="absolute bottom-1/3 left-1/4 z-0"
            animationDelay={1.5}
          />

          {/* Diagonal neon line */}
          <div className="absolute left-0 top-0 w-full h-full">
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent transform -rotate-45 translate-x-1/2"></div>
          </div>

          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-12 lg:grid-cols-2 items-center"
            >
              <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20">
                    How It Works
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Blockchain-Powered EV Charging
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                    BitRocket uses innovative technology to offset your EV charging costs with gas used in smart
                    contracts.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div variants={fadeInUp} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                      <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30">
                        <span className="text-lg font-bold text-cyan-300">1</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Connect Your Vehicle</h3>
                      <p className="text-gray-300">Install our BitRocket adapter to your EV's charging port</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                      <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30">
                        <span className="text-lg font-bold text-cyan-300">2</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Link Your Wallet</h3>
                      <p className="text-gray-300">
                        Connect your cryptocurrency wallet to start accumulating gas credits
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                      <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30">
                        <span className="text-lg font-bold text-cyan-300">3</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Start Saving</h3>
                      <p className="text-gray-300">
                        Gas from your smart contract transactions automatically offsets your charging costs
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={fadeInUp}>
                  <Button className="mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
                    Learn More About The Technology
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-20 animate-pulse"
                  style={{ animationDuration: "4s" }}
                ></div>
                <div className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                  {/* Cyberpunk grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(138,75,255,0.3),transparent_70%)]"></div>

                  {/* Neon circuit lines */}
                  <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
                  <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                  <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
                  <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>

                  <img
                    src="/blockchain-ev-charging.png"
                    alt="BitRocket Technology Diagram"
                    className="w-full h-full object-contain p-8"
                  />

                  {/* Neon scan line effect */}
                  <div
                    className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
                {/* Neon ring highlights */}
                <NeonRing
                  size={120}
                  color="from-cyan-500 to-fuchsia-500"
                  blur="blur-xl"
                  className="-top-10 -left-10"
                  opacity={0.6}
                />
                <NeonRing
                  size={140}
                  color="from-purple-500 to-blue-500"
                  blur="blur-xl"
                  className="-bottom-10 -right-10"
                  opacity={0.5}
                  animationDelay={1}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

          {/* Centered neon ring */}
          <NeonRing
            size={1200}
            color="from-purple-600/20 to-cyan-500/20"
            blur="blur-[200px]"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          />

          {/* Radial neon lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform rotate-[15deg]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform rotate-[45deg]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform rotate-[75deg]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-[-15deg]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-[-45deg]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-[-75deg]"></div>
          </div>

          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Ready to Transform Your EV Experience?
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed">
                  Join the future of electric vehicles with BitRocket's blockchain integration
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
                >
                  Contact Sales
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* And replace the footer JSX with: */}
      <SiteFooter />
    </div>
  )
}
