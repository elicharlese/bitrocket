import { Skeleton } from "@/components/ui/skeleton"
import { PageLayout } from "@/components/page-layout"

export default function Loading() {
  return (
    <PageLayout title="BitRocket Blog" subtitle="Insights, updates, and stories from the BitRocket team">
      {/* Search and Categories Skeleton */}
      <div className="mb-12">
        {/* Search Skeleton */}
        <div className="mb-8 relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30"></div>
          <div className="relative rounded-xl backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-4">
            <Skeleton className="h-10 w-full bg-gray-800/50" />
          </div>
        </div>

        {/* Category Tabs Skeleton */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-xl blur opacity-20"></div>
          <div className="relative p-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-md rounded-xl border border-purple-500/20">
            <div className="flex gap-2 p-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-8 flex-1 bg-gray-800/50" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post Skeleton */}
      <div className="mb-12 relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-40"></div>
        <div className="relative rounded-[2rem] overflow-hidden backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Skeleton className="h-[300px] bg-gray-800/50" />
            <div className="p-8 flex flex-col">
              <Skeleton className="h-6 w-24 mb-4 bg-gray-800/50" />
              <Skeleton className="h-8 w-full mb-4 bg-gray-800/50" />
              <Skeleton className="h-20 w-full mb-6 bg-gray-800/50" />
              <div className="flex items-center mb-6 gap-4">
                <Skeleton className="h-4 w-24 bg-gray-800/50" />
                <Skeleton className="h-4 w-24 bg-gray-800/50" />
                <Skeleton className="h-4 w-24 bg-gray-800/50" />
              </div>
              <Skeleton className="h-10 w-32 mt-auto bg-gray-800/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid Skeleton */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30"></div>
              <div className="relative rounded-[2rem] overflow-hidden backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 h-full flex flex-col">
                <Skeleton className="h-48 bg-gray-800/50" />
                <div className="p-6 flex flex-col flex-grow">
                  <Skeleton className="h-6 w-full mb-3 bg-gray-800/50" />
                  <Skeleton className="h-16 w-full mb-4 bg-gray-800/50" />
                  <div className="flex items-center mb-4 gap-3">
                    <Skeleton className="h-3 w-20 bg-gray-800/50" />
                    <Skeleton className="h-3 w-20 bg-gray-800/50" />
                    <Skeleton className="h-3 w-20 bg-gray-800/50" />
                  </div>
                  <Skeleton className="h-4 w-24 mt-auto bg-gray-800/50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Skeleton */}
      <div className="relative">
        <div className="relative z-10 max-w-4xl mx-auto p-8 rounded-[2rem] backdrop-blur-md bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Skeleton className="h-8 w-3/4 mb-4 bg-gray-800/50" />
              <Skeleton className="h-16 w-full bg-gray-800/50" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-10 w-full bg-gray-800/50" />
              <Skeleton className="h-10 w-full bg-gray-800/50" />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
