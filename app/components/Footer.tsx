import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              {["Home", "About Me", "Projects", "Experience", "YouTube", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-teal-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AHabib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

