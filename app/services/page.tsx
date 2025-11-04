"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { GlowingCard } from "@/components/glowing-card"
import { CheckCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Desain & Pengembangan Web",
      description: "Website responsif dan modern yang dibangun dengan teknologi terkini.",
      features: ["Desain Responsif", "Dioptimalkan SEO", "Pemuatan Cepat", "Mobile First"],
    },
    {
      title: "Pengembangan Aplikasi Mobile",
      description: "Aplikasi native dan cross-platform untuk iOS dan Android.",
      features: ["Performa Native", "Multi-Platform", "Dukungan Offline", "Sinkronisasi Cloud"],
    },
    {
      title: "Desain UI/UX",
      description: "Desain berpusat pada pengguna yang mendorong engagement dan konversi.",
      features: ["Riset Pengguna", "Wireframing", "Prototyping", "Pengujian Pengguna"],
    },
    {
      title: "Arsitektur Sistem",
      description: "Sistem backend yang dapat diskalakan dirancang untuk pertumbuhan.",
      features: ["Microservices", "Desain Database", "Pengembangan API", "Optimasi Performa"],
    },
    {
      title: "Solusi Cloud",
      description: "Setup dan optimasi infrastruktur untuk keandalan maksimal.",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipeline", "Monitoring 24/7"],
    },
    {
      title: "Konsultasi & Strategi",
      description: "Panduan ahli untuk perjalanan transformasi digital Anda.",
      features: ["Audit Teknologi", "Perencanaan Roadmap", "Pelatihan Tim", "Praktik Terbaik"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader
        title="Layanan Kami"
        description="Solusi digital komprehensif yang disesuaikan dengan tujuan bisnis Anda."
      />

      <main className="pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <GlowingCard key={service.title}>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
