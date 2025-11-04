"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { GlowingCard } from "@/components/glowing-card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Emma Wilson",
      company: "TechFlow Inc",
      role: "CEO",
      text: "CyberStart mengubah seluruh kehadiran digital kami. Keahlian dan dedikasi tim sangat luar biasa.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      company: "DataViz Solutions",
      role: "Founder",
      text: "Bekerja dengan CyberStart adalah game-changer. Mereka memberikan persis apa yang kami butuhkan dan lebih.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      company: "CloudSync Corp",
      role: "Product Lead",
      text: "Kualitas luar biasa, tim profesional, dan hasil yang istimewa. Sangat merekomendasikan!",
      rating: 5,
    },
    {
      name: "Robert Martinez",
      company: "SecureVault Systems",
      role: "CTO",
      text: "Keahlian teknis dan perhatian terhadap detail sangat mengesankan. Pengalaman kolaborasi yang benar-benar bermanfaat.",
      rating: 5,
    },
    {
      name: "Sarah Thompson",
      company: "E-Commerce Hub",
      role: "Founder",
      text: "Dari konsep hingga peluncuran, CyberStart memberikan hasil yang melampaui ekspektasi. Tim yang luar biasa!",
      rating: 5,
    },
    {
      name: "David Kumar",
      company: "AI Innovation Labs",
      role: "Director",
      text: "Pendekatan mereka terhadap pemecahan masalah dan inovasi sangat segar. Tidak sabar untuk bekerja sama lagi.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader
        title="Testimoni Klien"
        description="Dengarkan apa yang dikatakan klien puas kami tentang bekerja dengan kami."
      />

      <main className="pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <GlowingCard key={testimonial.name}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground/70 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="border-t border-secondary/20 pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-secondary">{testimonial.role}</p>
                    <p className="text-xs text-foreground/60">{testimonial.company}</p>
                  </div>
                </GlowingCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
