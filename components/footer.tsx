import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-secondary/20 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">CyberStart</h3>
            <p className="text-foreground/60 text-sm">Membangun masa depan, satu pixel pada satu waktu.</p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-secondary transition-colors">
                  Portofolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Sumber Daya</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/blog" className="hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-secondary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary/20 pt-8 text-center text-foreground/50 text-sm">
          <p>&copy; 2025 CyberStart. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )
}
