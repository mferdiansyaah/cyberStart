import type React from "react"
interface GlowingCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowingCard({ children, className = "" }: GlowingCardProps) {
  return (
    <div
      className={`p-6 rounded-none border border-secondary/30 hover:border-secondary/60 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg group ${className}`}
    >
      {children}
    </div>
  )
}
