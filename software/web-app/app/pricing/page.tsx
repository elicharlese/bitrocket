"use client"

import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
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

  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for personal EV owners looking to start saving on charging costs",
      features: [
        "BitRocket Basic Adapter",
        "Up to 15% charging cost reduction",
        "Basic mobile app access",
        "Support for 2 blockchain networks",
        "Standard customer support",
      ],
      highlight: false,
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$199",
      description: "Enhanced features for EV enthusiasts who want maximum savings and performance",
      features: [
        "BitRocket Pro Adapter",
        "Up to 30% charging cost reduction",
        "Full mobile app access with analytics",
        "Support for 5 blockchain networks",
        "Priority customer support",
        "Performance boost mode",
        "Over-the-air updates",
      ],
      highlight: true,
      buttonText: "Get Pro",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for businesses with EV fleets and advanced requirements",
      features: [
        "BitRocket Enterprise Adapters",
        "Custom charging cost reduction plans",
        "Fleet management dashboard",
        "Support for all blockchain networks",
        "Dedicated account manager",
        "API access for custom integrations",
        "White-label options available",
      ],
      highlight: false,
      buttonText: "Contact Sales",
    },
  ]

  return (
    <PageLayout title="Pricing Plans" subtitle="Choose the right BitRocket plan for your electric vehicle needs">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`relative ${plan.highlight ? "md:-mt-8 md:mb-8" : ""}`}
          >
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${
                plan.highlight ? "from-cyan-500 to-purple-500" : "from-purple-500/80 to-blue-500/80"
              } rounded-[2rem] blur opacity-${plan.highlight ? "50" : "30"}`}
            ></div>
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${
                plan.highlight ? "from-cyan-500/50 to-purple-500/50" : "from-purple-500/30 to-blue-500/30"
              } rounded-[2rem] blur-lg opacity-${plan.highlight ? "30" : "20"} animate-pulse`}
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className={`relative h-full flex flex-col p-8 rounded-[2rem] backdrop-blur-md ${
                plan.highlight
                  ? "bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-cyan-500/30"
                  : "bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20"
              } border overflow-hidden`}
            >
              {/* Cyberpunk grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:15px_15px]"></div>

              {/* Neon corner highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

              {plan.highlight && (
                <div className="absolute -top-5 -right-5 w-28 h-28 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
              )}

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="ml-2 text-gray-400">/month</span>}
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-1">
                        <Check className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    className={`w-full rounded-full ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                        : "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    } border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 relative">
        <NeonRing
          size={600}
          color="from-purple-500/20 to-cyan-500/20"
          blur="blur-[100px]"
          className="absolute -top-20 left-1/2 -translate-x-1/2 z-0"
        />

        <div className="relative z-10 max-w-4xl mx-auto p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
                Need a custom solution?
              </h2>
              <p className="text-gray-300">
                Contact our sales team to discuss custom pricing options for large fleets or special requirements. We'll
                create a tailored solution that meets your specific needs.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-70"></div>
                <button className="relative px-8 py-3 bg-black rounded-full text-white border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
