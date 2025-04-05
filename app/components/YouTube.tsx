import Link from "next/link"

// This is a placeholder component. In a real-world scenario, you would fetch the latest videos from the YouTube API.
const latestVideos = [
  {
    id: "video1",
    title: "Advanced Unreal Engine Techniques",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
  },
  {
    id: "video2",
    title: "Creating Realistic Industrial Simulations",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
  },
  {
    id: "video3",
    title: "Optimizing Performance in Large-Scale Projects",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Video+Thumbnail",
  },
]

export default function YouTube() {
  return (
    <section id="youtube" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest YouTube Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {latestVideos.map((video) => (
            <div key={video.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <Link
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400"
                >
                  Watch Video
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="https://www.youtube.com/@AHabib1080"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Subscribe on YouTube
          </Link>
        </div>
      </div>
    </section>
  )
}

