"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10"
            >
                <Sun className="h-5 w-5" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full w-10 h-10 hover:bg-purple-500/10 transition-all duration-300"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400 transition-all" />
            ) : (
                <Moon className="h-5 w-5 text-purple-600 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
