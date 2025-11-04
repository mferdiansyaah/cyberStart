"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { teamMembersData } from "@/data/landing-data"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader
        title="Tentang CyberStart"
        description="Temukan kisah, misi, dan tim di balik inovasi digital kami."
      />

      <main className="pb-20">
        <section className="py-20 border-b border-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
                <p className="text-foreground/70 mb-4">
                  Kami percaya dalam memberdayakan bisnis melalui solusi digital yang inovatif. Misi kami adalah
                  mengubah ide-ide kompleks menjadi produk yang elegan dan fungsional yang mendorong hasil nyata.
                </p>
                <p className="text-foreground/70">
                  Didirikan pada tahun 2020, CyberStart telah berada di garis depan inovasi digital, membantu startup
                  dan perusahaan mencapai tujuan teknologi mereka.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
                <p className="text-foreground/70 mb-4">
                  Kami membayangkan dunia di mana teknologi terintegrasi dengan mulus dengan kreativitas manusia,
                  memungkinkan bisnis untuk berkembang lebih cepat dan menjangkau lebih jauh dari sebelumnya.
                </p>
                <p className="text-foreground/70">
                  Setiap proyek yang kami kerjakan adalah langkah menuju visi ini, menggabungkan teknologi terdepan
                  dengan desain yang bijaksana.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Tim Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembersData.map((member) => (
                <Card
                  key={member.name}
                  className="rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 border transform hover:-translate-y-3 group animate-glow-border"
                  style={{
                    borderColor: "hsl(var(--border))",
                    backgroundColor: "hsl(var(--card))",
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-24 h-24 rounded-sm mx-auto mb-4 overflow-hidden border-2 transition-all duration-300 group-hover:border-primary"
                      style={{ borderColor: "hsl(var(--border))" }}
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`Foto ${member.name}, ${member.role}`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: "hsl(var(--primary))" }}>
                      {member.role}
                    </p>
                    <p className="text-secondary text-sm leading-relaxed font-light">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
