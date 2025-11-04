"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { GlowingCard } from "@/components/glowing-card"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Tren Masa Depan Desain Web",
      author: "Muhammad Ferdiansyah",
      date: "15 Des 2024",
      excerpt:
        "Mengeksplorasi tren yang akan datang dalam desain web dan bagaimana mereka akan membentuk lanskap digital.",
      category: "Desain",
    },
    {
      id: 2,
      title: "Menskalakan Aplikasi SaaS Anda",
      author: "Abdul Azis Lubis",
      date: "10 Des 2024",
      excerpt: "Praktik terbaik untuk merancang sistem yang dapat diskalakan sejak hari pertama.",
      category: "Backend",
    },
    {
      id: 3,
      title: "AI dalam Pengembangan Modern",
      author: "Muhammad Ferdiansyah",
      date: "5 Des 2024",
      excerpt: "Bagaimana kecerdasan buatan merevolusi alur kerja pengembangan.",
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Prinsip Desain Mobile-First",
      author: "Antika Br. Purba",
      date: "28 Nov 2024",
      excerpt: "Mengapa pendekatan mobile-first penting dalam lanskap pengembangan saat ini.",
      category: "Desain",
    },
    {
      id: 5,
      title: "Praktik Terbaik Keamanan",
      author: "Abdul Azis Lubis",
      date: "20 Nov 2024",
      excerpt: "Langkah-langkah keamanan penting yang harus diterapkan setiap developer.",
      category: "Keamanan",
    },
    {
      id: 6,
      title: "Panduan Otomasi DevOps",
      author: "Jilan Aqilah Utomo",
      date: "15 Nov 2024",
      excerpt: "Menyederhanakan pipeline deployment Anda dengan alat DevOps modern.",
      category: "DevOps",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader
        title="Blog & Artikel"
        description="Wawasan, tips, dan cerita dari tim kami tentang inovasi digital."
      />

      <main className="pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <GlowingCard className="cursor-pointer hover:border-primary transition-colors h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-none">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-secondary transition-colors">{article.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-foreground/50 pt-4 border-t border-secondary/20">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </div>
                    </div>
                  </GlowingCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
