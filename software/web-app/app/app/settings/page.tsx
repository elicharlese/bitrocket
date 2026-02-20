"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Moon, Sun, Globe, Shield, CreditCard, Zap, Mail, MessageSquare, AlertTriangle } from "lucide-react"

export default function SettingsPage() {
  const { user, isDemo } = useAuth()
  const [theme, setTheme] = useState("dark")
  const [language, setLanguage] = useState("en")

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
    updates: true,
    charging: true,
    rewards: true,
  })

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-400">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="general" className="data-[state=active]:bg-purple-900/30">
            <Globe className="h-4 w-4 mr-2" /> General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-900/30">
            <Bell className="h-4 w-4 mr-2" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-purple-900/30">
            <Shield className="h-4 w-4 mr-2" /> Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-purple-900/30">
            <CreditCard className="h-4 w-4 mr-2" /> Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your account preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Theme</Label>
                    <p className="text-sm text-gray-400">Select your preferred theme.</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={theme === "light" ? "default" : "outline"}
                      size="sm"
                      onClick={() => !isDemo && setTheme("light")}
                      disabled={isDemo}
                      className={theme === "light" ? "bg-gradient-to-r from-purple-600 to-blue-500" : ""}
                    >
                      <Sun className="h-4 w-4 mr-2" /> Light
                    </Button>
                    <Button
                      variant={theme === "dark" ? "default" : "outline"}
                      size="sm"
                      onClick={() => !isDemo && setTheme("dark")}
                      disabled={isDemo}
                      className={theme === "dark" ? "bg-gradient-to-r from-purple-600 to-blue-500" : ""}
                    >
                      <Moon className="h-4 w-4 mr-2" /> Dark
                    </Button>
                  </div>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Language</Label>
                    <p className="text-sm text-gray-400">Select your preferred language.</p>
                  </div>
                  <Select value={language} onValueChange={(value) => !isDemo && setLanguage(value)} disabled={isDemo}>
                    <SelectTrigger className="w-[180px] bg-black/60 border-purple-500/30">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-purple-500/30">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Energy Units</Label>
                    <p className="text-sm text-gray-400">Choose your preferred energy unit display.</p>
                  </div>
                  <Select defaultValue="kwh" disabled={isDemo}>
                    <SelectTrigger className="w-[180px] bg-black/60 border-purple-500/30">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-purple-500/30">
                      <SelectItem value="kwh">Kilowatt-hours (kWh)</SelectItem>
                      <SelectItem value="mj">Megajoules (MJ)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Distance Units</Label>
                    <p className="text-sm text-gray-400">Choose your preferred distance unit.</p>
                  </div>
                  <Select defaultValue="km" disabled={isDemo}>
                    <SelectTrigger className="w-[180px] bg-black/60 border-purple-500/30">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 border-purple-500/30">
                      <SelectItem value="km">Kilometers (km)</SelectItem>
                      <SelectItem value="mi">Miles (mi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            {isDemo && (
              <CardFooter>
                <p className="text-sm text-amber-400 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Create an account to change settings
                </p>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-cyan-400" /> Email Notifications
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Manage your email notification preferences.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications" className="flex flex-col">
                      <span>Email Notifications</span>
                      <span className="font-normal text-xs text-gray-400">Receive notifications via email</span>
                    </Label>
                    <Switch
                      id="email-notifications"
                      checked={notifications.email}
                      onCheckedChange={() => !isDemo && handleNotificationChange("email")}
                      disabled={isDemo}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="marketing-emails" className="flex flex-col">
                      <span>Marketing Emails</span>
                      <span className="font-normal text-xs text-gray-400">
                        Receive marketing and promotional emails
                      </span>
                    </Label>
                    <Switch
                      id="marketing-emails"
                      checked={notifications.marketing}
                      onCheckedChange={() => !isDemo && handleNotificationChange("marketing")}
                      disabled={isDemo}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="update-emails" className="flex flex-col">
                      <span>Product Updates</span>
                      <span className="font-normal text-xs text-gray-400">Receive updates about new features</span>
                    </Label>
                    <Switch
                      id="update-emails"
                      checked={notifications.updates}
                      onCheckedChange={() => !isDemo && handleNotificationChange("updates")}
                      disabled={isDemo}
                    />
                  </div>
                </div>

                <Separator className="bg-purple-500/20" />

                <div>
                  <h3 className="text-lg font-medium flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-cyan-400" /> Push Notifications
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Manage your push notification preferences.</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifications" className="flex flex-col">
                      <span>Push Notifications</span>
                      <span className="font-normal text-xs text-gray-400">Receive notifications on your device</span>
                    </Label>
                    <Switch
                      id="push-notifications"
                      checked={notifications.push}
                      onCheckedChange={() => !isDemo && handleNotificationChange("push")}
                      disabled={isDemo}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="charging-notifications" className="flex flex-col">
                      <span>Charging Events</span>
                      <span className="font-normal text-xs text-gray-400">Notifications about charging sessions</span>
                    </Label>
                    <Switch
                      id="charging-notifications"
                      checked={notifications.charging}
                      onCheckedChange={() => !isDemo && handleNotificationChange("charging")}
                      disabled={isDemo}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="reward-notifications" className="flex flex-col">
                      <span>Rewards & Tokens</span>
                      <span className="font-normal text-xs text-gray-400">Notifications about earned rewards</span>
                    </Label>
                    <Switch
                      id="reward-notifications"
                      checked={notifications.rewards}
                      onCheckedChange={() => !isDemo && handleNotificationChange("rewards")}
                      disabled={isDemo}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            {isDemo && (
              <CardFooter>
                <p className="text-sm text-amber-400 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Create an account to change notification settings
                </p>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Change Password</Label>
                    <p className="text-sm text-gray-400">Update your account password.</p>
                  </div>
                  <Button disabled={isDemo}>Change Password</Button>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-400">Add an extra layer of security to your account.</p>
                  </div>
                  <Button disabled={isDemo}>Enable 2FA</Button>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Session Management</Label>
                    <p className="text-sm text-gray-400">Manage your active sessions.</p>
                  </div>
                  <Button disabled={isDemo}>View Sessions</Button>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Delete Account</Label>
                    <p className="text-sm text-gray-400">Permanently delete your account and all data.</p>
                  </div>
                  <Button variant="destructive" disabled={isDemo}>
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
            {isDemo && (
              <CardFooter>
                <p className="text-sm text-amber-400 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Create an account to manage security settings
                </p>
              </CardFooter>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Manage your billing information and subscription.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border border-cyan-500/30 rounded-lg bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-cyan-400" />
                    <div>
                      <h3 className="font-medium">BitRocket Pro</h3>
                      <p className="text-sm text-gray-400">Current Plan</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-cyan-400">$19.99/month</p>
                    <p className="text-xs text-gray-400">Next billing: May 15, 2023</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Payment Methods</Label>
                    <p className="text-sm text-gray-400">Manage your payment methods.</p>
                  </div>
                  <Button disabled={isDemo}>Add Payment Method</Button>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Billing History</Label>
                    <p className="text-sm text-gray-400">View your past invoices.</p>
                  </div>
                  <Button variant="outline" disabled={isDemo}>
                    View Invoices
                  </Button>
                </div>

                <Separator className="bg-purple-500/20" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Subscription</Label>
                    <p className="text-sm text-gray-400">Manage your subscription plan.</p>
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" disabled={isDemo}>
                      Change Plan
                    </Button>
                    <Button variant="destructive" disabled={isDemo}>
                      Cancel Plan
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            {isDemo && (
              <CardFooter>
                <p className="text-sm text-amber-400 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Create an account to manage billing settings
                </p>
              </CardFooter>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
