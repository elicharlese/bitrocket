"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const faqs = [
    {
      question: "How does BitRocket actually work?",
      answer:
        "BitRocket works by capturing the computational energy (gas) used in your blockchain transactions and converting it into energy credits. These credits are then used to offset the cost of charging your electric vehicle. Our proprietary adapter connects to your EV's charging port and communicates with our blockchain network to apply these credits automatically.",
    },
    {
      question: "Is BitRocket compatible with all electric vehicles?",
      answer:
        "BitRocket is compatible with most major EV brands including Tesla, Nissan, Chevrolet, Ford, Audi, and BMW. We're continuously expanding our compatibility list. You can check if your specific model is supported on our compatibility page or by contacting our support team.",
    },
    {
      question: "How much can I save on charging costs?",
      answer:
        "Savings vary based on your blockchain activity and the plan you choose. On average, our users save between 15-30% on their charging costs. Power users who are very active with smart contracts can save even more, sometimes offsetting their charging costs entirely.",
    },
    {
      question: "Which blockchain networks are supported?",
      answer:
        "BitRocket currently supports Ethereum, Polygon, Solana, Avalanche, and Binance Smart Chain. We're constantly working to add support for additional networks based on user demand and technological compatibility.",
    },
    {
      question: "Is the installation process complicated?",
      answer:
        "Not at all. Installation takes less than 30 minutes at any of our certified installation centers. The process is non-invasive and doesn't void your vehicle's warranty. We also offer professional installation services if you prefer to have a technician come to your location.",
    },
    {
      question: "Can I transfer my BitRocket adapter to another vehicle?",
      answer:
        "Yes, you can transfer your BitRocket adapter to another compatible vehicle. You'll need to go through a simple unpairing and re-pairing process in the mobile app. There may be a small transfer fee depending on your subscription plan.",
    },
    {
      question: "What happens if I don't use blockchain technology often?",
      answer:
        "Even with minimal blockchain usage, you'll still benefit from BitRocket's optimization technology that improves charging efficiency. Additionally, our basic plan includes a starter credit that ensures you'll see some savings regardless of your blockchain activity level.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and security protocols to protect all your data. We never share your personal information with third parties without your explicit consent. Our blockchain integration is designed with privacy as a core principle.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about BitRocket technology"
    >
      <div className="relative">
        <NeonRing
          size={700}
          color="from-purple-600/20 to-cyan-500/20"
          blur="blur-[120px]"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto relative z-10"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="mb-6">
              <div className="relative">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-${
                    openIndex === index ? "40" : "20"
                  } transition-opacity duration-300`}
                ></div>
                <div
                  className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: openIndex === index ? "rgba(6, 182, 212, 0.3)" : "rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <button
                    className="flex items-center justify-between w-full p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-cyan-400 transition-transform duration-300 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-300">{faq.answer}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 relative">
        <NeonRing
          size={400}
          color="from-cyan-500/20 to-purple-500/20"
          blur="blur-[80px]"
          className="absolute -top-20 left-1/2 -translate-x-1/2 z-0"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-300 mb-6">
            Our support team is ready to help you with any questions you might have about BitRocket technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur opacity-70"></div>
              <button className="relative px-8 py-3 bg-black rounded-full text-white border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300">
                Contact Support
              </button>
            </div>
            <button className="px-8 py-3 rounded-full border border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
