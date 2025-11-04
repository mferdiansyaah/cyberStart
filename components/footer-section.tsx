import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function FooterSection() {
  return (
    <footer
      className="py-12 px-4 text-white border-t"
      style={{ borderColor: "hsl(var(--border))", backgroundColor: "hsl(var(--card))" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-black mb-2 animate-neon-glow" style={{ color: "hsl(var(--primary))" }}>
              Cyber Start
            </div>
            <p style={{ color: "hsl(var(--secondary))" }} className="font-light">
              © 2025 Cyber Start. Semua hak dilindungi undang-undang.
            </p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((social) => (
              <Link
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-sm border flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                style={{ borderColor: "hsl(var(--border))" }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" style={{ color: "hsl(var(--secondary))" }} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
