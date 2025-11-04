"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Pemula",
      price: "$999",
      period: "/bulan",
      description: "Sempurna untuk proyek kecil",
      features: ["Hingga 3 proyek", "Dukungan dasar", "Cloud hosting", "5 anggota tim", "Laporan bulanan"],
      highlighted: false,
    },
    {
      name: "Profesional",
      price: "$2,999",
      period: "/bulan",
      description: "Untuk bisnis yang berkembang",
      features: [
        "Proyek unlimited",
        "Dukungan prioritas",
        "Analytics lanjutan",
        "20 anggota tim",
        "Laporan mingguan",
        "Akses API",
        "Integrasi kustom",
      ],
      highlighted: true,
    },
    {
      name: "Perusahaan",
      price: "Kustom",
      period: "harga",
      description: "Untuk organisasi besar",
      features: [
        "Semua fitur Pro",
        "Dukungan dedicated",
        "Opsi white-label",
        "Anggota tim unlimited",
        "Kolaborasi real-time",
        "Keamanan lanjutan",
        "Jaminan SLA",
      ],
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader title="Paket Harga" description="Pilih paket yang sempurna untuk kebutuhan bisnis Anda." />

      <main className="pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-8 rounded-none border transition-all duration-300 ${
                    plan.highlighted
                      ? "border-secondary/60 bg-card/80 shadow-lg scale-105"
                      : "border-secondary/30 bg-card hover:border-secondary/60"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="mb-4 inline-block text-xs bg-secondary/20 text-secondary px-3 py-1">
                      PALING POPULER
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-foreground/60 text-sm ml-2">{plan.period}</span>
                  </div>
                  <Button
                    className={`w-full mb-8 rounded-none ${
                      plan.highlighted
                        ? "bg-secondary/20 hover:bg-secondary/40 text-secondary border border-secondary/50"
                        : "bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50"
                    }`}
                  >
                    Mulai Sekarang
                  </Button>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check size={16} className="text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
