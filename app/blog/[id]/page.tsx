import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPosts = {
  1: {
    title: "Tren Masa Depan Desain Web",
    author: "Muhammad Ferdiansyah",
    date: "15 Des 2024",
    category: "Desain",
    content: `
      <h2>Pendahuluan</h2>
      <p>Desain web terus berkembang dengan cepat. Dalam artikel ini, kami akan menjelajahi tren terbaru yang akan membentuk masa depan desain web dan memberikan nilai lebih kepada pengguna.</p>
      
      <h2>1. Desain Responsif yang Sempurna</h2>
      <p>Desain responsif bukan lagi pilihan tetapi keharusan. Dengan mayoritas pengguna mengakses web dari perangkat mobile, desain yang tidak responsif akan kehilangan audiens yang signifikan. Tren menunjukkan bahwa desainer sekarang fokus pada pengalaman yang mulus di semua perangkat.</p>
      
      <h2>2. Dark Mode Sebagai Standar</h2>
      <p>Dark mode tidak lagi hanya fitur bonus. Banyak website sekarang menawarkan dark mode sebagai pilihan default. Ini tidak hanya mengurangi kelelahan mata tetapi juga menghemat baterai pada perangkat modern.</p>
      
      <h2>3. Animasi dan Interaksi yang Halus</h2>
      <p>Animasi mikro dan transisi yang halus meningkatkan pengalaman pengguna secara keseluruhan. Gerakan yang tepat dapat memandu pengguna melalui alur kerja dengan lebih intuitif.</p>
      
      <h2>4. Typography yang Berani</h2>
      <p>Typography besar dan berani menjadi tren yang kuat. Huruf yang ekspresif dapat menyampaikan karakter brand lebih baik daripada hanya mengandalkan warna dan bentuk.</p>
      
      <h2>Kesimpulan</h2>
      <p>Masa depan desain web terletak pada keseimbangan antara estetika dan fungsionalitas. Desainer yang dapat menggabungkan kedua aspek ini akan menciptakan pengalaman digital yang tak terlupakan.</p>
    `,
  },
  2: {
    title: "Menskalakan Aplikasi SaaS Anda",
    author: "Abdul Azis Lubis",
    date: "10 Des 2024",
    category: "Backend",
    content: `
      <h2>Pengenalan</h2>
      <p>Membangun aplikasi SaaS yang dapat diskalakan memerlukan perencanaan yang matang dari awal. Dalam panduan ini, kami akan membagikan praktik terbaik untuk memastikan aplikasi Anda tumbuh bersama bisnis Anda.</p>
      
      <h2>1. Arsitektur Microservices</h2>
      <p>Daripada monolitik, pertimbangkan arsitektur microservices yang memungkinkan skala komponen secara independen. Ini memberikan fleksibilitas yang lebih besar dan memudahkan pemeliharaan.</p>
      
      <h2>2. Database Optimization</h2>
      <p>Optimasi database adalah kunci. Gunakan indexing dengan bijak, partisi data besar, dan pertimbangkan read replicas untuk menangani beban query yang tinggi.</p>
      
      <h2>3. Caching Strategy</h2>
      <p>Implementasikan strategi caching yang efektif menggunakan Redis atau Memcached. Ini dapat mengurangi beban database secara signifikan dan meningkatkan kecepatan aplikasi.</p>
      
      <h2>4. Load Balancing</h2>
      <p>Load balancer mendistribusikan traffic ke multiple server instances. Ini memastikan tidak ada single point of failure dan meningkatkan availability aplikasi.</p>
      
      <h2>Kesimpulan</h2>
      <p>Skalabilitas harus dipikirkan sejak awal development. Dengan mengikuti praktik terbaik ini, aplikasi SaaS Anda siap untuk pertumbuhan eksponensial.</p>
    `,
  },
  3: {
    title: "AI dalam Pengembangan Modern",
    author: "Muhammad Ferdiansyah",
    date: "5 Des 2024",
    category: "AI/ML",
    content: `
      <h2>Revolusi AI</h2>
      <p>Artificial Intelligence telah menjadi bagian integral dari pengembangan software modern. Dari code generation hingga testing automation, AI mengubah cara kami bekerja.</p>
      
      <h2>1. Code Generation dengan AI</h2>
      <p>Tools seperti GitHub Copilot dan ChatGPT dapat menghasilkan kode berkualitas tinggi berdasarkan deskripsi natural language. Ini mempercepat development dan mengurangi beban tulis-menulis kode repetitif.</p>
      
      <h2>2. Automated Testing</h2>
      <p>AI dapat mengotomatisasi penulisan test cases berdasarkan kode aplikasi. Ini meningkatkan coverage dan mengurangi beban QA manual.</p>
      
      <h2>3. Performance Optimization</h2>
      <p>Machine learning models dapat menganalisis performa aplikasi dan memberikan rekomendasi optimasi. Ini membantu mengidentifikasi bottleneck dengan cepat.</p>
      
      <h2>4. Security Analysis</h2>
      <p>AI tools dapat menganalisis kode untuk mendeteksi vulnerability dan security issues sebelum deployment. Ini meningkatkan keamanan aplikasi secara proaktif.</p>
      
      <h2>Kesimpulan</h2>
      <p>AI bukan pengganti developer, tetapi alat yang membuat kami lebih produktif dan efisien. Developer yang memanfaatkan AI akan memiliki keunggulan kompetitif di industri.</p>
    `,
  },
  4: {
    title: "Prinsip Desain Mobile-First",
    author: "Antika Br. Purba",
    date: "28 Nov 2024",
    category: "Desain",
    content: `
      <h2>Mengapa Mobile-First?</h2>
      <p>Lebih dari 60% pengguna internet mengakses web dari perangkat mobile. Pendekatan mobile-first memastikan pengalaman optimal untuk mayoritas pengguna.</p>
      
      <h2>1. Constraint Sebagai Peluang</h2>
      <p>Layar mobile yang kecil memaksa kami untuk fokus pada elemen yang benar-benar penting. Ini menghasilkan desain yang lebih clean dan purposeful.</p>
      
      <h2>2. Touch-Friendly Interface</h2>
      <p>Design untuk touch bukan hanya tentang ukuran tombol. Pertimbangkan gesture intuitif, spacing yang tepat, dan feedback visual yang jelas untuk interaksi mobile.</p>
      
      <h2>3. Performance First</h2>
      <p>Mobile users sering memiliki koneksi yang lebih lambat. Optimasi performa adalah prioritas utama dalam mobile-first design, termasuk optimasi image dan lazy loading.</p>
      
      <h2>4. Progressive Enhancement</h2>
      <p>Mulai dengan functionality dasar untuk mobile, kemudian tambahkan fitur advanced untuk desktop. Ini memastikan setiap pengguna mendapat pengalaman yang baik.</p>
      
      <h2>Kesimpulan</h2>
      <p>Mobile-first bukan hanya trend tetapi strategi yang sensibel untuk mencapai audience yang lebih luas dan memberikan pengalaman yang lebih baik.</p>
    `,
  },
  5: {
    title: "Praktik Terbaik Keamanan",
    author: "Abdul Azis Lubis",
    date: "20 Nov 2024",
    category: "Keamanan",
    content: `
      <h2>Pentingnya Security</h2>
      <p>Keamanan aplikasi adalah tanggung jawab setiap developer. Dalam era digital ini, serangan cyber semakin canggih dan frekuent. Kami harus selalu waspada.</p>
      
      <h2>1. Input Validation</h2>
      <p>Selalu validasi input dari user. Jangan pernah percaya data yang datang dari client. Implementasikan whitelist validation dan sanitize semua input.</p>
      
      <h2>2. SQL Injection Prevention</h2>
      <p>Gunakan prepared statements dan parameterized queries untuk mencegah SQL injection. Jangan pernah concatenate user input langsung ke query SQL.</p>
      
      <h2>3. Authentication & Authorization</h2>
      <p>Implementasikan authentication yang kuat dengan hashing password yang aman. Authorization harus dicheck di backend, bukan bergantung pada frontend validation.</p>
      
      <h2>4. HTTPS dan Encryption</h2>
      <p>Selalu gunakan HTTPS untuk enkripsi data dalam transit. Untuk data sensitive yang disimpan, gunakan encryption algorithm yang kuat.</p>
      
      <h2>5. Regular Updates</h2>
      <p>Keep dependencies dan libraries tetap updated. Banyak vulnerability ditemukan dan di-patch di library populer.</p>
      
      <h2>Kesimpulan</h2>
      <p>Security harus menjadi bagian dari DNA development process, bukan afterthought. Dengan mengikuti praktik terbaik ini, kita dapat membangun aplikasi yang lebih aman.</p>
    `,
  },
  6: {
    title: "Panduan Otomasi DevOps",
    author: "Jilan Aqilah Utomo",
    date: "15 Nov 2024",
    category: "DevOps",
    content: `
      <h2>Transformasi Digital dengan DevOps</h2>
      <p>DevOps mengubah cara kami deploy dan maintain aplikasi. Dengan automation yang tepat, kami dapat deploy changes lebih cepat dan dengan confidence yang lebih tinggi.</p>
      
      <h2>1. CI/CD Pipeline</h2>
      <p>Continuous Integration dan Continuous Deployment adalah foundation DevOps. Tools seperti Jenkins, GitLab CI, dan GitHub Actions mengotomatisasi testing dan deployment.</p>
      
      <h2>2. Infrastructure as Code</h2>
      <p>Kelola infrastruktur menggunakan code, bukan manual configuration. Tools seperti Terraform dan Ansible memudahkan version control dan reproducibility.</p>
      
      <h2>3. Monitoring dan Logging</h2>
      <p>Visibility adalah kunci. Implementasikan comprehensive monitoring dan centralized logging menggunakan tools seperti Prometheus, ELK Stack, atau Datadog.</p>
      
      <h2>4. Containerization</h2>
      <p>Docker containers memastikan consistency antara development dan production environments. Ini mengurangi "works on my machine" problem secara signifikan.</p>
      
      <h2>5. Orchestration</h2>
      <p>Kubernetes menyediakan platform untuk orchestrate containers di scale. Meskipun kompleks, Kubernetes memberikan reliability dan scalability yang powerful.</p>
      
      <h2>Kesimpulan</h2>
      <p>DevOps adalah mindset dan practice yang membuat teams lebih efficient dan applications lebih reliable. Investasi dalam automation DevOps akan membayar dengan cepat.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
        <Navbar />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Post tidak ditemukan</h1>
            <Link href="/blog" className="text-secondary hover:text-primary">
              Kembali ke Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground cyberpunk-grid">
      <Navbar />

      <main className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Kembali ke Blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-none">{post.category}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-balance">{post.title}</h1>
              <div className="flex items-center gap-6 text-sm text-foreground/70 pb-4 border-b border-secondary/20">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {post.date}
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <div
                className="text-foreground/80 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-primary">')
                    .replace(/<p>/g, '<p class="text-foreground/80 text-base leading-relaxed">'),
                }}
              />
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-secondary/20">
            <Link href="/blog" className="text-secondary hover:text-primary transition-colors">
              ← Lihat artikel lainnya
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
