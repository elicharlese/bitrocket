import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileLoading() {
  return (
    <div className="container max-w-6xl py-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column - Profile info */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
            <CardContent className="pt-0 relative">
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <Skeleton className="h-32 w-32 rounded-full" />
              </div>
              <div className="mt-16 text-center space-y-2">
                <Skeleton className="h-8 w-48 mx-auto" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
              <div className="mt-6 text-center">
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </div>
              <div className="mt-6 flex justify-center">
                <div className="grid grid-cols-2 gap-4 text-center w-full">
                  <div>
                    <Skeleton className="h-8 w-16 mx-auto" />
                    <Skeleton className="h-4 w-20 mx-auto mt-2" />
                  </div>
                  <div>
                    <Skeleton className="h-8 w-16 mx-auto" />
                    <Skeleton className="h-4 w-20 mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <Skeleton className="h-6 w-40" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-16" />
              </div>
              <Skeleton className="h-9 w-full mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Right column - Tabs */}
        <div className="w-full md:w-2/3">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="personal" className="data-[state=active]:bg-purple-900/30">
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="wallets" className="data-[state=active]:bg-purple-900/30">
                Wallets
              </TabsTrigger>
              <TabsTrigger value="activity" className="data-[state=active]:bg-purple-900/30">
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
                <CardHeader>
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-64 mt-2" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
