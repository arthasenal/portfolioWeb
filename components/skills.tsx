const skillCategories = [
  {
    title: "Frontend",
    skills: ["JavaScript", "React", "Next.js","HTML5"],
  },
  {
    title: "Backend",
    skills: ["Python","Java"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git","Vercel", "Figma", "VS Code", "CI/CD"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
    
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
