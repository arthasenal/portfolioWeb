import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Software Engineering Student
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I build accessible, pixel-perfect digital experiences for the web. Passionate about creating innovative
              solutions that blend thoughtful design with robust engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=wckd64@gmail.com&su=Let's Connect!&body=Hi Linus,%0D%0A%0D%0AI'd like to connect with you regarding..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="/CVLinus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/arthasenal"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/linus-arthasena-putranto-048b842b9"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=wckd64@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square max-w-md mx-auto">
            <img
              src="/ProfilePicture"
              alt="Professional headshot"
              className="w-full h-full object-cover rounded-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
