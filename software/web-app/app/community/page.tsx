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
  MessageCircle,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowRight,
  Star,
  ThumbsUp,
  MessageSquare,
  Code,
  Settings,
  FileText,
} from "lucide-react"

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState("forum")

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
    { id: "forum", name: "Discussion Forum" },
    { id: "events", name: "Events" },
    { id: "showcase", name: "User Showcase" },
    { id: "contribute", name: "Contribute" },
  ]

  const forumTopics = [
    {
      title: "How to maximize gas credits with DeFi transactions",
      author: "cryptoEVfan",
      replies: 24,
      views: 342,
      lastActive: "2 hours ago",
      tags: ["Tips & Tricks", "DeFi"],
    },
    {
      title: "BitRocket adapter installation on 2023 Tesla Model Y",
      author: "teslaPilot",
      replies: 18,
      views: 276,
      lastActive: "5 hours ago",
      tags: ["Installation", "Tesla"],
    },
    {
      title: "Comparing charging speeds with and without BitRocket",
      author: "speedster",
      replies: 32,
      views: 511,
      lastActive: "1 day ago",
      tags: ["Performance", "Comparison"],
    },
    {
      title: "Mobile app feature requests and ideas",
      author: "appDeveloper",
      replies: 47,
      views: 623,
      lastActive: "2 days ago",
      tags: ["App", "Feature Request"],
    },
    {
      title: "BitRocket compatibility with new Rivian models",
      author: "EVenthusiast",
      replies: 15,
      views: 289,
      lastActive: "3 days ago",
      tags: ["Compatibility", "Rivian"],
    },
    {
      title: "Blockchain integration: Solana vs Ethereum for BitRocket",
      author: "blockchainExpert",
      replies: 29,
      views: 437,
      lastActive: "4 days ago",
      tags: ["Blockchain", "Technical"],
    },
  ]

  const events = [
    {
      title: "BitRocket Developer Conference",
      date: "November 15-17, 2023",
      location: "San Francisco, CA",
      description:
        "Join us for three days of workshops, presentations, and networking focused on BitRocket technology and the future of blockchain-powered EVs.",
      image: "/event-conference.png",
    },
    {
      title: "Virtual Hackathon: EV Innovation",
      date: "December 5-7, 2023",
      location: "Online",
      description:
        "Participate in our virtual hackathon to build innovative applications and solutions using the BitRocket API and SDK.",
      image: "/event-hackathon.png",
    },
    {
      title: "BitRocket User Meetup",
      date: "January 20, 2024",
      location: "Austin, TX",
      description:
        "Connect with other BitRocket users, share experiences, and get tips on maximizing your EV charging savings.",
      image: "/event-meetup.png",
    },
  ]

  const showcaseProjects = [
    {
      title: "Custom Dashboard for BitRocket Analytics",
      author: "dataViz",
      description:
        "I built a custom dashboard to visualize my charging savings and blockchain activity using the BitRocket API.",
      likes: 156,
      comments: 32,
      image: "/showcase-dashboard.png",
    },
    {
      title: "BitRocket Integration with Home Energy System",
      author: "smartHomeBuilder",
      description:
        "Check out how I integrated BitRocket with my home solar and battery system for optimal energy management.",
      likes: 203,
      comments: 47,
      image: "/showcase-home-energy.png",
    },
    {
      title: "3D Printed Custom BitRocket Adapter Housing",
      author: "makerEV",
      description:
        "I designed and 3D printed a custom housing for my BitRocket adapter with improved cooling and aesthetics.",
      likes: 118,
      comments: 29,
      image: "/showcase-3d-print.png",
    },
  ]

  return (
    <PageLayout title="Community" subtitle="Connect, learn, and share with fellow BitRocket enthusiasts">
      {/* Category Tabs */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-xl blur opacity-20"></div>
        <div className="relative p-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-xl border border-purple-500/20 overflow-x-auto">
          <Tabs defaultValue="forum" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
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
        {/* Forum */}
        {activeCategory === "forum" && (
          <div className="space-y-8">
            {/* Search and New Topic */}
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search forum topics..."
                      className="pl-10 bg-black/40 border-purple-500/30 focus:border-cyan-500/50 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl blur opacity-70"></div>
                <Button className="relative px-8 py-6 bg-black rounded-xl text-white border border-purple-500/30 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start New Topic
                </Button>
              </div>
            </motion.div>

            {/* Forum Topics */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Popular Discussions</h2>
                <div className="space-y-4">
                  {forumTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="group relative border-b border-purple-500/20 last:border-0 pb-4 last:pb-0"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">
                            {topic.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-sm text-gray-400">Posted by {topic.author}</span>
                            <span className="text-sm text-gray-400">• {topic.lastActive}</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {topic.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-purple-500/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-lg font-medium text-white">{topic.replies}</div>
                            <div className="text-xs text-gray-400">Replies</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-medium text-white">{topic.views}</div>
                            <div className="text-xs text-gray-400">Views</div>
                          </div>
                          <Button
                            variant="link"
                            className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline hidden md:flex"
                          >
                            View Topic <ChevronRight className="h-4 w-4 ml-1 inline" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40">
                    View All Topics
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full text-center">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <Users className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">15,482</h3>
                    <p className="text-gray-300">Community Members</p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full text-center">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <MessageSquare className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">8,745</h3>
                    <p className="text-gray-300">Discussion Topics</p>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full text-center">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <Star className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">42,196</h3>
                    <p className="text-gray-300">Helpful Responses</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Events */}
        {activeCategory === "events" && (
          <div className="space-y-8">
            {/* Upcoming Events */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Upcoming Events</h2>
                <div className="space-y-6">
                  {events.map((event, index) => (
                    <div key={index} className="group relative">
                      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
                        <div className="relative h-[150px] rounded-xl overflow-hidden">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                          <img
                            src={event.image || `/placeholder.svg?height=150&width=250&query=tech event ${index}`}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Neon scan line effect */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center text-gray-300 text-sm">
                              <Calendar className="h-4 w-4 mr-1 text-cyan-400" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-gray-300 text-sm">
                              <MapPin className="h-4 w-4 mr-1 text-cyan-400" />
                              {event.location}
                            </div>
                          </div>
                          <p className="text-gray-300 mt-2">{event.description}</p>
                          <Button className="mt-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40">
                            Register Now
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Calendar */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Community Calendar</h2>
                  <Button
                    variant="outline"
                    className="border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Add to Your Calendar
                  </Button>
                </div>
                <div className="bg-black/40 rounded-lg p-4 border border-purple-500/30 h-[300px] flex items-center justify-center">
                  <p className="text-gray-400 text-center">
                    Interactive calendar with all upcoming BitRocket community events.
                    <br />
                    <span className="text-cyan-400">Click on any event to learn more and register.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Host an Event */}
            <motion.div variants={fadeInUp} className="relative">
              <NeonRing
                size={600}
                color="from-purple-600/20 to-cyan-500/20"
                blur="blur-[100px]"
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"
              />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
                  Host Your Own BitRocket Event
                </h2>
                <p className="text-gray-300 mb-6">
                  Organize a local meetup, workshop, or presentation about BitRocket technology and connect with
                  enthusiasts in your area.
                </p>
                <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
                  Submit Event Proposal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}

        {/* User Showcase */}
        {activeCategory === "showcase" && (
          <div className="space-y-8">
            {/* Featured Projects */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Featured Projects</h2>
                  <Button
                    variant="outline"
                    className="border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                  >
                    Submit Your Project
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {showcaseProjects.map((project, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 h-full overflow-hidden">
                        <div className="relative h-48">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                          <img
                            src={project.image || `/placeholder.svg?height=200&width=300&query=tech project ${index}`}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Neon scan line effect */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-400 mb-2">by {project.author}</p>
                          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center">
                                <ThumbsUp className="h-4 w-4 text-cyan-400 mr-1" />
                                <span className="text-gray-300 text-sm">{project.likes}</span>
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="h-4 w-4 text-cyan-400 mr-1" />
                                <span className="text-gray-300 text-sm">{project.comments}</span>
                              </div>
                            </div>
                            <Button
                              variant="link"
                              className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                            >
                              View <ChevronRight className="h-4 w-4 ml-1 inline" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project Categories */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Hardware Mods",
                  count: "24 projects",
                  icon: <Settings className="h-6 w-6 text-cyan-400" />,
                },
                {
                  title: "Software & Apps",
                  count: "37 projects",
                  icon: <MessageCircle className="h-6 w-6 text-cyan-400" />,
                },
                {
                  title: "Data Visualizations",
                  count: "18 projects",
                  icon: <FileText className="h-6 w-6 text-cyan-400" />,
                },
              ].map((category, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mr-3">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{category.title}</h3>
                          <p className="text-gray-400 text-sm">{category.count}</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Project Resources */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Resources for Creators</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    BitRocket API Documentation
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Developer SDK
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    3D Printing Templates
                  </Button>
                  <Button
                    variant="outline"
                    className="justify-start border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Design Assets
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Contribute */}
        {activeCategory === "contribute" && (
          <div className="space-y-8">
            {/* Ways to Contribute */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <Code className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Open Source</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Contribute to BitRocket's open source projects and help improve our technology.
                    </p>
                    <Button
                      variant="link"
                      className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                    >
                      View GitHub <ExternalLink className="h-4 w-4 ml-1 inline" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <FileText className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Help improve our documentation, write tutorials, or create guides for other users.
                    </p>
                    <Button
                      variant="link"
                      className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                    >
                      Learn More <ChevronRight className="h-4 w-4 ml-1 inline" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/80 to-cyan-500/80 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6 group-hover:border-cyan-500/40 transition duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-500/30 mb-4">
                      <MessageCircle className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Community Support</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Answer questions, help troubleshoot issues, and mentor new BitRocket users.
                    </p>
                    <Button
                      variant="link"
                      className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                    >
                      Join Support Team <ChevronRight className="h-4 w-4 ml-1 inline" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Current Initiatives */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <h2 className="text-xl font-bold text-white mb-6">Current Initiatives</h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Mobile App Localization",
                      description: "Help translate the BitRocket mobile app into different languages.",
                      progress: 65,
                    },
                    {
                      title: "EV Compatibility Database",
                      description: "Contribute data about BitRocket compatibility with different EV models.",
                      progress: 42,
                    },
                    {
                      title: "Charging Station Map",
                      description: "Add and verify BitRocket-compatible charging stations to our global map.",
                      progress: 78,
                    },
                  ].map((initiative, index) => (
                    <div key={index} className="group relative">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">
                            {initiative.title}
                          </h3>
                          <p className="text-gray-300 text-sm">{initiative.description}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-32 bg-black/40 rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full rounded-full"
                              style={{ width: `${initiative.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-white font-medium">{initiative.progress}%</span>
                          <Button
                            variant="outline"
                            className="border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                          >
                            Contribute
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recognition */}
            <motion.div variants={fadeInUp} className="relative">
              <NeonRing
                size={600}
                color="from-purple-600/20 to-cyan-500/20"
                blur="blur-[100px]"
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0"
              />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
                  Contributor Recognition Program
                </h2>
                <p className="text-gray-300 mb-6">
                  BitRocket values our community contributors. Our recognition program rewards active members with
                  exclusive benefits, early access to new features, and special event invitations.
                </p>
                <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105">
                  Learn About Recognition Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </PageLayout>
  )
}
