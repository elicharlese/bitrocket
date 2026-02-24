"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Maximize2, Minimize2, Settings } from "lucide-react"

interface HammockProps {
  className?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  size?: "compact" | "medium" | "large"
}

export function Hammock({ className = "", position = "bottom-right", size = "medium" }: HammockProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4", 
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4"
  }

  const sizeClasses = {
    compact: isExpanded ? "w-96 h-64" : "w-20 h-20",
    medium: isExpanded ? "w-[500px] h-80" : "w-24 h-24",
    large: isExpanded ? "w-[600px] h-96" : "w-32 h-32"
  }

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded)
    setIsMinimized(false)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
    setIsExpanded(false)
  }

  if (isMinimized) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`fixed z-50 ${positionClasses[position]} ${className}`}
      >
        <Button
          onClick={() => setIsMinimized(false)}
          size="sm"
          className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        width: isExpanded ? sizeClasses[size].split(' ')[0] : sizeClasses[size].split(' ')[0],
        height: isExpanded ? sizeClasses[size].split(' ')[1] : sizeClasses[size].split(' ')[1]
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed z-50 ${positionClasses[position]} ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Neon border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-60"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
        
        {/* Main container */}
        <div className="relative w-full h-full rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 overflow-hidden">
          {/* Cyberpunk grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
          
          {/* Corner highlights */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>

          {/* Content */}
          {isExpanded ? (
            <div className="relative z-10 p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white bg-gradient-to-r from-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  BitRocket Hammock
                </h3>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleMinimize}
                    className="text-purple-300 hover:text-white hover:bg-purple-500/20"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleToggleExpand}
                    className="text-purple-300 hover:text-white hover:bg-purple-500/20"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-xl p-4 border border-purple-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-sm text-cyan-300">System Active</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Gas Credits</span>
                      <span className="text-cyan-300 font-mono">0.0842 ETH</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Charge Offset</span>
                      <span className="text-purple-300 font-mono">67%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Network</span>
                      <span className="text-green-300 font-mono">Connected</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-purple-500/20">
                    <div className="text-xs text-gray-400">
                      <p>⚡ Smart contracts active</p>
                      <p>🔗 Blockchain sync complete</p>
                      <p>🚀 Performance optimized</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex justify-between items-center">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-500/30 text-purple-300 bg-white/5 hover:bg-white/10 text-xs"
                >
                  <Settings className="h-3 w-3 mr-1" />
                  Settings
                </Button>
                <div className="text-xs text-gray-400">
                  v2.0.1
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer group" onClick={handleToggleExpand}>
              {/* Hammock icon representation */}
              <div className="relative">
                <div className="w-12 h-8 border-2 border-cyan-400 rounded-full border-b-0 relative">
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-pulse"></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
