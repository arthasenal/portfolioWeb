import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Coffee Website",
    description:
      "Built a personal project called Brewora Coffee, a web platform centered on coffee culture. Took full responsibility for identifying user requirements through research,  and bringing the concept to life with a fully functional front-end developed in HTML, CSS, and JavaScript. The project emphasizes usability and responsive design.",
    image: "/brewora.jpeg",
    technologies: ["Next.js", "javaScript", "HTML", "CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Kidneys Detector",
    description:
      "Designed and implemented a machine learning project in Python that leverages CNN modeling to detect kidney abnormalities, including kidney stones and other diseases. This project highlights the use of deep learning in supporting early diagnosis and medical decision-making",
    image: "/Kidney.jpeg",
    technologies: ["HTML", "Python", "Pandas", "JavaScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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
