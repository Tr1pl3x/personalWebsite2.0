"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Github, ExternalLink } from "lucide-react"

export default function ProjectModal({ isOpen, onClose, projects }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Disable scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Handle click on overlay
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-5xl bg-zinc-900 rounded-lg shadow-xl p-6 md:p-8 animate-fade-in my-8 max-h-[85vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-orange-500 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-orange-500">My Projects</h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black/30 rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-black px-2 py-1 rounded text-xs text-orange-500 border border-orange-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                <div className="flex gap-3">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="text-white hover:text-orange-500 transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </Link>
                  {project.liveUrl && project.liveUrl.trim() !== '' && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="text-white hover:text-orange-500 transition-colors flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}