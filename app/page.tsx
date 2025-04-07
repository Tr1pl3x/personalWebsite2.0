"use client"

import { ArrowRight, ArrowUp, ExternalLink, Github, Mail, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import ProjectModal from "@/components/project-modal"

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight

      // Show button when scrolled past 50% of the page
      setShowBackToTop(scrollPosition > (pageHeight - windowHeight) * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Project data - CUSTOMIZE THIS SECTION
  const projects = [
    {
      id: 1,
      title: "Projects and Assignments",
      description:
        "My Coursework from Computer Engineering courses at UNSW",
      image: "/project/unsw.jpg?height=300&width=500&text=git",
      tags: ["C/C++", "Java","Js/Ts", "HTML/CSSS", "VHDL/Verilog", "MIPS", "Machine Learning"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "",
    },
    {
      id: 2,
      title: "Trivia Website",
      description: "A fun little trivia web app to test how well my friends know me while I secretly keep scores in the backend using google api to plot my revenge 😂",
      image: "/project/trivia.jpg?height=300&width=500&text=Portfolio",
      tags: ["React.js", "GoogleAPI", "HTML/CSSS"],
      githubUrl: "https://github.com/Tr1pl3x/trivia-ps",
      liveUrl: "https://trivia-ps.vercel.app/",
    },
    {
      id: 3,
      title: "Movie Diary (frontend)",
      description: "A simple webapp diary to keep track off my latest cinema catches and note down my honest reviews! This is just the frontend of the webapp.",
      image: "/project/movie-diary.jpg?height=300&width=500&text=Task+App",
      tags: ["React", "HTML/CSS", "API"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://movies-diary-pyae.online/",
    },
    {
      id: 4,
      title: "Movie Diary (Backend)",
      description: "This is the source code for backend server of my movie-diary webapp which is powered by monogoDB.",
      image: "/project/git.png?height=300&width=500&text=Task+App",
      tags: ["MongoDB", "Node.js ", "Backend Dev"],
      githubUrl: "https://github.com/Tr1pl3x/backend-my-movie-diary",
      liveUrl: "",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This is my portfolio website to showcase about myself, work and skills. Fun Fact: this is my second website to showcase myself :)",
      image: "/project/personal.jpg?height=300&width=500&text=Task+App",
      tags: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3-demo.com",
    },
    {
      id: 6,
      title: "Bot Alfred",
      description: "Discord bot named Alfred just like the butler of Batman, ready to service your needs!",
      image: "/project/git.png?height=300&width=500&text=Task+App",
      tags: ["Discord API", "JavaScirpt", "Python"],
      githubUrl: "https://github.com/Tr1pl3x/bot-Alfred",
      liveUrl: "",
    },
    {
      id: 7,
      title: "Random Quote Generator ",
      description: "This is a random quote generator with a twist! Every request you make will come with a cat emoji 😹",
      image: "/project/git.png?height=300&width=500&text=Task+App",
      tags: ["Javascript", "HTML/CSS", "API"],
      githubUrl: "https://github.com/Tr1pl3x/Random-Quote-Generator-",
      liveUrl: "",
    },
    
    // {
    //   id: 999,
    //   title: "Task Management App",
    //   description: "A task management application with drag-and-drop functionality and user authentication.",
    //   image: "/placeholder.svg?height=300&width=500&text=Task+App",
    //   tags: ["React", "Firebase", "Tailwind CSS"],
    //   githubUrl: "dummy link",
    //   liveUrl: "dummy link",
    // },
    
  ]

  // Timeline data - CUSTOMIZE THIS SECTION
  const timelineItems = [
    {
      year: "2026",
      title: "Bachelors in Computer Engieering",
      company: "UNSW",
      description: "Graduated with Bachlor's degree in Computer Engineering(Expected)",
    },
    {
      year: "2022",
      title: "Diploma in Engineering",
      company: "UNSW ",
      description: "Graduated with diploma in engieering",
    },
    {
      year: "2020",
      title: "UNSW Foundations",
      company: "UNSW College",
      description: "Finished pre-university program from UNSW",
    },
    {
      year: "2018",
      title: "IGCSE O Levels",
      company: "Myanmar International School Yangon",
      description: "Graduated highschool with 4A* among 6 subjects.",
    },
  ]

  // Skills data - CUSTOMIZE THIS SECTION
  const skills = [
    "C/C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git",
    "Docker",
    "VHDL/Verilog",
    "Java OOP",
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-orange-500">
            Pyae Sone Oo
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-orange-500 transition-colors">
              Projects
            </Link>
            <Link href="#timeline" className="hover:text-orange-500 transition-colors">
              Timeline
            </Link>
            <Link href="#skills" className="hover:text-orange-500 transition-colors">
              Skills
            </Link>
          </nav>
          <Link
            href="#contact"
            className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-400 transition-all duration-300 flex items-center gap-2"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Contact Me</span>
          </Link>
        </div>
      </header>

      {/* Hero Section with Animation Background */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/70"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="animate-float absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-orange-500/10 blur-xl"></div>
            <div className="animate-float-delay-1 absolute top-[30%] right-[20%] w-40 h-40 rounded-full bg-yellow-400/10 blur-xl"></div>
            <div className="animate-float-delay-2 absolute bottom-[20%] left-[30%] w-36 h-36 rounded-full bg-orange-500/10 blur-xl"></div>
            <div className="animate-float-delay-3 absolute bottom-[10%] right-[10%] w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-orange-500">Pyae Sone</span>
              <span className="animate-blink ml-1">|</span>
            </h1>
            <h2 className="hidden sm:block text-2xl md:text-4xl font-semibold mb-6 text-yellow-400">
              Penultimate Computer Engineering Student
            </h2>
            <h2 className="sm:hidden text-xl font-semibold mb-6 text-yellow-400">
            Penultimate CompENG Student
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Welcome to my portfolio! I'm Pyae Sone Oo, but my friends and peers also know me as <b>Morris</b>!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsProjectModalOpen(true)}
                className="bg-orange-500 text-black px-6 py-3 rounded-md hover:bg-orange-400 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              <Link
                href="#about"
                className="border border-white/20 px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                More About Me
                <User size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
<section id="about" className="py-20 bg-zinc-900/50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div
        className="animate-slide-up opacity-0"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-orange-500">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-orange-500">
              <Image src="/profile-pic/profilepic.jpg?height=200&width=200" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-300 mb-4  text-center md:text-justify">
            I'm from Yangon, Myanmar, and currently a penultimate-year Computer Engineering student at UNSW with a deep passion for technology and innovation. I excel at problem-solving through coding and data structures and am eager to apply my skills in real-world scenarios. I love taking on challenges that push my limits, as they drive my growth and creativity. Alongside my studies and internship search, I run a freelance photography service, offering graduations, portraits, and event photo services. Beyond technology, I find inspiration in diverse fields, always seeking new perspectives to enhance my work.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <Link
                  href="https://www.linkedin.com/in/pyae-sone-oo-779455134/"
                  target="_blank"
                  className="bg-[#0077b5] text-white px-4 py-2 rounded-md hover:bg-[#0069a0] transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/Tr1pl3x"
                  target="_blank"
                  className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                >
                  <Github size={18} />
                  GitHub
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                My <span className="text-orange-500">Projects</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-black px-2 py-1 rounded text-xs text-orange-500 border border-orange-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="text-white hover:text-orange-500 transition-colors flex items-center gap-1"
                        >
                          <Github size={16} />
                          Code
                        </Link>
                        {project.liveUrl && project.liveUrl.trim() !== '' && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            className="text-white hover:text-orange-500 transition-colors flex items-center gap-1"
                          >
                            <ExternalLink size={16} />
                            Live
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <button
                  onClick={() => setIsProjectModalOpen(true)}
                  className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-black transition-all duration-300 inline-flex items-center gap-2"
                >
                  View All Projects
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-orange-500">Journey</span>
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-orange-500/30"></div>

                {/* Timeline items */}
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:ml-auto md:pl-12 pl-10" : "md:mr-auto md:pr-12 pl-10"} ${index % 2 === 0 ? "md:text-left" : "md:text-right"} md:w-1/2`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-8px] md:left-auto md:right-[-8px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-black"></div>

                    {/* Content */}
                    <div className="bg-zinc-900 p-6 rounded-lg border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                      <span className="inline-block px-3 py-1 bg-black text-orange-500 rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-yellow-400 mb-1">{item.title}</h3>
                      <h4 className="text-white/80 mb-3">{item.company}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-orange-500">Skills</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 p-4 rounded-lg border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.05] text-center group"
                  >
                    <span className="text-lg font-medium group-hover:text-orange-500 transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Get In <span className="text-orange-500">Touch</span> Now!
              </h2>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-6 mb-8">
                <Link
                  href="https://www.facebook.com/pyaesone.oo.7/"
                  target="_blank"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="Facebook"
                >
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
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/pyae-sone-oo-779455134/"
                  target="_blank"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="LinkedIn"
                >
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
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/pyae_sone_oo.dng/"
                  target="_blank"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="Instagram"
                >
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
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/Tr1pl3x"
                  target="_blank"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="mailto:pyaesoneoo54321@gmail.com"
                  className="text-white hover:text-orange-500 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </Link>
              </div>

          
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 bg-orange-500 text-black p-3 rounded-full shadow-lg hover:bg-orange-400 transition-all duration-300 z-50 ${showBackToTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Pyae Sone Oo. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} projects={projects} />
    </main>
  )
}