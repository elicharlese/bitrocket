import { NextResponse } from "next/server"

// Mock data for charging stations
const chargingStations = [
  {
    id: "cs001",
    name: "Downtown BitRocket Hub",
    address: "123 Main St, San Francisco, CA 94105",
    coordinates: [-122.419416, 37.774929],
    type: "supercharger",
    connectors: ["CCS", "CHAdeMO", "Type 2"],
    power: "350 kW",
    price: "0.35/kWh",
    available: true,
    blockchain: true,
    amenities: ["Restrooms", "Coffee Shop", "Wi-Fi"],
    rating: 4.8,
    reviews: 124,
    distance: 0.8,
  },
  {
    id: "cs002",
    name: "Mission District Charging Point",
    address: "456 Valencia St, San Francisco, CA 94103",
    coordinates: [-122.422005, 37.764504],
    type: "fast",
    connectors: ["CCS", "Type 2"],
    power: "150 kW",
    price: "0.40/kWh",
    available: true,
    blockchain: true,
    amenities: ["Restrooms", "Shopping"],
    rating: 4.5,
    reviews: 89,
    distance: 1.2,
  },
  {
    id: "cs003",
    name: "Marina Green Charging Station",
    address: "3601 Lyon St, San Francisco, CA 94123",
    coordinates: [-122.446747, 37.807058],
    type: "standard",
    connectors: ["Type 2"],
    power: "50 kW",
    price: "0.30/kWh",
    available: false,
    blockchain: false,
    amenities: ["Park", "Restrooms"],
    rating: 4.2,
    reviews: 56,
    distance: 2.5,
  },
  {
    id: "cs004",
    name: "SoMa Tech Center",
    address: "555 Howard St, San Francisco, CA 94105",
    coordinates: [-122.396255, 37.787511],
    type: "supercharger",
    connectors: ["CCS", "CHAdeMO", "Type 2"],
    power: "300 kW",
    price: "0.38/kWh",
    available: true,
    blockchain: true,
    amenities: ["Restrooms", "Coffee Shop", "Wi-Fi", "Shopping"],
    rating: 4.9,
    reviews: 201,
    distance: 1.0,
  },
  {
    id: "cs005",
    name: "Golden Gate Park Station",
    address: "501 Stanyan St, San Francisco, CA 94117",
    coordinates: [-122.455151, 37.77251],
    type: "fast",
    connectors: ["CCS", "Type 2"],
    power: "100 kW",
    price: "0.32/kWh",
    available: true,
    blockchain: false,
    amenities: ["Park", "Restrooms"],
    rating: 4.3,
    reviews: 78,
    distance: 3.2,
  },
  {
    id: "cs006",
    name: "Embarcadero Waterfront",
    address: "Pier 27, San Francisco, CA 94111",
    coordinates: [-122.393398, 37.798538],
    type: "standard",
    connectors: ["Type 2"],
    power: "50 kW",
    price: "0.29/kWh",
    available: true,
    blockchain: false,
    amenities: ["Restrooms", "Tourist Attractions"],
    rating: 4.0,
    reviews: 45,
    distance: 2.8,
  },
  {
    id: "cs007",
    name: "Nob Hill Premium Charging",
    address: "905 California St, San Francisco, CA 94108",
    coordinates: [-122.412756, 37.791932],
    type: "supercharger",
    connectors: ["CCS", "CHAdeMO", "Type 2"],
    power: "250 kW",
    price: "0.42/kWh",
    available: true,
    blockchain: true,
    amenities: ["Restrooms", "Hotel", "Restaurant"],
    rating: 4.7,
    reviews: 112,
    distance: 1.5,
  },
  {
    id: "cs008",
    name: "Sunset District Community Station",
    address: "3201 Taraval St, San Francisco, CA 94116",
    coordinates: [-122.479769, 37.742861],
    type: "fast",
    connectors: ["CCS", "Type 2"],
    power: "120 kW",
    price: "0.33/kWh",
    available: false,
    blockchain: true,
    amenities: ["Restrooms", "Grocery Store"],
    rating: 4.1,
    reviews: 67,
    distance: 4.3,
  },
]

export async function GET(request: Request) {
  // Get URL parameters
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  const available = searchParams.get("available")
  const blockchain = searchParams.get("blockchain")

  // Filter stations based on parameters
  let filteredStations = [...chargingStations]

  if (type && type !== "all") {
    filteredStations = filteredStations.filter((station) => station.type === type)
  }

  if (available === "true") {
    filteredStations = filteredStations.filter((station) => station.available)
  }

  if (blockchain === "true") {
    filteredStations = filteredStations.filter((station) => station.blockchain)
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(filteredStations)
}
