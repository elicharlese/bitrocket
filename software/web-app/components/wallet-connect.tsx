"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function WalletConnect() {
  const { signInWithWallet } = useAuth()
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = async (walletType: "metamask" | "solflare" | "phantom") => {
    setIsConnecting(true)
    setError(null)

    try {
      let address = ""

      switch (walletType) {
        case "metamask":
          if (!window.ethereum) {
            throw new Error("MetaMask is not installed")
          }
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
          address = accounts[0]
          break

        case "solflare":
          if (!window.solflare) {
            throw new Error("Solflare is not installed")
          }
          await window.solflare.connect()
          address = window.solflare.publicKey.toString()
          break

        case "phantom":
          if (!window.solana || !window.solana.isPhantom) {
            throw new Error("Phantom is not installed")
          }
          const response = await window.solana.connect()
          address = response.publicKey.toString()
          break

        default:
          throw new Error("Unsupported wallet type")
      }

      await signInWithWallet(walletType, address)
    } catch (err) {
      console.error("Wallet connection error:", err)
      setError(err instanceof Error ? err.message : "Failed to connect wallet")
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="space-y-3">
      <Button
        variant="outline"
        className="w-full relative flex items-center gap-2 border-purple-500/50 bg-black/20 hover:bg-purple-950/30"
        onClick={() => connectWallet("phantom")}
        disabled={isConnecting}
      >
        {isConnecting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              fill="#AB9FF2"
            />
            <path
              d="M17.24 8.68C17.1 8.68 17 8.78 17 8.92V10.08C17 10.22 17.1 10.32 17.24 10.32H18.76C18.9 10.32 19 10.22 19 10.08V8.92C19 8.78 18.9 8.68 18.76 8.68H17.24Z"
              fill="white"
            />
            <path
              d="M15.24 8.68C15.1 8.68 15 8.78 15 8.92V10.08C15 10.22 15.1 10.32 15.24 10.32H16.76C16.9 10.32 17 10.22 17 10.08V8.92C17 8.78 16.9 8.68 16.76 8.68H15.24Z"
              fill="white"
            />
            <path
              d="M13.24 8.68C13.1 8.68 13 8.78 13 8.92V10.08C13 10.22 13.1 10.32 13.24 10.32H14.76C14.9 10.32 15 10.22 15 10.08V8.92C15 8.78 14.9 8.68 14.76 8.68H13.24Z"
              fill="white"
            />
            <path
              d="M11.24 8.68C11.1 8.68 11 8.78 11 8.92V10.08C11 10.22 11.1 10.32 11.24 10.32H12.76C12.9 10.32 13 10.22 13 10.08V8.92C13 8.78 12.9 8.68 12.76 8.68H11.24Z"
              fill="white"
            />
            <path
              d="M9.24 8.68C9.1 8.68 9 8.78 9 8.92V10.08C9 10.22 9.1 10.32 9.24 10.32H10.76C10.9 10.32 11 10.22 11 10.08V8.92C11 8.78 10.9 8.68 10.76 8.68H9.24Z"
              fill="white"
            />
          </svg>
        )}
        <span>Connect with Phantom</span>
      </Button>

      <Button
        variant="outline"
        className="w-full relative flex items-center gap-2 border-purple-500/50 bg-black/20 hover:bg-purple-950/30"
        onClick={() => connectWallet("solflare")}
        disabled={isConnecting}
      >
        {isConnecting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#FC9965"
            />
            <path
              d="M19.9997 12.0003C19.9997 16.4185 16.4179 20.0003 11.9997 20.0003C7.58146 20.0003 3.99966 16.4185 3.99966 12.0003C3.99966 7.58205 7.58146 4.00024 11.9997 4.00024C16.4179 4.00024 19.9997 7.58205 19.9997 12.0003Z"
              fill="#FFBF5F"
            />
            <path
              d="M12.0001 16.0001C14.2093 16.0001 16.0001 14.2093 16.0001 12.0001C16.0001 9.79093 14.2093 8.00012 12.0001 8.00012C9.79088 8.00012 8.00006 9.79093 8.00006 12.0001C8.00006 14.2093 9.79088 16.0001 12.0001 16.0001Z"
              fill="#FD5900"
            />
          </svg>
        )}
        <span>Connect with Solflare</span>
      </Button>

      <Button
        variant="outline"
        className="w-full relative flex items-center gap-2 border-purple-500/50 bg-black/20 hover:bg-purple-950/30"
        onClick={() => connectWallet("metamask")}
        disabled={isConnecting}
      >
        {isConnecting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.3151 2L13.3257 8.08482L14.9115 4.4291L21.3151 2Z"
              fill="#E17726"
              stroke="#E17726"
              strokeWidth="0.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.68494 2L10.6037 8.15451L9.08848 4.4291L2.68494 2Z"
              fill="#E27625"
              stroke="#E27625"
              strokeWidth="0.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3991 16.9013L16.1813 20.5345L20.8909 21.9451L22.2309 17.0407L18.3991 16.9013Z"
              fill="#E27625"
              stroke="#E27625"
              strokeWidth="0.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.78333 17.0407L3.11263 21.9451L7.81155 20.5345L5.60447 16.9013L1.78333 17.0407Z"
              fill="#E27625"
              stroke="#E27625"
              strokeWidth="0.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <span>Connect with MetaMask</span>
      </Button>

      {error && <div className="text-sm text-red-400 text-center">{error}</div>}
    </div>
  )
}

// Add these types to make TypeScript happy
declare global {
  interface Window {
    ethereum?: any
    solflare?: any
    solana?: {
      isPhantom?: boolean
      connect: () => Promise<{ publicKey: { toString: () => string } }>
    }
  }
}
