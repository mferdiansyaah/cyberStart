"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />

      <main className="pt-40 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[150px] font-bold mb-4 text-secondary animate-neon-glow">404</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto mb-8"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-md mx-auto">
            Sorry, it looks like you've wandered into the digital void. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-secondary/20 hover:bg-secondary/40 text-secondary border border-secondary/50 rounded-none px-8 py-6 text-lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 rounded-none px-8 py-6 text-lg bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
