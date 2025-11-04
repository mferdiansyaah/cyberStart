import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  isVisible: boolean
}

export function HeroSection({ isVisible }: HeroSectionProps) {
  return (
    <section
      id="hero"
      data-animate
      className={`pt-32 pb-20 px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h1
          className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight"
          style={{ color: "hsl(var(--foreground))" }}
        >
          Kami Merancang,{" "}
          <span className="animate-neon-glow" style={{ color: "hsl(var(--primary))" }}>
            Anda Berkembang
          </span>
          .
        </h1>
        <p className="text-lg md:text-xl text-secondary mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          Solusi digital futuristik dirancang untuk membawa bisnis Anda ke level berikutnya dengan teknologi terdepan
        </p>
        <Button
          size="lg"
          className="rounded-sm px-10 py-7 text-lg font-bold border-2 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
          style={{
            borderColor: "hsl(var(--secondary))",
            backgroundColor: "transparent",
            color: "hsl(var(--secondary))",
          }}
        >
          <Link href="#contact" className="text-secondary no-underline">
            Konsultasi Gratis
          </Link>
        </Button>
      </div>
    </section>
  )
}
