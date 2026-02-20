"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, Mail, Loader2, AlertCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/contexts/auth-context"

export default function ForgotPassword() {
  const { resetPassword, loading } = useAuth()

  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    if (!email) {
      setError("Please enter your email address")
      return
    }

    try {
      await resetPassword(email)
      setSuccess(true)
    } catch (error) {
      setError("Failed to send reset email")
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-purple-950/20 to-black overflow-x-hidden">
      {/* Cyberpunk background elements */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] bg-purple-900/20 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] bg-cyan-900/20 animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        ></div>

        {/* Grid overlay for cyberpunk effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,15,84,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,15,84,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Horizontal light beam */}
        <div className="absolute top-1/3 -left-40 h-0.5 w-[150%] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform rotate-[5deg] blur"></div>
        <div className="absolute top-2/3 -left-40 h-0.5 w-[150%] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent transform -rotate-[8deg] blur"></div>
      </div>

      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center justify-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-md opacity-80"></div>
                  <div
                    className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div className="relative bg-black rounded-full p-2">
                    <Zap className="h-8 w-8 text-cyan-300" />
                  </div>
                </div>
                <span className="font-bold text-3xl bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  BitRocket
                </span>
              </div>
            </Link>
            <h1 className="mt-6 text-2xl font-bold text-white">Reset your password</h1>
            <p className="mt-2 text-gray-400">We'll send you a link to reset your password</p>
          </div>

          {error && (
            <Alert className="mb-6 bg-red-900/20 border-red-500/50 text-red-300">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-6 bg-green-900/20 border-green-500/50 text-green-300">
              <AlertDescription>
                If an account exists with that email, you'll receive a password reset link shortly.
              </AlertDescription>
            </Alert>
          )}

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20">
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="pl-10 bg-black/40 border-purple-500/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to sign in
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
