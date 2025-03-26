import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-between md:hidden">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold">Portfolio</span>
                </Link>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/luizadd-06" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/luiza-dorr-darze-101784213/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Luiza</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
I am a student taking my first steps into the world of development and programming, passionate about technology and creating amazing digital experiences.                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/Luizadd-06">View My Work</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="aspect-square overflow-hidden rounded-full object-cover border-4 border-border"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
I am an undergraduate student in Information Systems at the Federal University of Bahia, where I am delving into the dynamic world of technology and innovation. Alongside my studies, I am enhancing my skills in the versatile Python programming language, exploring its applications in software development
              </p>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
Passionate about leveraging technology to drive positive change, I am eager to continue exploring new opportunities for growth and learning within the ever-evolving field of Information Technology. I have a particular interest in roles that allow me to apply my technical expertise, problem-solving skills, and business vision to create innovative solutions that make a difference.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Here are some of the technologies and tools I work with.
              </p>
              <div className="flex flex-wrap justify-center gap-4 py-8">
                <SkillBadge name="Python" />
                <SkillBadge name="PHP" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="HTML" />
                <SkillBadge name="CSS" />
                <SkillBadge name="Git" />
                <SkillBadge name="Docker" />
                <SkillBadge name="SQL" />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Check out some of my recent work.
              </p>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 py-8">
                <ProjectCard
                  title="Task Management App"
                  description="A collaborative task management application with real-time updates."
                  tags={["Python", "Bootstrap", "Javascript", "JSON"]}
                  imageUrl="/placeholder.svg?height=400&width=600"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website built with Next.js and Tailwind CSS."
                  tags={["Next.js", "Tailwind CSS", "TypeScript"]}
                  imageUrl="/placeholder.svg?height=400&width=600"
                />
              </div>
            </div>
          </di>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-[58rem] gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
              <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Feel free to reach out if have a question, or just want to connect.
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-6 px-4 md:px-6">
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <div className="grid gap-2 text-center">
                    <h3 className="text-xl font-bold">Contact Information</h3>
                    <p className="text-muted-foreground">Here's how you can reach me</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                      <Mail className="h-6 w-6" />
                      <div className="grid gap-1 text-center">
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-sm text-muted-foreground">luiza12694@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                      <Github className="h-6 w-6" />
                      <div className="grid gap-1 text-center">
                        <h4 className="font-semibold">GitHub</h4>
                        <p className="text-sm text-muted-foreground">github.com/luizadd-06</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                      <Linkedin className="h-6 w-6" />
                      <div className="grid gap-1 text-center">
                        <h4 className="font-semibold">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/luiza-dorr-darze</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Luiza Darze. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/luizadd-06" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/luiza-dorr-darze-101784213/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

