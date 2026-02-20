"use client"

import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
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

  const steps = [
    {
      number: "01",
      title: "Install BitRocket Adapter",
      description:
        "Our compact adapter connects directly to your EV's charging port and onboard computer system. The installation is quick and non-invasive, taking less than 30 minutes at any of our certified installation centers.",
      image: "/sleek-ev-adapter.png",
    },
    {
      number: "02",
      title: "Connect Your Wallet",
      description:
        "Link your cryptocurrency wallet to the BitRocket mobile app. This allows our system to track your smart contract transactions and convert the gas used into energy credits for your vehicle.",
      image: "/nexus-connect.png",
    },
    {
      number: "03",
      title: "Generate Gas Credits",
      description:
        "Every time you interact with smart contracts on supported blockchains, BitRocket captures the computational energy (gas) used and converts it into energy credits that can be used to power your EV.",
      image: "/blockchain-energy-flow.png",
    },
    {
      number: "04",
      title: "Offset Charging Costs",
      description:
        "When you charge your vehicle, BitRocket automatically applies your accumulated energy credits to reduce or even eliminate your charging costs. The more you use blockchain technology, the more you save.",
      image: "/digital-charge.png",
    },
  ]

  return (
    <PageLayout
      title="How BitRocket Works"
      subtitle="A step-by-step guide to transforming your EV with blockchain technology"
    >
      <div className="space-y-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={`grid gap-12 ${
              index % 2 === 0 ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
            } items-center`}
          >
            {index % 2 === 0 ? (
              <>
                <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20">
                      Step {step.number}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                      {step.title}
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">{step.description}</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-20 animate-pulse"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <div className="relative h-[300px] lg:h-[400px] rounded-[2rem] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                    {/* Cyberpunk grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(138,75,255,0.3),transparent_70%)]"></div>
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover p-0"
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
              </>
            ) : (
              <>
                <motion.div variants={fadeInUp} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
                  <div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-20 animate-pulse"
                    style={{ animationDuration: "4s" }}
                  ></div>
                  <div className="relative h-[300px] lg:h-[400px] rounded-[2rem] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                    {/* Cyberpunk grid overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(138,75,255,0.3),transparent_70%)]"></div>
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover p-0"
                    />
                    {/* Neon scan line effect */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
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
                <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20">
                      Step {step.number}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                      {step.title}
                    </h2>
                    <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-20 relative">
        <NeonRing
          size={400}
          color="from-cyan-500/20 to-purple-500/20"
          blur="blur-[80px]"
          className="absolute -top-20 left-1/2 -translate-x-1/2 z-0"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6">
            Ready to transform your EV experience?
          </h2>
          <Button className="mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
            Get Started with BitRocket
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
