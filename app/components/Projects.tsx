import Link from "next/link"

const projects = [
  {
    title: "Industrial Simulation Project",
    description:
      "A high-fidelity industrial simulation created with Unreal Engine, showcasing complex machinery and realistic physics.",
    youtubeLink: "https://www.youtube.com/watch?v=example1",
    tags: ["Unreal Engine", "Simulation", "Physics"],
  },
  {
    title: "Interactive VR Experience",
    description:
      "An immersive VR experience developed in Unreal Engine, pushing the boundaries of virtual reality interaction.",
    youtubeLink: "https://www.youtube.com/watch?v=example2",
    tags: ["Unreal Engine", "VR", "Interaction Design"],
  },
  {
    title: "Advanced Game Mechanics Demo",
    description:
      "A demonstration of cutting-edge game mechanics implemented in Unreal Engine, showcasing innovative gameplay features.",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
    tags: ["Unreal Engine", "Game Mechanics", "Innovation"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Link
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors mb-4"
                >
                  View on YouTube
                </Link>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-teal-500 text-white text-sm font-semibold px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

