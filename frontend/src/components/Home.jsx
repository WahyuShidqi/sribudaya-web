// // import React from "react";

// // const Home = () => {
// //   return <div>home</div>;
// // };

// // export default Home;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon panah


const Home = () => {
  const images = [
    "/images/contoh.jpg",
    "/images/hall1.jpg",
    "/images/hotel.jpg",
    "/images/pool.jpg",
    "/images/wedding.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Hero dengan slider */}
      <section
        className="relative h-[80vh] bg-cover bg-center transition-all duration-[2000ms] ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-2xl md:text-6xl font-bold drop-shadow-lg">
              Selamat Datang di Sribudaya Resort & Homestay
            </h1>
            <p className="mt-4 text-lg drop-shadow-md">
              Nikmati keindahan alam & kenyamanan terbaik untuk liburan Anda
            </p>
            <div className="mt-8">
              <Link
                to="/booking"
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
              >
                Booking Sekarang
              </Link>
            </div>
          </div>
        </div>

        {/* Tombol navigasi kiri */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 
             w-8 h-12 flex items-center justify-center
             bg-black bg-opacity-30 hover:bg-opacity-50 transition"
        >
          <FaChevronLeft className="text-white text-2xl md:text-4xl" />
        </button>

        {/* Tombol navigasi kanan */}
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 
          w-8 h-12 flex items-center justify-center
          bg-black bg-opacity-30 hover:bg-opacity-50 transition"
        >
          <FaChevronRight className="text-white text-2xl md:text-4xl" />
        </button>
        {/* Indicator dots */}
<div className="absolute bottom-6 w-full flex justify-center space-x-2">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        currentIndex === index
          ? "bg-blue-600 scale-110"
          : "bg-white bg-opacity-50 hover:bg-opacity-80"
      }`}
    ></button>
  ))}
</div>

      </section>

      {/* About Section */}
      <section className="px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Bagian teks kiri */}
          <div className="text-left">
            <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
              About
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Discover <br /> Our Story
            </h2>
            <div className="w-16 h-[2px] bg-blue-600 mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sribudaya resort is designed to meet the requirements of modern day
              travelers. We understand each trip is different and have
              thoughtfully balanced the scapes of a peaceful home and a luxury
              hotel.
            </p>
            <Link
              to="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Know More
            </Link>
          </div>

          {/* Bagian gambar kanan */}
          <div className="relative max-w-md mx-auto">
            {/* Border dekoratif di belakang */}
            <div className="absolute top-6 right-6 w-full h-full rounded-lg border-2 border-blue-600"></div>

            {/* Gambar utama */}
            <img
              src="./images/hall1.jpg"
              alt="resort"
              className="relative z-10 rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>
            {/* Our Rooms Section */}
      <section className="px-10 py-20 bg-gray-50">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
            Our Rooms
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Exquisite Cottage <br /> Accommodations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Cottage Room"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold">Luxury Cottage Room</h3>
              <p className="text-sm mt-2">
                Our spacious suites embody luxury and sophistication and enjoy
                the experience with a spacious sitting area, luxury bedding and
                free Wi-Fi.
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="border-2 border-blue-600 px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                  View  Detail
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/hotel.jpg"
              alt="Heritage Cottage Room"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold">Heritage Cottage Room</h3>
              <p className="text-sm mt-2">
                Our spacious suites embody luxury and sophistication and enjoy
                the experience with a spacious sitting area, luxury bedding and
                free Wi-Fi.
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="border-2 border-blue-600 px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Rooms Section */}

{/* Amenities Section */}
<section className="py-20 px-6 md:px-12 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Bagian teks kiri */}
    <div>
      <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
        Amenities
      </p>
      <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
        Your All-Inclusive <br /> Experience
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Indulge in a world of luxury and comfort with our exclusive resort amenities, 
        designed to create unforgettable experiences for you.
      </p>
    </div>

    {/* Bagian icon kanan */}
    <div className="grid grid-cols-2 gap-6">
      {/* Wifi */}
      <div className="flex flex-col items-center justify-center border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
        <img src="/images/icons/wifi.png" alt="Free Wifi" className="w-10 h-10 mb-3" />
        <p className="text-gray-700 font-medium">Free Wifi</p>
      </div>

      {/* Furnishing */}
      <div className="flex flex-col items-center justify-center border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
        <img src="/images/icons/furnishing.png" alt="Fine Furnishing" className="w-10 h-10 mb-3" />
        <p className="text-gray-700 font-medium">Fine Furnishing</p>
      </div>

      {/* Parking */}
      <div className="flex flex-col items-center justify-center border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
        <img src="/images/icons/parking.png" alt="Private Parking" className="w-10 h-10 mb-3" />
        <p className="text-gray-700 font-medium">Private Parking</p>
      </div>

      {/* AC */}
      <div className="flex flex-col items-center justify-center border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
        <img src="/images/icons/ac.png" alt="Air Conditioning" className="w-10 h-10 mb-3" />
        <p className="text-gray-700 font-medium">Air Conditioning</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;



