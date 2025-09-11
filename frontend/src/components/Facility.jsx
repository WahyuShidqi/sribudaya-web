//

import React, { useState, useEffect } from "react";

const facilities = [
  {
    title: "Kolam Renang Outdoor",
    description:
      "Berendam dalam kemewahan kolam renang infinity yang menghadirkan panorama alam Aceh yang memukau. Rasakan sensasi berenang layaknya menyatu dengan cakrawala, dikelilingi taman tropis yang asri dan udara segar pegunungan.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    category: "Recreation",
  },
  {
    title: "Wi-Fi High Speed & Complimentary",
    description:
      "Tetap terhubung dengan dunia melalui koneksi internet fiber optic berkecepatan tinggi yang tersedia 24/7 di seluruh area resort. Streaming, video call, dan berbagi momen indah tanpa batas.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    category: "Technology",
  },
  {
    title: "Musholla",
    description:
      "Khusyukkan ibadah Anda di musholla berdesain modern dengan interior yang tenang dan fasilitas wudhu yang bersih. Dilengkapi AC, karpet berkualitas tinggi, dan arah kiblat yang tepat untuk kenyamanan spiritual Anda.",
    image:
      "https://desaingriyaku.com/wp-content/uploads/2023/06/mushola-al-hafizh.jpg",
    category: "Spiritual",
  },
  {
    title: "Parking Area",
    description:
      "Nikmati kenyamanan parkir pribadi gratis yang aman dan luas untuk kendaraan Anda selama menginap.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    category: "Convenience",
  },
  {
    title: "Luxury Non-Smoking Rooms",
    description:
      "Nikmati udara segar dan bersih di kamar bebas rokok yang didesain dengan standar internasional. Setiap kamar dilengkapi air purifier dan aromaterapi alami untuk pengalaman menginap yang menyehatkan.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    category: "Accommodation",
  },
  {
    title: "Layanan Kamar",
    description:
      "Nikmati kenyamanan dengan layanan kamar yang siap membantu kebutuhan Anda setiap saat.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "Service",
  },
  {
    title: "Coffee Shop",
    description:
      "Nikmati secangkir kopi hangat atau minuman segar di coffee shop kami, tempat sempurna untuk bersantai dan berbincang.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
    category: "Dining",
  },
  {
    title: "Wedding Venue",
    description:
      "Raih momen sakral Anda di tempat yang indah dengan pemandangan mempesona dan pelayanan terbaik untuk pernikahan tak terlupakan.",
    image:
      "https://nibble-images.b-cdn.net/nibble/original_images/wedding-venue-bogor-5.jpg",
    category: "Special Events",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop",
];

const Facility = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="min-h-screen bg-main">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <div
              className="opacity-0 animate-pulse"
              style={{ animation: "fadeIn 1s ease-out forwards" }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                <svg
                  className="w-8 h-8 mx-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                  Fasilitas Unggulan
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed max-w-3xl mx-auto">
                Selamat datang di{" "}
                <span className="font-semibold text-amber-200">
                  Sribudaya Resort & Homestay
                </span>
                , tempat di mana kenyamanan bertemu dengan kehangatan Aceh
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#facilities"
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center blue-btn"
                >
                  Jelajahi Fasilitas
                </a>
                <a
                  href="#booking"
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center blue-btn"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section id="facilities" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <svg
                className="w-8 h-8 mx-6 text-amber-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.5 2A1.5 1.5 0 008 3.5v1A1.5 1.5 0 009.5 6h5A1.5 1.5 0 0016 4.5v-1A1.5 1.5 0 0014.5 2h-5zM12 7a8 8 0 108 8 8 8 0 00-8-8zm0 2a6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6 6 6 0 016-6z" />
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-amber-600 to-emerald-600 bg-clip-text text-transparent">
                Premium Facilities
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nikmati pengalaman menginap yang tak terlupakan dengan fasilitas
              kelas dunia yang dirancang khusus untuk kenyamanan dan kepuasan
              Anda
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="space-y-20">
            {facilities.map((facility, index) => {
              if (facility.title === "Wedding Venue") {
                return (
                  <div key={index} className="relative">
                    {/* Wedding Venue Title */}
                    <div className="text-center mb-12">
                      <div className="flex items-center justify-center mb-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-400"></div>
                        <svg
                          className="w-8 h-8 mx-6 text-rose-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-400"></div>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                          Wedding Hall
                        </span>
                      </h3>

                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ciptakan pernikahan impian dengan suasana yang magis dan
                        pelayanan white-glove service di venue paling prestisius
                        di Aceh
                      </p>
                    </div>

                    {/* Wedding Venue Card */}
                    <div className="relative h-96 rounded-3xl overflow-hidden group shadow-2xl transform transition-all duration-700 hover:scale-[1.02]">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="flex items-center mb-4">
                          <svg
                            className="w-6 h-6 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span className="text-sm font-medium text-rose-300">
                            {facility.category}
                          </span>
                        </div>
                        <h4 className="text-3xl font-bold mb-4">
                          {facility.title}
                        </h4>
                        <p className="text-lg text-gray-200 leading-relaxed">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 transform transition-all duration-700 hover:scale-[1.02] ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2 relative group">
                    <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    {/* Floating Badge */}
                    {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">
                        {facility.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                      {facility.title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer font-medium group">
                      <span>Pelajari lebih lanjut</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="booking" className="py-20 bg-main">
        <div className="max-w-4xl mx-auto text-center px-6">
          {/* <svg
            className="w-16 h-16 mx-auto mb-8 text-blue-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg> */}
          <h2 className="text-4xl md:text-5xl font-bold  mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl /90 mb-8 leading-relaxed">
            Rasakan kemewahan dan kenyamanan yang tak tertandingi di Sribudaya
            Resort & Homestay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/booking" className="blue-btn  ">
              Book Your Stay Now
            </a>
            {/* <a href="#contact" className="blue-btn">
              Contact Us
            </a> */}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Facility;
