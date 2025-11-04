"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0)

  const faqs = [
    {
      question: "Layanan apa yang Anda tawarkan?",
      answer:
        "Kami menawarkan solusi digital komprehensif termasuk desain web, pengembangan aplikasi, desain UI/UX, arsitektur sistem, solusi cloud, dan layanan konsultasi.",
    },
    {
      question: "Berapa lama waktu yang diperlukan untuk proyek tipikal?",
      answer:
        "Timeline proyek bervariasi berdasarkan kompleksitas dan ruang lingkup. Website sederhana mungkin memakan waktu 4-8 minggu, sementara aplikasi kompleks bisa memakan waktu 3-6 bulan atau lebih. Kami memberikan timeline terperinci setelah fase penemuan.",
    },
    {
      question: "Apa proses pengembangan Anda?",
      answer:
        "Proses kami mencakup: Penemuan & Perencanaan, Desain & Prototyping, Pengembangan & Implementasi, Pengujian & QA, Deployment, dan Dukungan Pasca-Peluncuran. Kami melibatkan Anda di setiap langkah.",
    },
    {
      question: "Apakah Anda menyediakan dukungan berkelanjutan?",
      answer:
        "Ya! Kami menawarkan berbagai paket dukungan termasuk pemeliharaan, pembaruan, patch keamanan, dan optimasi performa. Paket dukungan kustom tersedia sesuai kebutuhan Anda.",
    },
    {
      question: "Teknologi apa yang Anda gunakan?",
      answer:
        "Kami bekerja dengan teknologi modern dan standar industri termasuk React, Next.js, Node.js, Python, platform cloud (AWS, Azure, GCP), dan berbagai database dan tools lainnya.",
    },
    {
      question: "Berapa biaya proyek?",
      answer:
        "Harga tergantung pada kompleksitas proyek, ruang lingkup, dan timeline. Kami menawarkan model harga fleksibel termasuk proyek dengan harga tetap, berbasis waktu, dan pengaturan retainer.",
    },
    {
      question: "Bisakah Anda bekerja dengan kode yang sudah ada?",
      answer:
        "Tentu saja. Kami dapat melakukan audit, refaktor, dan meningkatkan basis kode yang ada. Kami juga memberikan konsultasi tentang modernisasi sistem legacy.",
    },
    {
      question: "Apakah Anda menandatangani NDA?",
      answer:
        "Ya, kami menganggap kerahasiaan dengan serius dan senang menandatangani NDA untuk semua proyek untuk melindungi kekayaan intelektual Anda.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader
        title="Pertanyaan yang Sering Diajukan"
        description="Temukan jawaban untuk pertanyaan umum tentang layanan dan proses kami."
      />

      <main className="pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-secondary/30 hover:border-secondary/60 bg-card rounded-none transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenId(openId === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-left">{faq.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-secondary transition-transform duration-300 ${
                        openId === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openId === index && (
                    <div className="px-6 pb-4 border-t border-secondary/20 text-foreground/70">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
