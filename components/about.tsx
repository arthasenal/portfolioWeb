export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my degree in Software Engineering, I'm passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies
              at the intersection of design and development, creating experiences that not only look great but are
              meticulously built for performance and usability.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in modern web technologies and have experience building full-stack applications using
              Next.js, HTML, and various backend technologies. I'm always eager to learn new technologies and take
              on challenging projects that push my skills forward.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              working on personal projects that solve real-world problems.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Bachelor of Software Engineering</p>
                <p className="text-muted-foreground">Binus University</p>
              
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "UI/UX Design", "Open Source", "Machine Learning", "Mobile Development"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
