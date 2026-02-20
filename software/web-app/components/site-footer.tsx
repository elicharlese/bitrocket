import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Zap } from "lucide-react"

// Neon ring component for cyberpunk aesthetic
const NeonRing = ({
  size = 200,
  color = "from-purple-500 to-cyan-500",
  opacity = 0.5,
  blur = "blur-2xl",
  animationDelay = 0,
  className = "",
}) => {
  return (
    <div
      className={`absolute rounded-full ${blur} bg-gradient-to-r ${color} opacity-${opacity * 100} animate-pulse ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}s`,
      }}
    />
  )
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Neon rings in footer - moved to lower z-index */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 rounded-full blur-[100px] bg-gradient-to-r from-cyan-600/10 to-purple-500/10 opacity-100 animate-pulse w-[600px] h-[600px]"></div>
        <div className="absolute top-0 left-0 rounded-full blur-[80px] bg-gradient-to-r from-purple-600/10 to-blue-500/10 opacity-100 animate-pulse w-[400px] h-[400px]"></div>
      </div>

      {/* Neon grid - moved to lower z-index */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(79,70,229,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.02)_1px,transparent_1px)] bg-[size:25px_25px]"></div>

      <div className="container px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-md opacity-70"></div>
                <div
                  className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-xl opacity-30 animate-pulse"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="relative bg-black rounded-full p-2">
                  <Zap className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                BitRocket
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Revolutionizing the future of electric vehicles with blockchain technology.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors relative z-20">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors relative z-20">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative z-20 block footer-link"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative z-20 block footer-link"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative z-20 block footer-link"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/documentation"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative z-20 block footer-link"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help-center"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative z-20 block footer-link"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-sm text-gray-400 hover:text-white transition-colors relative z-20 block footer-link"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white">Stay Updated</h4>
            <p className="text-sm text-gray-400">Subscribe to our newsletter for the latest updates and features.</p>
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full blur-sm opacity-50"></div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="relative w-full rounded-full px-4 py-2 bg-black/40 border border-cyan-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>
              <Button className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 border-0 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 relative z-20">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2025 BitRocket. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              className="text-xs text-gray-500 hover:text-white transition-colors relative z-20 footer-link"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs text-gray-500 hover:text-white transition-colors relative z-20 footer-link"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs text-gray-500 hover:text-white transition-colors relative z-20 footer-link"
              href="#"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
