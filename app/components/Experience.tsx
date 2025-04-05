const experiences = [
  {
    title: "Senior Technical Lead",
    company: "Vinacts Co., LTD",
    period: "2018 - Present",
    description:
      "Lead a team of developers in creating cutting-edge industrial simulations and game projects using Unreal Engine. Oversee technical aspects of multiple projects and mentor junior developers.",
  },
  {
    title: "Unreal Engine Developer",
    company: "GameStudio Inc.",
    period: "2015 - 2018",
    description:
      "Developed core gameplay systems and optimized performance for multiple AAA game titles. Specialized in creating realistic physics simulations and immersive environments.",
  },
  {
    title: "Junior Game Developer",
    company: "Indie Games Ltd.",
    period: "2013 - 2015",
    description:
      "Assisted in the development of mobile and PC games using Unity and Unreal Engine. Gained extensive experience in game optimization and cross-platform development.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-teal-500 mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

