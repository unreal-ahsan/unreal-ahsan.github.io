"use client"

import { useState } from "react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/ahabib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/ahabib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400"
            >
              GitHub
            </Link>
            <Link
              href="https://www.youtube.com/@AHabib1080"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

