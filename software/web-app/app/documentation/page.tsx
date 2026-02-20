"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ChevronRight, FileText, Code, Settings, Zap, Download, ExternalLink } from "lucide-react"

export default function DocumentationPage() {
  const [activeCategory, setActiveCategory] = useState("getting-started")

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
    { id: "getting-started", name: "Getting Started" },
    { id: "installation", name: "Installation" },
    { id: "api", name: "API Reference" },
    { id: "sdk", name: "SDK" },
    { id: "troubleshooting", name: "Troubleshooting" },
  ]

  const docSections = {
    "getting-started": [
      {
        title: "Introduction to BitRocket",
        description: "Learn about BitRocket's technology and how it transforms electric vehicles.",
        icon: <Zap className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "System Requirements",
        description: "Check if your electric vehicle is compatible with BitRocket technology.",
        icon: <Settings className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Quick Start Guide",
        description: "Get up and running with BitRocket in less than 30 minutes.",
        icon: <FileText className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Core Concepts",
        description: "Understand the fundamental concepts behind BitRocket's blockchain-to-energy conversion.",
        icon: <Code className="h-5 w-5 text-cyan-400" />,
      },
    ],
    installation: [
      {
        title: "Hardware Installation",
        description: "Step-by-step guide to installing the BitRocket adapter in your electric vehicle.",
        icon: <Settings className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Mobile App Setup",
        description: "How to install and configure the BitRocket mobile application.",
        icon: <Download className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Wallet Integration",
        description: "Connect your cryptocurrency wallet to start accumulating gas credits.",
        icon: <Zap className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Firmware Updates",
        description: "Keep your BitRocket adapter up-to-date with the latest firmware.",
        icon: <Code className="h-5 w-5 text-cyan-400" />,
      },
    ],
    api: [
      {
        title: "Authentication",
        description: "Secure your API requests with proper authentication methods.",
        icon: <Code className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Endpoints",
        description: "Complete list of API endpoints with request and response examples.",
        icon: <FileText className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Rate Limits",
        description: "Understanding API rate limits and best practices for efficient usage.",
        icon: <Settings className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Webhooks",
        description: "Receive real-time updates about charging status and credit accumulation.",
        icon: <Zap className="h-5 w-5 text-cyan-400" />,
      },
    ],
    sdk: [
      {
        title: "JavaScript SDK",
        description: "Integrate BitRocket functionality into your web applications.",
        icon: <Code className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Mobile SDKs",
        description: "Native SDKs for iOS and Android application development.",
        icon: <Download className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Python SDK",
        description: "For data analysis and backend integration with BitRocket.",
        icon: <FileText className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "SDK Examples",
        description: "Sample code and projects demonstrating SDK capabilities.",
        icon: <Settings className="h-5 w-5 text-cyan-400" />,
      },
    ],
    troubleshooting: [
      {
        title: "Common Issues",
        description: "Solutions to frequently encountered problems with BitRocket.",
        icon: <Settings className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Error Codes",
        description: "Complete reference of error codes and their meanings.",
        icon: <FileText className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Diagnostics",
        description: "How to run diagnostics on your BitRocket adapter and app.",
        icon: <Code className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: "Contact Support",
        description: "When to reach out to our support team and what information to provide.",
        icon: <Zap className="h-5 w-5 text-cyan-400" />,
      },
    ],
  }

  const currentDocs = docSections[activeCategory as keyof typeof docSections] || []

  return (
    <PageLayout title="Documentation" subtitle="Comprehensive guides and references for BitRocket technology">
      {/* Search */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
        <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search documentation..."
              className="pl-10 bg-black/40 border-purple-500/30 focus:border-cyan-500/50 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-1">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-xl blur opacity-20"></div>
            <div className="relative p-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-xl border border-purple-500/20">
              <Tabs
                defaultValue="getting-started"
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full"
                orientation="vertical"
              >
                <TabsList className="bg-transparent flex flex-col w-full h-auto">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="justify-start py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-cyan-500/20 data-[state=active]:text-white data-[state=active]:shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Download Section */}
          <motion.div variants={fadeInUp} className="mt-8 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
              <h3 className="text-lg font-bold text-white mb-2">Download Resources</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest versions of our software, SDKs, and technical papers.
              </p>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-between border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  Mobile App
                  <Download className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-between border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  Developer SDK
                  <Download className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-between border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  Technical Whitepaper
                  <Download className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-3 space-y-8">
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-2">
                {categories.find((cat) => cat.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-300">
                {activeCategory === "getting-started" &&
                  "Everything you need to know to get started with BitRocket technology."}
                {activeCategory === "installation" &&
                  "Step-by-step guides for installing and setting up BitRocket hardware and software."}
                {activeCategory === "api" && "Complete API reference for integrating with BitRocket services."}
                {activeCategory === "sdk" && "Development kits and libraries for building applications with BitRocket."}
                {activeCategory === "troubleshooting" && "Solutions to common issues and how to diagnose problems."}
              </p>
            </div>
          </motion.div>

          {/* Documentation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentDocs.map((doc, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30">
                      {doc.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{doc.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{doc.description}</p>
                      <Button
                        variant="link"
                        className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                      >
                        Read Documentation <ChevronRight className="h-4 w-4 ml-1 inline" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Example Code Section */}
          {activeCategory === "api" || activeCategory === "sdk" ? (
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <h3 className="text-lg font-bold text-white mb-4">Example Code</h3>
                <div className="bg-black/60 rounded-lg p-4 border border-purple-500/30">
                  <pre className="text-cyan-300 text-sm overflow-x-auto">
                    <code>
                      {`// Initialize the BitRocket SDK
const bitrocket = new BitRocket({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Get user's gas credits
async function getUserCredits() {
  try {
    const credits = await bitrocket.user.getCredits();
    console.log(\`Available credits: \${credits.available}\`);
    console.log(\`Pending credits: \${credits.pending}\`);
    return credits;
  } catch (error) {
    console.error('Error fetching credits:', error);
  }
}

// Apply credits to charging session
async function applyCreditsToCharging(sessionId, amount) {
  try {
    const result = await bitrocket.charging.applyCredits({
      sessionId,
      amount
    });
    console.log(\`Applied \${amount} credits to session \${sessionId}\`);
    return result;
  } catch (error) {
    console.error('Error applying credits:', error);
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ) : null}

          {/* Related Documentation */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Technical Specifications
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub Repository
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Release Notes
                </Button>
                <Button
                  variant="outline"
                  className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Developer Forum
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
