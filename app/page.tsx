"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Code, Palette } from "lucide-react"
import { GlowingCard } from "@/components/glowing-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 inline-block">
            <div className="text-6xl md:text-7xl font-bold mb-4 animate-neon-glow">Selamat Datang di CyberStart</div>
          </div>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Transformasikan ide Anda menjadi kenyataan dengan solusi digital terdepan yang dirancang untuk era modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-secondary/20 hover:bg-secondary/40 text-secondary border border-secondary/50 rounded-none px-8 py-6 text-lg">
                Mulai Sekarang <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 rounded-none px-8 py-6 text-lg bg-transparent"
              >
                Lihat Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 border-t border-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Apa yang Kami Lakukan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowingCard>
              <Zap className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Desain Web</h3>
              <p className="text-foreground/70">Website modern dan responsif yang memikat dan mengonversi.</p>
            </GlowingCard>
            <GlowingCard>
              <Code className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Pengembangan Aplikasi</h3>
              <p className="text-foreground/70">Aplikasi kustom yang disesuaikan dengan kebutuhan bisnis Anda.</p>
            </GlowingCard>
            <GlowingCard>
              <Palette className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Desain UI/UX</h3>
              <p className="text-foreground/70">Antarmuka intuitif yang pengguna suka untuk berinteraksi.</p>
            </GlowingCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
