import { MapPin } from "lucide-react"

interface MapFallbackProps {
  message?: string
}

export function MapFallback({
  message = "Use the station list to find charging stations near you.",
}: MapFallbackProps) {
  return (
    <div className="h-[400px] w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30">
      <MapPin className="h-12 w-12 text-purple-400 mb-4" />
      <h3 className="text-xl font-medium text-white mb-2">BitRocket Charging Map</h3>
      <p className="text-gray-400 text-center max-w-md px-4">{message}</p>
    </div>
  )
}
