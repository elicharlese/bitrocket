"use client"

import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Zap, Globe } from "lucide-react"

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "/team-member-1.png",
      bio: "Former Tesla engineer with 15+ years in EV technology and blockchain innovation.",
    },
    {
      name: "Sophia Rodriguez",
      role: "CTO",
      image: "/team-member-2.png",
      bio: "Blockchain pioneer who led development at Ethereum Foundation before joining BitRocket.",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Product",
      image: "/team-member-3.png",
      bio: "Product visionary with experience at leading tech companies and EV manufacturers.",
    },
    {
      name: "Aisha Patel",
      role: "Chief Innovation Officer",
      image: "/team-member-4.png",
      bio: "Award-winning engineer specializing in energy systems and sustainable technology.",
    },
  ]

  return (
    <PageLayout title="About BitRocket" subtitle="Our mission, vision, and the team behind the technology">
      {/* Mission and Vision */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
      >
        <motion.div variants={fadeInUp} className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
          <div
            className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-20 animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-blue-900/30">
            {/* Cyberpunk grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(138,75,255,0.3),transparent_70%)]"></div>
            <img src="/bitrocket-team.png" alt="BitRocket Team" className="w-full h-full object-cover" />
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

        <motion.div variants={fadeInUp} className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20">
              Our Story
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Revolutionizing the Future of Electric Vehicles
            </h2>
            <p className="text-gray-300">
              Founded in 2022, BitRocket emerged from a simple yet revolutionary idea: what if the computational energy
              used in blockchain transactions could be repurposed to power electric vehicles?
            </p>
            <p className="text-gray-300">
              Our team of engineers, blockchain specialists, and EV enthusiasts came together to create a technology
              that bridges the digital and physical worlds, transforming how we think about energy consumption and
              vehicle performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
              <div className="mb-4 p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 w-fit">
                <Target className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-300 text-sm">
                To create sustainable, efficient energy solutions that connect blockchain technology with real-world
                applications.
              </p>
            </div>

            <div className="relative p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
              <div className="mb-4 p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 w-fit">
                <Globe className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Our Vision</h3>
              <p className="text-gray-300 text-sm">
                A world where digital energy seamlessly powers physical transportation, creating a more connected and
                efficient ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Values */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20 mb-4">
            Our Values
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            What Drives Us Forward
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Zap className="h-6 w-6 text-cyan-400" />,
              title: "Innovation",
              description:
                "We constantly push the boundaries of what's possible in energy technology and blockchain integration.",
            },
            {
              icon: <Users className="h-6 w-6 text-cyan-400" />,
              title: "Collaboration",
              description: "We believe in the power of diverse perspectives and cross-disciplinary teamwork.",
            },
            {
              icon: <Globe className="h-6 w-6 text-cyan-400" />,
              title: "Sustainability",
              description: "We're committed to creating technology that contributes to a more sustainable future.",
            },
            {
              icon: <Target className="h-6 w-6 text-cyan-400" />,
              title: "Impact",
              description: "We measure our success by the positive change our technology brings to the world.",
            },
          ].map((value, index) => (
            <motion.div key={index} variants={fadeInUp} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative h-full flex flex-col items-center text-center p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300">
                <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-24"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20 mb-4">
            Our Team
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Meet the Innovators
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative flex flex-col rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 overflow-hidden">
                <div className="h-48 relative">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  <img
                    src={member.image || `/placeholder.svg?height=200&width=300&query=person`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Neon scan line effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative"
      >
        <NeonRing
          size={600}
          color="from-purple-600/20 to-cyan-500/20"
          blur="blur-[100px]"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6">
            Join Us in Shaping the Future
          </h2>
          <p className="text-gray-300 mb-8">
            Whether you're interested in our technology, want to join our team, or are looking to partner with us, we'd
            love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
            >
              View Careers
            </Button>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  )
}
