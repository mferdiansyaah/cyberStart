import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberStart",
  description:
    "CyberStart: Solusi pengembangan sistem dan aplikasi kustom untuk bisnis, sekolah, dan organisasi. Inovasi digital cepat, efektif, dan terjangkau.",
  keywords:
    "CyberStart, pengembangan sistem, aplikasi kustom, pengembangan website, aplikasi mobile, UI/UX, Medan, Indonesia, startup teknologi, konsultasi gratis",
  openGraph: {
    title: "CyberStart",
    description:
      "CyberStart: Solusi pengembangan sistem dan aplikasi kustom untuk bisnis, sekolah, dan organisasi. Inovasi digital cepat, efektif, dan terjangkau.",
    url: "https://cyberstart.vercel.app",
    siteName: "CyberStart",
    images: [
      {
        url: "https://cyberstart.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CyberStart - Transformasi Digital Anda",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberStart",
    description: "CyberStart: Solusi pengembangan sistem dan aplikasi kustom untuk bisnis, sekolah, dan organisasi.",
    creator: "@cyberstart",
    images: ["https://cyberstart.vercel.app/twitter-image.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="cyberpunk">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
