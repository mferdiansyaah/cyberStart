interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 border-b border-secondary/20 mt-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{title}</h1>
        <p className="text-lg text-foreground/70 max-w-2xl">{description}</p>
      </div>
    </div>
  )
}
