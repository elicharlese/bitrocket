import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsLoading() {
  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-5 w-64" />
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="general" className="data-[state=active]:bg-purple-900/30">
            General
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-900/30">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-purple-900/30">
            Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-purple-900/30">
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="border border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-64 mt-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-48 mt-1" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>

                <Skeleton className="h-px w-full" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-48 mt-1" />
                  </div>
                  <Skeleton className="h-10 w-[180px]" />
                </div>

                <Skeleton className="h-px w-full" />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-48 mt-1" />
                  </div>
                  <Skeleton className="h-10 w-[180px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
