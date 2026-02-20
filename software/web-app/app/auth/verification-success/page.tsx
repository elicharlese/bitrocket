"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VerificationSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/signin")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-900 p-4">
      <div className="w-full max-w-md">
        <Card className="border-purple-500/20 bg-black/80 backdrop-blur-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight text-white">Verification Successful</CardTitle>
            <CardDescription className="text-gray-400">Your account has been verified</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-900/20">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <p className="mb-4 text-center text-gray-300">
              Thank you for verifying your email address. You can now sign in to your account.
            </p>
            <p className="text-center text-sm text-gray-400">
              You will be redirected to the sign-in page in a few seconds.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"
            >
              <Link href="/auth/signin">Sign In Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
