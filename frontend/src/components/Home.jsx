// // import React from "react";

// // const Home = () => {
// //   return <div>home</div>;
// // };

// // export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon panah
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const images = [
    "/images/contoh.jpg",
    "/images/hall1.jpg",
    "/images/hotel.jpg",
    "/images/pool.jpg",
    "/images/wedding.jpg",
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
    <section id="homepage" className="mb-36">
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
      <section className="px-12 md:px-28 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Bagian teks kiri */}
          <div className="text-left">
            <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
              About
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Discover <br /> Our Story
            </h2>
            <div className="w-16 h-[3px] bg-blue-600 mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sribudaya resort is designed to meet the requirements of modern
              day travelers. We understand each trip is different and have
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
            <div className="absolute top-6 right-6 w-full h-full rounded-lg border-[3px] border-blue-600 "></div>


            {/* Gambar utama */}
            <img
              src="./images/villa.jpg"
              alt="resort"
              className="relative z-10 rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className="px-10 py-20 ">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
            Our Rooms
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug inline-block border-b-[3px] border-blue-600 text-center mb-[1px]">
            modern and elegant <br /> Accommodations
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
                <Link
                  to="/booking"
                  className="border-2 border-blue-600 px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                >
                  View Detail
                </Link>
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
                <Link
                  to="/booking"
                  className="border-2 border-blue-600 px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Rooms Section ends*/}

      {/* Partner with section */}
      <section id="social-media" className="mb-8">
        <div className="sosmed-container flex justify-center items-center flex-col py-10 h-auto">
          {/* location title */}
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
              Partner Sites
            </h2>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              You can find us at popular booking sites
            </h2>
          </div>

          {/* Sosmed Icons */}
          <div className="social-media-icon h-auto flex justify-center items-center flex-wrap gap-10 px-5 md:gap-24">
            <div className="transition-transform duration-200 hover:scale-125">
              <a
                href="https://www.booking.com/Share-DlyFsCQ"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="bookingcom.png"
                  className="w-14 h-14 md:w-16 md:h-16"
                  alt="bookingcom.png"
                />
              </a>
            </div>
            <div className="transition-transform duration-200 hover:scale-125">
              <a
                href="https://www.tiket.com/hotel/indonesia/sribudaya-resort-708001724122959169?checkin=2024-08-26&checkout=2024-08-27&adult=1&room=1&utm_external=organic&utm_medium=hotel_pdp%3Bshare_button"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="tiketcom.png"
                  className="w-40 md:w-56 md:h-16"
                  alt="bookingcom.png"
                />
              </a>
            </div>
            <div className="transition-transform duration-200 hover:scale-125">
              <a
                href="https://www.agoda.com/sribudaya-resort/hotel/aceh-id.html?checkin=2024-11-27&checkout=2024-11-28&los=1&rooms=1&adults=1&children=0&cid=1924241&searchrequestid=3609c674-949e-4cd3-a91a-8881b3b76029&tag=op7d38f94ba1cd458aa3f2c809cc92e169SG&ds=AQO4US3VCi%2FiSHag"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="agoda.png"
                  className="w-auto h-16"
                  alt="bookingcom.png"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Partner with section end */}

      {/* Amenities Section */}
      <section className="py-20 px-6 md:px-12 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bagian teks kiri */}
          <div>
            <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
              Amenities
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Your All-Inclusive <br /> Experience
            </h2>
            <div className="absoulute left-0 w-1/2 h-[3px] bg-blue-600 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              Indulge in a world of luxury and comfort with our exclusive resort
              amenities, designed to create unforgettable experiences for you.
            </p>
          </div>

          {/* Bagian icon kanan */}
          <div className="grid grid-cols-2 gap-6">
            {/* Wifi */}
            <div className="flex flex-col items-center justify-center border rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
              <FontAwesomeIcon
                icon="fa-solid fa-wifi"
                className="w-10 h-10 mb-3 text-blue-600"
              />
              <p className="text-gray-700 font-medium">Free Wifi</p>
            </div>

            {/* Furnishing */}
            <div className="flex flex-col items-center justify-center border rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
              <FontAwesomeIcon
                icon="fa-solid fa-couch"
                className="w-10 h-10 mb-3 text-blue-600"
              />
              <p className="text-gray-700 font-medium">Fine Furnishing</p>
            </div>

            {/* Parking */}
            <div className="flex flex-col items-center justify-center border rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
              <FontAwesomeIcon
                icon="fa-solid fa-parking"
                className="w-10 h-10 mb-3 text-blue-600"
              />
              <p className="text-gray-700 font-medium">Private Parking</p>
            </div>

            {/* AC */}
            <div className="flex flex-col items-center justify-center border rounded-lg p-6 border-2 border-gray-400 shadow-sm hover:shadow-md transition">
              <FontAwesomeIcon
                icon="fa-solid fa-wind"
                className="w-10 h-10 mb-3 text-blue-600"
              />
              <p className="text-gray-700 font-medium">Air Conditioning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="py-20 px-5 md:px-20 h-[25rem] md:h-[40rem]"
      >
        {/* location title */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
            Location
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Our Resort's Location
          </h2>
        </div>

        {/* Google Maps */}
        <div className="w-full flex justify-center items-center h-full overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3493821911425!2d95.32108227506707!3d5.5150531944649845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040392caa277e19%3A0xd761fb6d5e2daf74!2sSribudaya%20resort%20%26%20homestay!5e0!3m2!1sen!2sid!4v1757240120401!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Social media section */}
      <section id="social-media" className="my-44 bungkusanPutra">
        <div className="sosmed-container flex justify-center items-center flex-col py-10 h-auto">
          {/* location title */}
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-semibold tracking-widest uppercase mb-2">
              Social Media
            </h2>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Follow Our Social Media For More
            </h2>
          </div>

          {/* Sosmed Icons */}
          <div className="social-media-icon h-auto flex justify-center items-center text-6xl gap-14 md:gap-24">
            <div className="">
              <a
                href="https://instagram.com/sribudaya_resortaceh"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="transition-all duration-200 hover:scale-125 hover:text-blue-600 cursor-pointer"
                  icon="fa-brands fa-instagram"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@sribudayaresortaceh"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="transition-all duration-200 hover:scale-125 hover:text-blue-600 cursor-pointer"
                  icon="fa-brands fa-tiktok"
                />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/6282267878880"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="transition-all duration-200 hover:scale-125 hover:text-blue-600 cursor-pointer"
                  icon="fa-brands fa-whatsapp"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
