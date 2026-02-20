"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Loader2 } from "lucide-react"

export default function LogoutPage() {
  const { logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const performLogout = async () => {
      await logout()
      router.push("/")
    }

    performLogout()
  }, [logout, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="flex flex-col items-center space-y-4 text-white">
        <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
        <p className="text-lg font-medium">Logging out...</p>
      </div>
    </div>
  )
}
