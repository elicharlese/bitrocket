import { Loader2 } from "lucide-react"

export default function ResetPasswordLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="flex flex-col items-center space-y-4 text-white">
        <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}
