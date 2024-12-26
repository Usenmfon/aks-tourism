import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://example.com/akwa-ibom-aerial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
            Welcome to Akwa Ibom
            <span className="block mt-2 text-3xl sm:text-4xl font-normal text-gray-200">
              Land of Promise and Hospitality
            </span>
          </h1>
          <div className="flex gap-6 justify-center mt-12">
            <a
              href="/destinations"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              Explore Places
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most beautiful and exciting places in Akwa Ibom State
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Ibom Plaza",
                image: "/ibom-plaza.jpg",
                description: "The Heart of Uyo",
                highlight: "City Center",
              },
              {
                name: "Ibeno Beach",
                image: "/ibeno-beach.jpg",
                description: "Pristine Atlantic Coastline",
                highlight: "Natural Wonder",
              },
              {
                name: "Unity Park",
                image: "/unity-park.jpg",
                description: "Urban Recreation",
                highlight: "Family Fun",
              },
            ].map((destination) => (
              <div
                key={destination.name}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-gray-200 mb-3">{destination.description}</p>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
                      {destination.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experience Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/akwa-ibom-culture.jpg"
                alt="Akwa Ibom Cultural Experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Experience Rich Cultural Heritage
              </h2>
              <p className="text-gray-600 text-lg">
                Immerse yourself in the vibrant culture of Akwa Ibom, from traditional festivals 
                to exquisite cuisine and warm hospitality.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Traditional Festivals",
                    description: "Experience colorful cultural celebrations year-round",
                    icon: "🎭",
                  },
                  {
                    title: "Local Cuisine",
                    description: "Taste authentic Akwa Ibom dishes and delicacies",
                    icon: "🍲",
                  },
                  {
                    title: "Arts & Crafts",
                    description: "Discover local artisans and traditional crafts",
                    icon: "🎨",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/cultural-experiences"
                className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Explore Culture
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
