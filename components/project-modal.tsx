"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react"

export default function ProjectModal({ isOpen, onClose, projects, selectedProject, setSelectedProject }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Disable scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Set current index based on selected project
    if (selectedProject) {
      const index = projects.findIndex((p) => p.id === selectedProject.id)
      if (index !== -1) {
        setCurrentIndex(index)
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, selectedProject, projects])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowRight") {
        nextProject()
      } else if (e.key === "ArrowLeft") {
        prevProject()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  if (!isOpen) return null

  const project = projects[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-zinc-900 rounded-lg shadow-xl overflow-hidden animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-orange-500 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Project image */}
        <div className="relative h-64 md:h-80 w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
        </div>

        {/* Project content */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-yellow-400">{project.title}</h3>

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

          <p className="text-gray-300 mb-6">{project.description}</p>

          {/* Additional project details can be added here */}
          <p className="text-gray-300 mb-6">
            This project showcases my skills in {project.tags.join(", ")}. I focused on creating a user-friendly
            interface with responsive design and optimal performance.
          </p>

          <div className="flex gap-4 mb-6">
            <Link
              href={project.githubUrl}
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
            >
              <Github size={18} />
              View Code
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-400 transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Live Demo
            </Link>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevProject}
              className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors"
            >
              <ArrowLeft size={16} />
              Previous Project
            </button>
            <button
              onClick={nextProject}
              className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors"
            >
              Next Project
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

