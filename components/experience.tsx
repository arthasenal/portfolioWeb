import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "ICPC Competiton",
    company: "ICPC",
    period: "2024",
    description:
      "Competed in the International Collegiate Programming Contest 2024, collaborating with teammates to solve complex algorithmic and mathematical problems under time constraints. Demonstrated strong skills in algorithm design, data structures, and critical problem-solving while working effectively as a team.",
    technologies: ["C","Data Structures"],
  },
  {
    title: "Project Manager",
    company: "Brewora Coffee",
    period: "2025",
    description:
      "Developed a responsive coffee shop website called Brewora Coffee, focusing on modern UI/UX design and seamless user experience. Implemented interactive features, optimized performance, and ensured cross-device compatibility to enhance customer engagement.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Experience</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                  </div>

                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
