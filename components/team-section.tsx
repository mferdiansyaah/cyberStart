import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { teamMembersData } from "@/data/landing-data"

interface TeamSectionProps {
  isVisible: boolean
}

export function TeamSection({ isVisible }: TeamSectionProps) {
  return (
    <section
      id="team"
      data-animate
      className={`py-24 px-4 transition-all duration-1000 delay-400 border-t border-b ${
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
            TEMUI TIM KAMI
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto font-light">
            Tim ahli kami yang bersemangat berdedikasi untuk kesuksesan Anda
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.map((member, index) => (
            <Card
              key={index}
              className={`rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 border transform hover:-translate-y-3 group animate-glow-border ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
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
  )
}
