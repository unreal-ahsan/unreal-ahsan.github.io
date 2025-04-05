import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-500">
          AHabib
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {["Home", "About Me", "Projects", "Experience", "YouTube", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-teal-500 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

