"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { GlowingCard } from "@/components/glowing-card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Platform TechFlow",
      category: "Aplikasi Web",
      description: "Platform kolaborasi real-time untuk tim kreatif.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/platform-kolaborasi-teknologi-ui-interface.jpg",
    },
    {
      title: "Dashboard DataViz",
      category: "Analytics Data",
      description: "Dashboard analytics lanjutan dengan visualisasi data real-time.",
      tech: ["Next.js", "Python", "PostgreSQL"],
      image: "/dashboard-analytics-grafik-chart.jpg",
    },
    {
      title: "CloudSync Mobile",
      category: "Aplikasi Mobile",
      description: "Aplikasi sinkronisasi file cross-platform.",
      tech: ["React Native", "Firebase", "AWS"],
      image: "/mobile-app-interface-sinkronisasi-cloud.jpg",
    },
    {
      title: "SecureVault",
      category: "Software Keamanan",
      description: "Sistem manajemen enkripsi dan password tingkat enterprise.",
      tech: ["Electron", "Rust", "Cryptography"],
      image: "/security-encryption-vault-digital.jpg",
    },
    {
      title: "Platform E-Commerce",
      category: "E-Commerce",
      description: "Solusi e-commerce full-stack dengan integrasi pembayaran.",
      tech: ["Next.js", "Stripe", "Shopify API"],
      image: "/ecommerce-shopping-online-store.jpg",
    },
    {
      title: "Chat AI Assistant",
      category: "AI/ML",
      description: "Chatbot cerdas dengan pemrosesan bahasa alami.",
      tech: ["Python", "TensorFlow", "WebSocket"],
      image: "/ai-chatbot-artificial-intelligence.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader title="Portfolio Kami" description="Pameran proyek digital terbaru dan terbaik kami." />

      <main className="pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <GlowingCard key={project.title} className="flex flex-col overflow-hidden">
                  <div className="w-full h-40 bg-secondary/10 rounded-sm mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-secondary text-xs mb-3">{project.category}</p>
                  <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-none">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-secondary hover:text-primary text-sm flex items-center gap-1 transition-colors"
                  >
                    Lihat Proyek <ExternalLink size={14} />
                  </a>
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
