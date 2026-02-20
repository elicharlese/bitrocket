"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

export default function VerifyEmailPage() {
  const { verifyEmail } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setError("Invalid or missing verification token")
        setIsLoading(false)
        return
      }

      try {
        await verifyEmail(token)
        setSuccess(true)
        setTimeout(() => {
          router.push("/auth/signin")
        }, 5000)
      } catch (err) {
        setError("Failed to verify email. The token may be invalid or expired.")
      } finally {
        setIsLoading(false)
      }
    }

    verify()
  }, [token, verifyEmail, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-900 p-4">
      <div className="w-full max-w-md">
        <Card className="border-purple-500/20 bg-black/80 backdrop-blur-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight text-white">Email Verification</CardTitle>
            <CardDescription className="text-gray-400">Verifying your email address</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            {isLoading ? (
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
                <p className="text-gray-300">Verifying your email...</p>
              </div>
            ) : error ? (
              <Alert variant="destructive" className="mb-4 border-red-500/50 bg-red-900/20 text-red-300">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : (
              <Alert className="mb-4 border-green-500/50 bg-green-900/20 text-green-300">
                <AlertDescription>
                  Email verified successfully! You will be redirected to the login page in a few seconds.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/auth/signin" className="text-sm text-purple-400 hover:text-purple-300">
              Back to Sign In
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
