"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout, NeonRing } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, User, ArrowRight, ChevronRight } from "lucide-react"

export default function BlogPage() {
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
    { id: "all", name: "All Posts" },
    { id: "technology", name: "Technology" },
    { id: "blockchain", name: "Blockchain" },
    { id: "ev", name: "Electric Vehicles" },
    { id: "company", name: "Company News" },
  ]

  const featuredPost = {
    title: "The Future of EV Charging: How Blockchain is Revolutionizing the Industry",
    excerpt:
      "Discover how BitRocket's innovative technology is transforming the way electric vehicles are charged and how blockchain is playing a pivotal role in this revolution.",
    image: "/blog-featured.png",
    date: "November 15, 2023",
    author: "Alex Chen",
    category: "technology",
    readTime: "8 min read",
  }

  const blogPosts = [
    {
      title: "Understanding Gas Credits: How BitRocket Converts Blockchain Energy",
      excerpt:
        "A deep dive into the technology behind BitRocket's gas credit system and how it converts computational energy into charging credits.",
      image: "/blog-post-1.png",
      date: "October 28, 2023",
      author: "Sophia Rodriguez",
      category: "technology",
      readTime: "6 min read",
    },
    {
      title: "BitRocket Partners with Leading EV Manufacturers",
      excerpt:
        "Exciting news about our latest partnerships with major electric vehicle manufacturers to integrate BitRocket technology directly into new models.",
      image: "/blog-post-2.png",
      date: "October 15, 2023",
      author: "Marcus Johnson",
      category: "company",
      readTime: "4 min read",
    },
    {
      title: "The Environmental Impact of Blockchain-Powered EVs",
      excerpt:
        "An analysis of how BitRocket's technology is contributing to a more sustainable future by repurposing computational energy.",
      image: "/blog-post-3.png",
      date: "October 5, 2023",
      author: "Aisha Patel",
      category: "ev",
      readTime: "7 min read",
    },
    {
      title: "Smart Contracts and Electric Vehicles: A Perfect Match",
      excerpt:
        "Exploring the synergy between smart contract technology and electric vehicle infrastructure, and how BitRocket is bridging the gap.",
      image: "/blog-post-4.png",
      date: "September 22, 2023",
      author: "Alex Chen",
      category: "blockchain",
      readTime: "5 min read",
    },
    {
      title: "BitRocket's Technology Explained: From Blockchain to Your Battery",
      excerpt:
        "A comprehensive explanation of how our technology works, from capturing gas in smart contracts to powering your electric vehicle.",
      image: "/blog-post-5.png",
      date: "September 10, 2023",
      author: "Sophia Rodriguez",
      category: "technology",
      readTime: "9 min read",
    },
    {
      title: "The Economics of BitRocket: How Users Save on Charging Costs",
      excerpt:
        "A breakdown of the cost savings that BitRocket users experience and the economic model behind our technology.",
      image: "/blog-post-6.png",
      date: "August 28, 2023",
      author: "Marcus Johnson",
      category: "blockchain",
      readTime: "6 min read",
    },
  ]

  const filteredPosts =
    activeCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <PageLayout title="BitRocket Blog" subtitle="Insights, updates, and stories from the BitRocket team">
      {/* Search and Categories */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mb-12">
        {/* Search */}
        <motion.div variants={fadeInUp} className="mb-8 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
          <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-black/40 border-purple-500/30 focus:border-cyan-500/50 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={fadeInUp} className="relative">
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
      </motion.div>

      {/* Featured Post */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mb-12 relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
        <div className="relative rounded-[2rem] overflow-hidden backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative h-[300px] lg:h-full">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <img
                src={featuredPost.image || "/placeholder.svg?height=600&width=800&query=futuristic+technology+blog"}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=600&width=800&query=futuristic+technology+blog"
                }}
              />
              {/* Neon scan line effect */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
            </div>
            <div className="p-8 flex flex-col">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md px-4 py-1 text-sm text-purple-300 border border-purple-500/20">
                  Featured
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h2>
              <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" />
                  {featuredPost.author}
                </div>
                <div>{featuredPost.readTime}</div>
              </div>
              <div className="mt-auto">
                <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40">
                  Read Article
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-400">No articles found in this category</div>
          ) : (
            filteredPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative rounded-[2rem] overflow-hidden backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 group-hover:border-cyan-500/40 transition duration-300 h-full flex flex-col">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <img
                      src={post.image || `/placeholder.svg?height=300&width=500&query=technology+blog+${index}`}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=300&width=500&query=technology+blog+${index}`
                      }}
                    />
                    {/* Neon scan line effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[scan_4s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-400 mb-4">
                      <div className="flex items-center mr-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center mr-3">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div>{post.readTime}</div>
                    </div>
                    <Button
                      variant="link"
                      className="text-cyan-400 p-0 hover:text-cyan-300 transition-colors group-hover:underline"
                    >
                      Read More <ChevronRight className="h-4 w-4 ml-1 inline" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* Newsletter */}
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

        <div className="relative z-10 max-w-4xl mx-auto p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
                Stay Updated with BitRocket
              </h2>
              <p className="text-gray-300">
                Subscribe to our newsletter to receive the latest updates, articles, and news about BitRocket technology
                and the future of electric vehicles.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex-1 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-sm opacity-50"></div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="relative w-full rounded-full px-4 py-2 bg-black/40 border border-cyan-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>
              <Button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  )
}
