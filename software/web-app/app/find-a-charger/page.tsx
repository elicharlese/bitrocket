"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  MapPin,
  Zap,
  Battery,
  BatteryCharging,
  Star,
  ChevronRight,
  Filter,
  Wifi,
  Coffee,
  ShoppingBag,
  Utensils,
  Building,
  ParkingCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { StaticMap } from "@/components/static-map"

// Types
interface ChargingStation {
  id: string
  name: string
  address: string
  coordinates: [number, number]
  type: "supercharger" | "fast" | "standard"
  connectors: string[]
  power: string
  price: string
  available: boolean
  blockchain: boolean
  amenities: string[]
  rating: number
  reviews: number
  distance: number
}

export default function FindAChargerPage() {
  const [stations, setStations] = useState<ChargingStation[]>([])
  const [filteredStations, setFilteredStations] = useState<ChargingStation[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    type: "all",
    available: false,
    blockchain: false,
    maxDistance: 10,
  })

  // Fetch charging stations
  useEffect(() => {
    const fetchStations = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams()
        if (filters.type !== "all") params.append("type", filters.type)
        if (filters.available) params.append("available", "true")
        if (filters.blockchain) params.append("blockchain", "true")

        const response = await fetch(`/api/charging-stations?${params.toString()}`)
        const data = await response.json()
        setStations(data)
        setFilteredStations(data)
      } catch (error) {
        console.error("Error fetching charging stations:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStations()
  }, [filters.type, filters.available, filters.blockchain])

  // Filter stations by search query and distance
  useEffect(() => {
    if (stations.length > 0) {
      const filtered = stations.filter((station) => {
        const matchesSearch =
          searchQuery === "" ||
          station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          station.address.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesDistance = station.distance <= filters.maxDistance

        return matchesSearch && matchesDistance
      })

      setFilteredStations(filtered)
    }
  }, [searchQuery, filters.maxDistance, stations])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Helper function to render station type icon
  const renderStationTypeIcon = (type: string) => {
    switch (type) {
      case "supercharger":
        return <BatteryCharging className="h-5 w-5 text-cyan-400" />
      case "fast":
        return <Battery className="h-5 w-5 text-blue-400" />
      case "standard":
        return <Zap className="h-5 w-5 text-purple-400" />
      default:
        return <Zap className="h-5 w-5 text-gray-400" />
    }
  }

  // Helper function to render amenity icon
  const renderAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "restrooms":
        return <ParkingCircle className="h-4 w-4" />
      case "coffee shop":
        return <Coffee className="h-4 w-4" />
      case "wi-fi":
        return <Wifi className="h-4 w-4" />
      case "shopping":
        return <ShoppingBag className="h-4 w-4" />
      case "restaurant":
        return <Utensils className="h-4 w-4" />
      case "hotel":
        return <Building className="h-4 w-4" />
      default:
        return <ChevronRight className="h-4 w-4" />
    }
  }

  return (
    <PageLayout title="Find a Charger" subtitle="Locate BitRocket charging stations near you">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search and filters panel */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-1">
          <motion.div variants={fadeInUp} className="relative mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by location or station name"
                  className="pl-10 bg-black/40 border-purple-500/30 focus:border-cyan-500/50 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-cyan-400" />
                <h3 className="text-lg font-medium text-white">Filters</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-gray-300">Charger Type</Label>
                  <Tabs
                    defaultValue="all"
                    value={filters.type}
                    onValueChange={(value) => setFilters({ ...filters, type: value })}
                    className="w-full"
                  >
                    <TabsList className="grid grid-cols-4 bg-black/40 border border-purple-500/30 rounded-lg">
                      <TabsTrigger value="all" className="data-[state=active]:bg-purple-500/20">
                        All
                      </TabsTrigger>
                      <TabsTrigger value="supercharger" className="data-[state=active]:bg-purple-500/20">
                        Super
                      </TabsTrigger>
                      <TabsTrigger value="fast" className="data-[state=active]:bg-purple-500/20">
                        Fast
                      </TabsTrigger>
                      <TabsTrigger value="standard" className="data-[state=active]:bg-purple-500/20">
                        Standard
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Maximum Distance: {filters.maxDistance} miles</Label>
                  <Slider
                    defaultValue={[10]}
                    max={20}
                    step={1}
                    value={[filters.maxDistance]}
                    onValueChange={(value) => setFilters({ ...filters, maxDistance: value[0] })}
                    className="py-4"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="available" className="text-gray-300">
                      Available Now
                    </Label>
                    <Switch
                      id="available"
                      checked={filters.available}
                      onCheckedChange={(checked) => setFilters({ ...filters, available: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="blockchain" className="text-gray-300">
                      BitRocket Enabled
                    </Label>
                    <Switch
                      id="blockchain"
                      checked={filters.blockchain}
                      onCheckedChange={(checked) => setFilters({ ...filters, blockchain: checked })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Station list */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4 max-h-[500px] overflow-y-auto">
              <h3 className="text-lg font-medium text-white mb-4">
                {loading ? "Loading stations..." : `${filteredStations.length} Stations Found`}
              </h3>

              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
                </div>
              ) : filteredStations.length === 0 ? (
                <div className="text-center py-8 text-gray-400">No charging stations found matching your criteria</div>
              ) : (
                <div className="space-y-3">
                  {filteredStations.map((station) => (
                    <div
                      key={station.id}
                      className={`relative rounded-lg p-4 transition-all duration-300 cursor-pointer ${
                        selectedStation?.id === station.id
                          ? "bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-cyan-500/50"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                      onClick={() => setSelectedStation(station)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-white">{station.name}</h4>
                          <div className="flex items-center text-sm text-gray-400 mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{station.distance} miles away</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {renderStationTypeIcon(station.type)}
                          {station.blockchain && (
                            <div className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                              BitRocket
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center mt-2 text-sm">
                        <div className="flex items-center text-yellow-400">
                          <Star className="h-3 w-3 fill-yellow-400 stroke-yellow-400" />
                          <span className="ml-1">{station.rating}</span>
                        </div>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className={station.available ? "text-green-400" : "text-red-400"}>
                          {station.available ? "Available" : "In Use"}
                        </span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-400">{station.power}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Map and station details */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-2">
          <motion.div variants={fadeInUp} className="relative mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
            <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 overflow-hidden">
              {/* Use our static map component instead of the interactive Mapbox component */}
              <StaticMap
                stations={filteredStations}
                selectedStation={selectedStation}
                onSelectStation={setSelectedStation}
              />
            </div>
          </motion.div>

          {/* Station details */}
          {selectedStation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedStation.name}</h3>
                    <p className="text-gray-400 mt-1">{selectedStation.address}</p>
                  </div>
                  <div className="flex items-center">
                    {renderStationTypeIcon(selectedStation.type)}
                    {selectedStation.blockchain && (
                      <div className="ml-2 px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        BitRocket Enabled
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Station Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status</span>
                        <span className={selectedStation.available ? "text-green-400" : "text-red-400"}>
                          {selectedStation.available ? "Available Now" : "Currently In Use"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Power Output</span>
                        <span className="text-white">{selectedStation.power}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price</span>
                        <span className="text-white">${selectedStation.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Distance</span>
                        <span className="text-white">{selectedStation.distance} miles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Rating</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                          <span className="ml-1 text-white">{selectedStation.rating}</span>
                          <span className="ml-1 text-gray-400">({selectedStation.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Available Connectors</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedStation.connectors.map((connector, index) => (
                        <div
                          key={index}
                          className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-900/40 to-blue-900/40 text-white border border-purple-500/30"
                        >
                          {connector}
                        </div>
                      ))}
                    </div>

                    <h4 className="text-sm font-medium text-gray-400 mb-2">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedStation.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-1 text-sm text-gray-300">
                          {renderAmenityIcon(amenity)}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <Button
                    variant="outline"
                    className="rounded-full border-purple-500/30 text-white hover:border-cyan-500/50 transition-all duration-300"
                    onClick={() => setSelectedStation(null)}
                  >
                    Back to List
                  </Button>

                  <div className="flex gap-3">
                    <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40">
                      Navigate
                    </Button>

                    {selectedStation.blockchain && (
                      <Button className="rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 border-0 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40">
                        Reserve with BitRocket
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  )
}
