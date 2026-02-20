"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, MapPin, Briefcase, Clock, Zap, Users, Code, ChevronRight } from "lucide-react"

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("all")

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

  const categories = [
    { id: "all", name: "All Positions" },
    { id: "engineering", name: "Engineering" },
    { id: "product", name: "Product" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business" },
  ]

  const jobs = [
    {
      title: "Senior Blockchain Engineer",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "engineering",
      description:
        "Join our core engineering team to develop and optimize our blockchain-to-energy conversion technology.",
      requirements: [
        "5+ years of experience in blockchain development",
        "Strong knowledge of smart contracts and Ethereum",
        "Experience with energy systems is a plus",
      ],
    },
    {
      title: "EV Integration Specialist",
      location: "Remote",
      type: "Full-time",
      category: "engineering",
      description: "Lead the integration of our technology with various electric vehicle models and charging systems.",
      requirements: [
        "3+ years of experience in EV technology",
        "Knowledge of vehicle electrical systems",
        "Experience with hardware-software integration",
      ],
    },
    {
      title: "Product Manager",
      location: "Austin, TX",
      type: "Full-time",
      category: "product",
      description: "Drive the product roadmap for our consumer-facing applications and services.",
      requirements: [
        "4+ years of product management experience",
        "Experience with mobile applications and IoT products",
        "Strong understanding of user-centered design principles",
      ],
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      category: "design",
      description: "Create intuitive and visually stunning interfaces for our mobile app and dashboard.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Experience designing for mobile and web platforms",
      ],
    },
    {
      title: "Business Development Manager",
      location: "New York, NY",
      type: "Full-time",
      category: "business",
      description: "Forge partnerships with EV manufacturers, charging networks, and blockchain companies.",
      requirements: [
        "5+ years of business development experience",
        "Strong network in the EV or blockchain industry",
        "Proven track record of closing strategic partnerships",
      ],
    },
    {
      title: "Marketing Specialist",
      location: "Remote",
      type: "Full-time",
      category: "business",
      description: "Develop and execute marketing strategies to grow our user base and brand awareness.",
      requirements: [
        "3+ years of marketing experience",
        "Experience in tech or automotive industry",
        "Strong content creation and social media skills",
      ],
    },
    {
      title: "Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "engineering",
      description: "Build responsive and interactive web applications for our user dashboard and admin portal.",
      requirements: [
        "3+ years of frontend development experience",
        "Proficiency in React, TypeScript, and modern CSS",
        "Experience with data visualization libraries",
      ],
    },
    {
      title: "Hardware Engineer",
      location: "Austin, TX",
      type: "Full-time",
      category: "engineering",
      description: "Design and improve our BitRocket adapter hardware for optimal performance and compatibility.",
      requirements: [
        "4+ years of hardware engineering experience",
        "Experience with electrical systems and IoT devices",
        "Knowledge of manufacturing processes",
      ],
    },
  ]

  const filteredJobs = activeCategory === "all" ? jobs : jobs.filter((job) => job.category === activeCategory)

  return (
    <PageLayout title="Join Our Team" subtitle="Build the future of electric vehicles with BitRocket">
      {/* Values Section */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mb-20">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Why Work With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="h-6 w-6 text-cyan-400" />,
              title: "Cutting-Edge Technology",
              description: "Work on revolutionary technology that bridges blockchain and electric vehicles.",
            },
            {
              icon: <Users className="h-6 w-6 text-cyan-400" />,
              title: "Collaborative Culture",
              description: "Join a diverse team of experts passionate about innovation and sustainability.",
            },
            {
              icon: <Code className="h-6 w-6 text-cyan-400" />,
              title: "Growth Opportunities",
              description: "Develop your skills and career in a rapidly expanding industry and company.",
            },
          ].map((value, index) => (
            <motion.div key={index} variants={fadeInUp} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative h-full flex flex-col items-center text-center p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300">
                <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Open Positions */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Open Positions
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={fadeInUp} className="mb-8 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-xl blur opacity-20"></div>
          <div className="relative p-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-xl border border-purple-500/20 overflow-x-auto">
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="bg-transparent flex w-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-white data-[state=active]:shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div variants={fadeInUp} className="mb-8 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
          <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4">
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search positions..."
                className="pl-10 bg-black/40 border-purple-500/30 focus:border-cyan-500/50 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 text-gray-400">No positions found in this category</div>
          ) : (
            filteredJobs.map((job, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <div className="flex items-center text-gray-300 text-sm">
                          <MapPin className="h-4 w-4 mr-1 text-cyan-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Clock className="h-4 w-4 mr-1 text-cyan-400" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40">
                      Apply Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-gray-300 mt-4">{job.description}</p>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <div className="mr-2 mt-1 h-1 w-1 rounded-full bg-cyan-400"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Benefits & Perks
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Competitive Salary",
              description: "We offer top-tier compensation packages to attract and retain the best talent.",
            },
            {
              title: "Remote Work Options",
              description: "Flexible work arrangements including remote and hybrid options.",
            },
            {
              title: "Health & Wellness",
              description: "Comprehensive health insurance, wellness programs, and mental health support.",
            },
            {
              title: "Professional Growth",
              description: "Learning stipends, conference attendance, and career development opportunities.",
            },
            {
              title: "Equity Packages",
              description: "Share in our success with employee stock options and equity grants.",
            },
            {
              title: "Paid Time Off",
              description: "Generous vacation policy, paid holidays, and parental leave.",
            },
            {
              title: "Team Events",
              description: "Regular team-building activities, retreats, and social events.",
            },
            {
              title: "Modern Equipment",
              description: "Top-of-the-line hardware and software to help you do your best work.",
            },
          ].map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative h-full flex flex-col p-6 rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
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
            Don't See the Right Position?
          </h2>
          <p className="text-gray-300 mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you
            can contribute to BitRocket's mission.
          </p>
          <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
            Submit Your Resume
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </PageLayout>
  )
}
