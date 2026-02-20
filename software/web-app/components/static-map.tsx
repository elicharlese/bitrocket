"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

interface ChargingStation {
  id: string
  name: string
  address: string
  coordinates: [number, number]
  type: "supercharger" | "fast" | "standard"
  available: boolean
  blockchain: boolean
}

interface StaticMapProps {
  stations: ChargingStation[]
  selectedStation: ChargingStation | null
  onSelectStation: (station: ChargingStation) => void
}

export function StaticMap({ stations, selectedStation, onSelectStation }: StaticMapProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Calculate the center of all stations or use San Francisco as default
  const center =
    stations.length > 0
      ? stations.reduce(
          (acc, station) => [
            acc[0] + station.coordinates[0] / stations.length,
            acc[1] + station.coordinates[1] / stations.length,
          ],
          [0, 0],
        )
      : [-122.419416, 37.774929] // San Francisco

  // Create a static map URL using a free service
  const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/${
    selectedStation
      ? `pin-s+1e88e5(${selectedStation.coordinates[0]},${selectedStation.coordinates[1]})`
      : stations
          .map(
            (s) =>
              `pin-s+${s.type === "supercharger" ? "9c27b0" : s.type === "fast" ? "1e88e5" : "673ab7"}(${s.coordinates[0]},${s.coordinates[1]})`,
          )
          .join(",")
  }/${center[0]},${center[1]},${selectedStation ? 13 : 11},0/600x400@2x?access_token=pk.eyJ1IjoiZGVtby11c2VyIiwiYSI6ImNrbmhueTBpcTBpZGQyd3BmZ3N4dWVjcWUifQ.dBLtC1zYYDqRE2YmG6vQJg`

  return (
    <div className="h-[400px] w-full relative overflow-hidden rounded-xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/30 to-blue-900/30">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
        </div>
      )}

      {/* Fallback in case the image fails to load */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 transition-opacity duration-300 ${isLoading ? "opacity-100" : "opacity-0"}`}
      >
        <MapPin className="h-12 w-12 text-purple-400 mb-4" />
        <h3 className="text-xl font-medium text-white mb-2">BitRocket Charging Map</h3>
        <p className="text-gray-400 text-center max-w-md px-4">
          Use the station list to find and select charging stations near you.
        </p>
      </div>

      {/* Static map image */}
      <img
        src={mapUrl || "/placeholder.svg"}
        alt="Map of charging stations"
        className="w-full h-full object-cover"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(true)}
      />

      {/* Station markers overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {stations.map((station) => (
          <button
            key={station.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            style={{
              // This is a simplified positioning - in a real app, you'd need to convert
              // geo coordinates to pixel positions more accurately
              left: `${((station.coordinates[0] - (center[0] - 0.1)) / 0.2) * 100}%`,
              top: `${((station.coordinates[1] - (center[1] + 0.1)) / -0.2) * 100}%`,
            }}
            onClick={() => onSelectStation(station)}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                station.type === "supercharger"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                  : station.type === "fast"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                    : "bg-gradient-to-r from-blue-500 to-purple-500"
              } ${station.id === selectedStation?.id ? "ring-2 ring-white scale-125" : ""}`}
            >
              <div className="text-white text-xs">
                {station.type === "supercharger" ? "S" : station.type === "fast" ? "F" : "C"}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Cyberpunk overlay elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"></div>

      {/* Scan line effect */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-[scan_8s_ease-in-out_infinite]"></div>
    </div>
  )
}
