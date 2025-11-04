import { whyChooseUsData } from "@/data/landing-data"

interface WhyChooseUsSectionProps {
  isVisible: boolean
}

export function WhyChooseUsSection({ isVisible }: WhyChooseUsSectionProps) {
  return (
    <section
      id="why-us"
      data-animate
      className={`py-24 px-4 transition-all duration-1000 delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ backgroundColor: "rgba(220, 20, 8, 0.01)" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-black mb-4 tracking-wide"
            style={{ color: "hsl(var(--foreground))" }}
          >
            MENGAPA CYBER START?
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto font-light">
            Kami berkomitmen untuk memberdayakan bisnis dengan solusi digital inovatif
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-8 rounded-sm border transition-all duration-500 group hover:shadow-lg ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                borderColor: "hsl(var(--border))",
                backgroundColor: index % 2 === 0 ? "rgba(178, 60, 255, 0.05)" : "transparent",
              }}
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: "hsl(var(--primary))",
                  backgroundColor: "rgba(178, 60, 255, 0.15)",
                }}
              >
                <item.icon className="w-6 h-6" style={{ color: "hsl(var(--primary))" }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "hsl(var(--foreground))" }}>
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
