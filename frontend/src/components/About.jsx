
import Testimonial from "./Testimonial";
import React from "react";
//import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon panah
const About = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="cursor-pointer hover:underline">Home</span> /{" "}
        <span className="text-gray-700 font-medium">About Us</span>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-light text-center mb-2">About Us</h2>
      <div className="w-20 h-[2px] bg-gray-400 mx-auto mb-8"></div>      
  <section>
    <Testimonial />
  </section>
  </section>
  );
  };
export default About;

//     const images = [
    //       "/images/contoh.jpg",
    //       "/images/hall1.jpg",
    //       "/images/hotel.jpg",
//       "/images/pool.jpg",
//       "/images/wedding.jpg",
//     ];
  
//     const [currentIndex, setCurrentIndex] = useState(0);
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 7000);
  
//       return () => clearInterval(interval);
//     }, [images.length]);
  
//     const goToPrevious = () => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? images.length - 1 : prevIndex - 1
//       );
//     };
  
//     const goToNext = () => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     };
// return (
//   <section>
//      <section
      //   className="relative h-[80vh] bg-cover bg-center transition-all duration-[2000ms] ease-in-out"
      //   style={{ backgroundImage: `url(${images[currentIndex]})` }}
      // >
      //   <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      //     <div className="text-center text-white px-6">
      //       <h1 className="text-2xl md:text-6xl font-bold drop-shadow-lg">
      //         Selamat Datang di Sribudaya Resort & Homestay
      //       </h1>
      //       <p className="mt-4 text-lg drop-shadow-md">
      //         Nikmati keindahan alam & kenyamanan terbaik untuk liburan Anda
      //       </p>
      //       <div className="mt-8">
      //         <Link
      //           to="/booking"
      //           className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
      //         >
      //           Booking Sekarang
      //         </Link>
      //       </div>
      //     </div>
      //   </div>

      //   {/* Tombol navigasi kiri */}
      //   <button
      //     onClick={goToPrevious}
      //     className="absolute left-2 top-1/2 transform -translate-y-1/2 
      //        w-8 h-12 flex items-center justify-center
      //        bg-black bg-opacity-30 hover:bg-opacity-50 transition"
      //   >
      //     <FaChevronLeft className="text-white text-2xl md:text-4xl" />
      //   </button>

      //   {/* Tombol navigasi kanan */}
      //   <button
      //     onClick={goToNext}
      //     className="absolute right-2 top-1/2 transform -translate-y-1/2 
      //     w-8 h-12 flex items-center justify-center
      //     bg-black bg-opacity-30 hover:bg-opacity-50 transition"
      //   >
      //     <FaChevronRight className="text-white text-2xl md:text-4xl" />
      //   </button>
      //   {/* Indicator dots */}
      //   <div className="absolute bottom-6 w-full flex justify-center space-x-2">
      //     {images.map((_, index) => (
      //       <button
      //         key={index}
      //         onClick={() => setCurrentIndex(index)}
      //         className={`w-3 h-3 rounded-full transition-all duration-300 ${
        //           currentIndex === index
      //             ? "bg-blue-600 scale-110"
      //             : "bg-white bg-opacity-50 hover:bg-opacity-80"
      //         }`}
      //       ></button>
      //     ))}
      //   </div>



      