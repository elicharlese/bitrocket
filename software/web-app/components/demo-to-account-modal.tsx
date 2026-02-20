"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Mail, Lock, User, AlertCircle, CheckCircle2 } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

type DemoToAccountModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function DemoToAccountModal({ isOpen, onClose }: DemoToAccountModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { convertDemoToAccount } = useAuth()
  const router = useRouter()

  const validateForm = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return false
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return false
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) return

    setIsLoading(true)

    try {
      await convertDemoToAccount(email, password, name)
      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        router.refresh()
      }, 2000)
    } catch (err) {
      setError("Account creation failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setError("")
    setIsSuccess(false)
  }

  const handleClose = () => {
    if (!isLoading) {
      resetForm()
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-black/90 border border-purple-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Save Your Progress
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Create an account to save your demo progress and access all features.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white">Account Created!</h3>
            <p className="text-gray-400">Your demo progress has been saved successfully.</p>
          </div>
        ) : (
          <>
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-300">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="modal-name" className="text-sm font-medium text-gray-300">
                  Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="modal-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="pl-10 bg-black/50 border-purple-500/30 focus:border-cyan-500/50 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-email" className="text-sm font-medium text-gray-300">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="modal-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-black/50 border-purple-500/30 focus:border-cyan-500/50 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-password" className="text-sm font-medium text-gray-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="modal-password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 bg-black/50 border-purple-500/30 focus:border-cyan-500/50 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-confirm-password" className="text-sm font-medium text-gray-300">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="modal-confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="pl-10 bg-black/50 border-purple-500/30 focus:border-cyan-500/50 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 border-purple-500/30 hover:bg-purple-900/20 text-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white transition-all duration-300 border-0"
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : null}
                  {isLoading ? "Creating..." : "Create Account"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
