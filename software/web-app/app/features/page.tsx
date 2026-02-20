"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Shield,
  Cpu,
  Gauge,
  CloudLightningIcon as Lightning,
  Wallet,
  BarChart3,
  RefreshCw,
  ChevronRight,
  Check,
  ArrowRight,
} from "lucide-react"

export default function FeaturesPage() {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-cyan-400" />,
      title: "New Power Source",
      description:
        "BitRocket's revolutionary power source integrates with your EV's existing battery system to provide enhanced performance and extended range through blockchain-powered optimization.",
      category: "power",
      highlight: true,
    },
    {
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
      title: "Enhanced Security",
      description:
        "Our blockchain technology ensures that all transactions and energy transfers are secure, transparent, and immutable, protecting your vehicle and your data.",
      category: "security",
    },
    {
      icon: <Cpu className="h-6 w-6 text-cyan-400" />,
      title: "Smart Contract Integration",
      description:
        "BitRocket leverages smart contracts to automatically optimize your vehicle's energy usage and charging schedule based on real-time blockchain data.",
      category: "blockchain",
      highlight: true,
    },
    {
      icon: <Gauge className="h-6 w-6 text-cyan-400" />,
      title: "Performance Boost",
      description:
        "Experience up to 15% increase in vehicle performance through our proprietary blockchain-to-energy conversion technology that optimizes power delivery.",
      category: "power",
    },
    {
      icon: <Lightning className="h-6 w-6 text-cyan-400" />,
      title: "Reduced Charging Time",
      description:
        "BitRocket's technology significantly reduces charging time by utilizing gas from smart contracts to supplement traditional charging methods.",
      category: "power",
      highlight: true,
    },
    {
      icon: <Wallet className="h-6 w-6 text-cyan-400" />,
      title: "Cost Savings",
      description:
        "Save up to 30% on your charging costs by offsetting them with gas used in smart contracts, turning your blockchain activity into real-world value.",
      category: "savings",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-cyan-400" />,
      title: "Real-time Analytics",
      description:
        "Access comprehensive analytics about your vehicle's performance, energy usage, and cost savings through our intuitive dashboard.",
      category: "analytics",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-cyan-400" />,
      title: "Sustainable Technology",
      description:
        "BitRocket repurposes computational energy that would otherwise be wasted, making your EV even more environmentally friendly.",
      category: "sustainability",
    },
  ]

  const categories = [
    { id: "all", name: "All Features" },
    { id: "power", name: "Power & Performance" },
    { id: "blockchain", name: "Blockchain" },
    { id: "savings", name: "Cost Savings" },
    { id: "security", name: "Security" },
    { id: "analytics", name: "Analytics" },
    { id: "sustainability", name: "Sustainability" },
  ]

  const filteredFeatures =
    activeCategory === "all" ? features : features.filter((feature) => feature.category === activeCategory)

  const testimonials = [
    {
      quote:
        "BitRocket has completely transformed my EV experience. I'm saving over 25% on charging costs while getting better performance.",
      author: "Sarah J.",
      role: "Tesla Model 3 Owner",
      image: "/diverse-group-city.png",
    },
    {
      quote:
        "As someone deeply involved in blockchain, BitRocket is the perfect bridge between my digital investments and real-world benefits.",
      author: "Michael T.",
      role: "Crypto Enthusiast & Audi e-tron Owner",
      image: "/diverse-group-city.png",
    },
    {
      quote:
        "The analytics dashboard gives me insights into my vehicle I never had before. It's like having a supercomputer managing my EV.",
      author: "Leila K.",
      role: "Ford Mustang Mach-E Owner",
      image: "/diverse-group-city.png",
    },
  ]

  const comparisonPoints = [
    "Up to 30% reduction in charging costs",
    "Enhanced vehicle performance",
    "Reduced environmental impact",
    "Blockchain-secured transactions",
    "Real-time analytics dashboard",
    "Smart contract integration",
    "Automatic energy optimization",
    "Seamless charging station network",
  ]

  return (
    <PageLayout
      title="BitRocket Features"
      subtitle="Discover how our blockchain technology transforms your electric vehicle experience"
    >
      {/* Category Tabs */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12 relative">
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

      {/* Features Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredFeatures.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`group relative ${feature.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-${feature.highlight ? "40" : "30"} group-hover:opacity-100 transition duration-1000`}
            ></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-30 transition duration-700"></div>
            <div className="relative h-full flex flex-col items-center text-center p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 overflow-hidden">
              {/* Neon corner highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

              {/* Cyberpunk grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

              <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition duration-300 relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{feature.title}</h3>
              <p className="text-gray-300 relative z-10">{feature.description}</p>

              <div className="mt-6 relative z-10">
                <Button
                  variant="link"
                  className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1 inline" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Technology Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mt-24 relative"
      >
        <NeonRing
          size={800}
          color="from-purple-600/20 to-cyan-500/20"
          blur="blur-[120px]"
          className="absolute -top-40 left-1/2 -translate-x-1/2 z-0"
        />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
              Revolutionary Technology
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              BitRocket's proprietary blockchain-to-energy conversion system is changing how electric vehicles interact
              with the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
              <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-[2rem] blur-lg opacity-20 animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                {/* Cyberpunk grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(138,75,255,0.3),transparent_70%)]"></div>
                <img
                  src="/blockchain-ev-concept.png"
                  alt="BitRocket Technology"
                  className="w-full h-full object-cover"
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
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                How BitRocket's Technology Works
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 relative mt-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30">
                      <span className="text-sm font-bold text-cyan-300">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Blockchain Integration</h4>
                    <p className="text-gray-300 mt-1">
                      BitRocket connects to your cryptocurrency wallet and monitors your smart contract transactions,
                      capturing the computational energy (gas) used.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 relative mt-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30">
                      <span className="text-sm font-bold text-cyan-300">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Energy Conversion</h4>
                    <p className="text-gray-300 mt-1">
                      Our proprietary algorithm converts this computational energy into usable power credits that are
                      stored in your BitRocket account.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 relative mt-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30">
                      <span className="text-sm font-bold text-cyan-300">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Charging Optimization</h4>
                    <p className="text-gray-300 mt-1">
                      When you charge your vehicle, BitRocket automatically applies these credits to reduce your
                      charging costs and optimize power delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 relative mt-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-cyan-500/30">
                      <span className="text-sm font-bold text-cyan-300">4</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Performance Enhancement</h4>
                    <p className="text-gray-300 mt-1">
                      The BitRocket adapter continuously monitors and adjusts your vehicle's power systems, enhancing
                      performance and extending range.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
                Explore the Technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mt-24 relative"
      >
        <NeonRing
          size={600}
          color="from-cyan-500/20 to-purple-500/20"
          blur="blur-[100px]"
          className="absolute top-1/2 -translate-y-1/2 left-1/4 z-0"
        />
        <NeonRing
          size={500}
          color="from-purple-500/20 to-cyan-500/20"
          blur="blur-[90px]"
          className="absolute top-1/2 -translate-y-1/2 right-1/4 z-0"
          animationDelay={1}
        />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
              What Our Users Say
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Join thousands of EV owners who have transformed their driving experience with BitRocket
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={scaleIn} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-[2rem] blur opacity-30"></div>
                <div className="relative h-full flex flex-col p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
                  {/* Quote mark */}
                  <div className="absolute top-6 right-6 text-6xl font-serif text-cyan-500/20">"</div>

                  <p className="text-gray-300 mb-6 relative z-10">"{testimonial.quote}"</p>

                  <div className="mt-auto flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-50"></div>
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="relative w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{testimonial.author}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Comparison Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mt-24 relative"
      >
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
              BitRocket vs. Standard EVs
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              See how BitRocket-enabled vehicles outperform standard electric vehicles
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">With BitRocket, You Get:</h3>
                  <ul className="space-y-4">
                    {comparisonPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 p-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
                          <Check className="h-5 w-5 text-cyan-400" />
                        </div>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
                  <div className="relative h-full rounded-[2rem] overflow-hidden border border-purple-500/30 backdrop-blur-md bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                    <img
                      src="/ev-charging-digital.png"
                      alt="BitRocket Enhanced EV"
                      className="w-full h-full object-cover"
                    />
                    {/* Neon scan line effect */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mt-24 relative"
      >
        <NeonRing
          size={800}
          color="from-purple-600/20 to-cyan-500/20"
          blur="blur-[150px]"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6">
            Ready to Transform Your EV Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of EV owners who are saving on charging costs while enhancing their vehicle's performance
            with BitRocket.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-purple-500/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-purple-500/50"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  )
}
