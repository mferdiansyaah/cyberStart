"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />
      <PageHeader
        title="Hubungi Kami"
        description="Punya proyek yang menarik? Mari kita bicara tentang bagaimana kami dapat membantu Anda."
      />

      <main className="pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-8">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Email</p>
                      <a
                        href="mailto:cyberstart@gmail.com"
                        className="text-foreground/70 hover:text-secondary transition-colors"
                      >
                        cyberstart@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Telepon</p>
                      <a href="tel:+62811989902" className="text-foreground/70 hover:text-secondary transition-colors">
                        +62 811-989-902
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold">Lokasi</p>
                      <p className="text-foreground/70">
                        Jl. Kapten Muchtar Basri, Universitas Muhammadiyah Sumatera Utara
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-bold mb-6">Ikuti Kami</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-secondary hover:text-primary transition-colors p-2 border border-secondary/30 hover:border-secondary/60 rounded-none"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-secondary hover:text-primary transition-colors p-2 border border-secondary/30 hover:border-secondary/60 rounded-none"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-secondary hover:text-primary transition-colors p-2 border border-secondary/30 hover:border-secondary/60 rounded-none"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8">Kirim Pesan ke Kami</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-secondary/30 hover:border-secondary/60 text-foreground placeholder-foreground/40 rounded-none focus:outline-none focus:border-secondary/80 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Anda"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-secondary/30 hover:border-secondary/60 text-foreground placeholder-foreground/40 rounded-none focus:outline-none focus:border-secondary/80 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Pesan Anda"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-card border border-secondary/30 hover:border-secondary/60 text-foreground placeholder-foreground/40 rounded-none focus:outline-none focus:border-secondary/80 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <Button className="w-full bg-secondary/20 hover:bg-secondary/40 text-secondary border border-secondary/50 rounded-none py-3">
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
