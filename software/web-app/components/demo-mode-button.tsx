"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { Sparkles } from "lucide-react"

export function DemoModeButton() {
  const { startDemoMode } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleStartDemo = async () => {
    setIsLoading(true)
    try {
      await startDemoMode()
      router.push("/app")
    } catch (error) {
      console.error("Failed to start demo mode:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      onClick={handleStartDemo}
      disabled={isLoading}
      className="w-full relative overflow-hidden group border-purple-500/30 hover:border-purple-500/50 bg-black/50"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <span className="relative flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-cyan-400" />
        {isLoading ? "Loading Demo..." : "Try Demo Mode"}
      </span>
    </Button>
  )
}
