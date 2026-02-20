export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black transition-colors duration-300">
            <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin" />
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
            </div>
        </div>
    )
}
