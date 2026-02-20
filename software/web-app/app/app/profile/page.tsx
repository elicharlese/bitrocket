"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { WalletConnect } from "@/components/wallet-connect"
import { User, Mail, Wallet, Shield, Clock, Upload, CheckCircle } from "lucide-react"

export default function ProfilePage() {
  const { user, isDemo } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: "BitRocket enthusiast and EV owner since 2022.",
  })

  // Get initials from name or first characters from wallet address
  const getInitials = () => {
    if (user?.name) {
      return user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
    }

    if (user?.walletAddress) {
      return user.walletAddress.substring(0, 2)
    }

    return "BR"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would update the user profile here
    setIsEditing(false)
  }

  const activityHistory = [
    {
      id: 1,
      type: "charge",
      location: "SuperCharger Station #42",
      date: "2023-04-10T14:30:00",
      amount: "45 kWh",
      tokens: "12.5 BRT",
    },
    {
      id: 2,
      type: "reward",
      source: "Referral Program",
      date: "2023-04-05T09:15:00",
      tokens: "50 BRT",
    },
    {
      id: 3,
      type: "charge",
      location: "EcoCharge Network - Downtown",
      date: "2023-04-01T18:45:00",
      amount: "30 kWh",
      tokens: "8.2 BRT",
    },
  ]

  return (
    <div className="container max-w-6xl py-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column - Profile info */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-purple-900 to-blue-900"></div>
            <CardContent className="pt-0 relative">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="relative group">
                  <Avatar className="h-32 w-32 border-4 border-black">
                    <AvatarImage src={user?.image || "/generic-user-icon.png"} alt={user?.name || "User"} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-700 to-cyan-700 text-white text-4xl">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                  {!isDemo && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 right-0 rounded-full bg-black border border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Upload className="h-4 w-4 text-cyan-400" />
                      <span className="sr-only">Upload avatar</span>
                    </Button>
                  )}
                </div>
              </div>
              <div className="mt-16 text-center space-y-2">
                <h2 className="text-2xl font-bold">{user?.name || "BitRocket User"}</h2>
                <p className="text-gray-400 text-sm">{user?.email || "No email provided"}</p>
                {isDemo && (
                  <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500">
                    Demo Account
                  </Badge>
                )}
                {user?.walletAddress && (
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Badge variant="outline" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                      <Wallet className="h-3 w-3 mr-1" />
                      Wallet Connected
                    </Badge>
                  </div>
                )}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">{formData.bio}</p>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-cyan-400">83.5</p>
                    <p className="text-xs text-gray-400">BRT Tokens</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">12</p>
                    <p className="text-xs text-gray-400">Charges</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {!isDemo && (
            <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-cyan-400" /> Account Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Two-factor authentication</span>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    Enabled
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Email verified</span>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    Verified
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  Manage Security
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right column - Tabs */}
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="personal" className="data-[state=active]:bg-purple-900/30">
                <User className="h-4 w-4 mr-2" /> Personal Info
              </TabsTrigger>
              <TabsTrigger value="wallets" className="data-[state=active]:bg-purple-900/30">
                <Wallet className="h-4 w-4 mr-2" /> Wallets
              </TabsTrigger>
              <TabsTrigger value="activity" className="data-[state=active]:bg-purple-900/30">
                <Clock className="h-4 w-4 mr-2" /> Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={!isEditing || isDemo}
                          className="bg-black/60 border-purple-500/30 focus:border-cyan-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={!isEditing || isDemo}
                          className="bg-black/60 border-purple-500/30 focus:border-cyan-500/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          disabled={!isEditing || isDemo}
                          className="bg-black/60 border-purple-500/30 focus:border-cyan-500/50"
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {isDemo ? (
                    <p className="text-sm text-amber-400">
                      <Mail className="h-4 w-4 inline mr-1" />
                      Create an account to edit your profile
                    </p>
                  ) : isEditing ? (
                    <>
                      <Button variant="ghost" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSubmit}>Save Changes</Button>
                    </>
                  ) : (
                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="wallets">
              <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Connected Wallets</CardTitle>
                  <CardDescription>Manage your blockchain wallets.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {user?.walletAddress ? (
                    <div className="p-4 border border-purple-500/30 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-cyan-300">Connected Wallet</p>
                          <p className="text-xs text-gray-400 mt-1 font-mono">
                            {user.walletAddress.substring(0, 6)}...
                            {user.walletAddress.substring(user.walletAddress.length - 4)}
                          </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          View on Explorer
                        </Button>
                        {!isDemo && (
                          <Button size="sm" variant="outline" className="text-xs text-red-400 hover:text-red-300">
                            Disconnect
                          </Button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Wallet className="h-12 w-12 mx-auto text-gray-500 mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Wallets Connected</h3>
                      <p className="text-gray-400 text-sm mb-6">
                        Connect a blockchain wallet to use all BitRocket features
                      </p>
                      <WalletConnect />
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Activity History</CardTitle>
                  <CardDescription>Your recent BitRocket activity.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {activityHistory.map((activity) => (
                      <div key={activity.id} className="relative pl-6 pb-6">
                        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-500 to-blue-500"></div>
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h4 className="text-sm font-medium">
                              {activity.type === "charge" ? "Charging Session" : "Token Reward"}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">
                              {activity.type === "charge" ? activity.location : activity.source}
                            </p>
                          </div>
                          <div className="mt-2 sm:mt-0 text-right">
                            <p className="text-sm font-medium text-cyan-400">
                              {activity.type === "charge" ? `${activity.amount} • ` : ""}
                              {activity.tokens}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(activity.date).toLocaleDateString()} •{" "}
                              {new Date(activity.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
