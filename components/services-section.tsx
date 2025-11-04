import { Card, CardContent } from "@/components/ui/card"
import { servicesData } from "@/data/landing-data"

interface ServicesSectionProps {
  isVisible: boolean
}

export function ServicesSection({ isVisible }: ServicesSectionProps) {
  return (
    <section
      id="services"
      data-animate
      className={`py-24 px-4 transition-all duration-1000 delay-200 border-t border-b relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ borderColor: "hsl(var(--border))", backgroundColor: "rgba(220, 20, 8, 0.02)" }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-black mb-4 tracking-wide"
            style={{ color: "hsl(var(--foreground))" }}
          >
            LAYANAN KAMI
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto font-light">
            Solusi digital komprehensif yang dirancang untuk kesuksesan bisnis Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className={`rounded-sm border shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group animate-glow-border ${
                isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
            >
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-sm mx-auto mb-6 flex items-center justify-center border shadow-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: "hsl(var(--primary))",
                    backgroundColor: "rgba(178, 60, 255, 0.1)",
                  }}
                >
                  <service.icon
                    className="w-8 h-8 transition-all duration-300"
                    style={{ color: "hsl(var(--primary))" }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
                  {service.title}
                </h3>
                <p className="text-secondary leading-relaxed font-light">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
