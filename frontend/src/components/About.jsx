import Testimonial from "./Testimonial";
import React from "react";
import LazyDiv from "./misc/LazyDiv";
//import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icon panah
const About = () => {
  return (
    <section>
      {/* Hero section */}
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contoh.jpg" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white flex justify-center animate-fade-up">
            <h1 className="title drop-shadow-lg">
              Sribudaya Resort & Homestay
            </h1>
          </div>
        </div>
      </div>
      {/* end of hero section */}

      <div className="w-full min-h-screen relative">
        {/* Clean Background */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url()",
            }}
          >
            <div className="absolute inset-0 bg-main"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-4 tracking-tight">
                Sribudaya Resort
              </h1>
              <div className="w-12 h-px bg-gray-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                A sanctuary of tranquility nestled in nature's embrace
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              {/* Left Content */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-light text-gray-800 mb-6 tracking-wide">
                    Our Story
                  </h2>
                  <p className="text-gray-600 leading-loose text-lg mb-6">
                    Established with a vision to redefine hospitality, Sribudaya
                    Resort offers an intimate escape where luxury meets
                    authenticity. Every element has been thoughtfully designed
                    to create harmony between comfort and nature.
                  </p>
                  <p className="text-gray-600 leading-loose">
                    We believe in creating experiences that resonate long after
                    your departure, where every moment is crafted with intention
                    and care.
                  </p>
                </div>

                {/* Philosophy */}
                <div className="border-l-2 border-gray-200 pl-8">
                  <h3 className="text-xl font-light text-gray-800 mb-4">
                    Our Philosophy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sustainable luxury that honors both our guests and the
                    pristine environment that surrounds us.
                  </p>
                </div>
              </div>

              {/* Right Content - Features */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                      <span className="text-xl">🏔</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Alpine Views
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Wake up to breathtaking mountain vistas that change with
                        the light throughout the day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                      <span className="text-xl">🧘</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Wellness Retreat
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Restore balance through curated wellness programs and
                        spa treatments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                      <span className="text-xl">🍃</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Sustainable Luxury
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Experience refined comfort while supporting
                        environmental conservation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="group hover:bg-gray-50 p-6 rounded-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                      <span className="text-xl">🌅</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">
                        Curated Experiences
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Thoughtfully designed activities that connect you with
                        local culture and nature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "15", label: "Years of Excellence" },
                  { number: "500+", label: "Satisfied Guests" },
                  { number: "24/7", label: "Personalized Service" },
                  { number: "5★", label: "Hospitality Standard" },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-3xl md:text-4xl font-light text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 font-light tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="text-center">
              <div className="inline-flex space-x-4">
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-light text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105">
                  Discover More
                </button>
                <button className="border border-gray-300 hover:border-gray-800 text-gray-800 px-8 py-3 rounded-full font-light text-sm tracking-wide uppercase transition-all duration-300 hover:bg-gray-50">
                  View Gallery
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Testimonial />
    </section>
  );
};
export default About;
