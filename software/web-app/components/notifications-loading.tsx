import { Skeleton } from "@/components/ui/skeleton"

export function NotificationsLoading() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-32 bg-gray-800" />
        <div className="flex space-x-2">
          <Skeleton className="h-6 w-6 rounded-full bg-gray-800" />
          <Skeleton className="h-6 w-6 rounded-full bg-gray-800" />
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-3 border border-gray-800 rounded-lg">
          <div className="flex items-start">
            <Skeleton className="h-2 w-2 rounded-full bg-gray-800 mt-1.5" />
            <div className="ml-3 flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4 bg-gray-800" />
              <Skeleton className="h-3 w-full bg-gray-800" />
              <Skeleton className="h-2 w-1/4 bg-gray-800" />
            </div>
          </div>
        </div>

        <div className="p-3 border border-gray-800 rounded-lg">
          <div className="flex items-start">
            <Skeleton className="h-2 w-2 rounded-full bg-gray-800 mt-1.5" />
            <div className="ml-3 flex-1 space-y-2">
              <Skeleton className="h-4 w-2/3 bg-gray-800" />
              <Skeleton className="h-3 w-full bg-gray-800" />
              <Skeleton className="h-2 w-1/3 bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
