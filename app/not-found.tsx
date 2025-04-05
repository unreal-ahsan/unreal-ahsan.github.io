import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-teal-500 mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-8 text-gray-300">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors">
        Go Home
      </Link>
    </div>
  )
}

