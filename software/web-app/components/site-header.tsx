"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, MapPin } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { UserProfile } from "@/components/user-profile"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [scrollY, setScrollY] = useState(0)
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="px-6 lg:px-10 py-6 flex items-center justify-between backdrop-blur-xl bg-white/80 dark:bg-black/30 fixed w-full z-50 transition-all duration-300 border-b border-gray-200 dark:border-purple-500/10"
      style={{
        boxShadow: scrollY > 10 ? "0 10px 30px -10px rgba(138, 75, 255, 0.3)" : "none",
        backdropFilter: scrollY > 10 ? "blur(16px)" : "blur(12px)",
      }}
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-md opacity-80"></div>
            <div
              className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse"
              style={{ animationDuration: "3s" }}
            ></div>
            <div className="relative bg-white dark:bg-black rounded-full p-2 border border-purple-500/20">
              <Zap className="h-6 w-6 text-cyan-500 dark:text-cyan-300" />
            </div>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-white dark:to-cyan-300 bg-clip-text text-transparent">
            BitRocket
          </span>
        </Link>
      </div>
      <nav className="hidden md:flex gap-8">
        <Link
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          href="/features"
        >
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          href="/how-it-works"
        >
          How It Works
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          href="/pricing"
        >
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          href="/find-a-charger"
        >
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Find a Charger
          </div>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          href="/faq"
        >
          FAQ
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {user ? (
          <UserProfile />
        ) : (
          <>
            <Link href="/auth/signin">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                Log In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40"
              >
                Get Started
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}
