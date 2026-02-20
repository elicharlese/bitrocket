"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  ChevronRight,
  HelpCircle,
  MessageCircle,
  FileText,
  Settings,
  Zap,
  Phone,
  Mail,
  Video,
} from "lucide-react"

export default function HelpCenterPage() {
  const [activeCategory, setActiveCategory] = useState("faqs")

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
    { id: "faqs", name: "FAQs" },
    { id: "guides", name: "How-to Guides" },
    { id: "troubleshooting", name: "Troubleshooting" },
    { id: "contact", name: "Contact Support" },
  ]

  const faqs = [
    {
      question: "How do I install the BitRocket adapter?",
      answer:
        "The BitRocket adapter can be installed at any of our certified installation centers. The process takes about 30 minutes and doesn't void your vehicle's warranty.",
    },
    {
      question: "Which electric vehicles are compatible with BitRocket?",
      answer:
        "BitRocket is compatible with most major EV brands including Tesla, Nissan, Chevrolet, Ford, Audi, and BMW. Check our compatibility page for specific models.",
    },
    {
      question: "How much can I save on charging costs?",
      answer:
        "Most users save between 15-30% on their charging costs, depending on their blockchain activity and the plan they choose.",
    },
    {
      question: "How do I connect my cryptocurrency wallet?",
      answer:
        "Open the BitRocket mobile app, go to Settings > Wallet Integration, and follow the prompts to connect your preferred cryptocurrency wallet.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use enterprise-grade encryption and security protocols to protect all your data. We never share your personal information with third parties without your explicit consent.",
    },
    {
      question: "Can I transfer my BitRocket adapter to another vehicle?",
      answer:
        "Yes, you can transfer your BitRocket adapter to another compatible vehicle. You'll need to go through a simple unpairing and re-pairing process in the mobile app.",
    },
  ]

  const guides = [
    {
      title: "Setting Up Your BitRocket Account",
      description: "A step-by-step guide to creating and configuring your BitRocket account.",
      icon: <Settings className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Connecting Your Wallet",
      description: "How to link your cryptocurrency wallet to start accumulating gas credits.",
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Using the Mobile App",
      description: "Navigate the BitRocket mobile app and access all its features.",
      icon: <MessageCircle className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Monitoring Your Savings",
      description: "Track your charging cost savings and gas credit accumulation.",
      icon: <FileText className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Finding Compatible Charging Stations",
      description: "Locate and use BitRocket-enabled charging stations near you.",
      icon: <Settings className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Updating Your Adapter Firmware",
      description: "Keep your BitRocket adapter up-to-date with the latest features.",
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
    },
  ]

  const troubleshootingIssues = [
    {
      title: "Adapter Not Connecting",
      description: "Solutions when your BitRocket adapter isn't connecting to your vehicle or the app.",
      icon: <Settings className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "App Login Issues",
      description: "Resolve problems with logging into the BitRocket mobile application.",
      icon: <MessageCircle className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Wallet Connection Errors",
      description: "Fix issues with connecting your cryptocurrency wallet to BitRocket.",
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Credits Not Applying",
      description: "What to do when your gas credits aren't being applied to charging sessions.",
      icon: <FileText className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "Charging Station Compatibility",
      description: "Troubleshoot issues with BitRocket at different charging stations.",
      icon: <Settings className="h-5 w-5 text-cyan-400" />,
    },
    {
      title: "App Notification Problems",
      description: "Fix notification issues with the BitRocket mobile app.",
      icon: <MessageCircle className="h-5 w-5 text-cyan-400" />,
    },
  ]

  return (
    <PageLayout title="Help Center" subtitle="Find answers and support for your BitRocket questions">
      {/* Search */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
        <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for help..."
              className="pl-10 bg-black/40 border-purple-500/30 focus:border-cyan-500/50 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Category Tabs */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-xl blur opacity-20"></div>
        <div className="relative p-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-xl border border-purple-500/20 overflow-x-auto">
          <Tabs defaultValue="faqs" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
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

      {/* Content based on active category */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative">
        {/* FAQs */}
        {activeCategory === "faqs" && (
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30">
                      <HelpCircle className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* How-to Guides */}
        {activeCategory === "guides" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30">
                      {guide.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{guide.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                      <Button
                        variant="link"
                        className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                      >
                        View Guide <ChevronRight className="h-4 w-4 ml-1 inline" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Troubleshooting */}
        {activeCategory === "troubleshooting" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {troubleshootingIssues.map((issue, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30">
                      {issue.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{issue.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{issue.description}</p>
                      <Button
                        variant="link"
                        className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                      >
                        View Solutions <ChevronRight className="h-4 w-4 ml-1 inline" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Contact Support */}
        {activeCategory === "contact" && (
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full text-center">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Phone Support</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Speak directly with our support team for immediate assistance.
                    </p>
                    <p className="text-cyan-400 font-medium">1-800-BIT-RCKT</p>
                    <p className="text-gray-400 text-sm">Mon-Fri: 8am-8pm EST</p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full text-center">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Send us a detailed message and we'll respond within 24 hours.
                    </p>
                    <p className="text-cyan-400 font-medium">support@bitrocket.com</p>
                    <p className="text-gray-400 text-sm">24/7 Support</p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full text-center">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <Video className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Video Chat</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Schedule a video call with a technical specialist for complex issues.
                    </p>
                    <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40">
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Send Us a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-black/40 border-purple-500/30 focus:border-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-black/40 border-purple-500/30 focus:border-cyan-500/50"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's your issue about?"
                    className="bg-black/40 border-purple-500/30 focus:border-cyan-500/50"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your issue in detail"
                    className="w-full rounded-md bg-black/40 border border-purple-500/30 focus:border-cyan-500/50 p-2 text-white"
                  ></textarea>
                </div>
                <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40">
                  Submit Request
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Popular Articles */}
      {activeCategory !== "contact" && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-12 relative"
        >
          <NeonRing
            size={600}
            color="from-purple-600/20 to-cyan-500/20"
            blur="blur-[100px]"
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"
          />

          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6">
              Popular Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Getting Started with BitRocket",
                  views: "2.4k views",
                  icon: <FileText className="h-5 w-5 text-cyan-400" />,
                },
                {
                  title: "Troubleshooting Connection Issues",
                  views: "1.8k views",
                  icon: <Settings className="h-5 w-5 text-cyan-400" />,
                },
                {
                  title: "Understanding Gas Credits",
                  views: "1.5k views",
                  icon: <Zap className="h-5 w-5 text-cyan-400" />,
                },
              ].map((article, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30">
                        {article.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{article.title}</h3>
                        <p className="text-gray-400 text-sm">{article.views}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </PageLayout>
  )
}
