import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { contactInfoData } from "@/data/landing-data"

interface ContactSectionProps {
  isVisible: boolean
}

export function ContactSection({ isVisible }: ContactSectionProps) {
  return (
    <section
      id="contact"
      data-animate
      className={`py-24 px-4 transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "rgba(220, 20, 8, 0.01)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-black mb-4 tracking-wide"
            style={{ color: "hsl(var(--foreground))" }}
          >
            KONSULTASI GRATIS
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto font-light">
            Siap memulai transformasi digital? Ceritakan tentang proyek Anda dan dapatkan saran ahli dari tim kami
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfoData.map((info, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: "hsl(var(--primary))",
                    backgroundColor: "rgba(178, 60, 255, 0.15)",
                  }}
                >
                  <info.icon className="w-6 h-6" style={{ color: "hsl(var(--primary))" }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                    {info.title}
                  </h3>
                  <p className="text-secondary font-light">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Contact Form */}
          <Card
            className="rounded-sm shadow-lg border"
            style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--card))" }}
          >
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      Nama
                    </label>
                    <Input
                      id="name"
                      className="rounded-sm border"
                      style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: "hsl(var(--foreground))" }}
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="rounded-sm border"
                      style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    className="rounded-sm border"
                    style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}
                    placeholder="Pertanyaan proyek"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    className="rounded-sm border min-h-[120px]"
                    style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--background))" }}
                    placeholder="Jelaskan proyek Anda, tujuan, dan persyaratan khusus..."
                  />
                </div>
                <Button
                  className="w-full rounded-sm py-6 text-lg font-bold border-2 transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderColor: "hsl(var(--secondary))",
                    backgroundColor: "transparent",
                    color: "hsl(var(--secondary))",
                  }}
                >
                  Dapatkan Konsultasi Gratis
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
