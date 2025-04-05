import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import YouTube from "./components/YouTube"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <YouTube />
      <Contact />
      <Footer />
    </main>
  )
}

