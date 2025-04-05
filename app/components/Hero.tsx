import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm AHabib</h1>
        <h2 className="text-2xl md:text-3xl text-teal-500 mb-6">Senior Technical Lead and Unreal Engine Developer</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Specializing in creating industrial simulations and delivering unforgettable player experiences.
        </p>
        <Link
          href="#projects"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          View My Work
        </Link>
      </div>
    </section>
  )
}

