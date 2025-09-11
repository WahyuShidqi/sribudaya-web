import React, { useState } from "react";

// import fancybox dependencies
import useFancybox from "../fancybox";

// font awesome icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

library.add(fas, far, fab);

const GalleryViewAll = () => {
  // Fancybox hook for gallery
  const [fancyboxRefFullGallery] = useFancybox({
    groupAll: true,
    loop: true,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    protect: true,
    keyboard: true,
    thumbs: {
      autoStart: true,
    },
  });

  // State for filter/categories (optional feature)
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample gallery data - Replace with your actual image data
  const galleryImages = [
    {
      id: 1,
      category: "nature",
      thumb: "/images/gallery/thumb-1.jpg",
      full: "/images/gallery/full-1.jpg",
      title: "Sunset Paradise",
      caption: "A breathtaking view of the golden sunset",
      alt: "Sunset view",
    },
    {
      id: 2,
      category: "ocean",
      thumb: "/images/gallery/thumb-2.jpg",
      full: "/images/gallery/full-2.jpg",
      title: "Ocean Dreams",
      caption: "Crystal clear waters meet the horizon",
      alt: "Ocean view",
    },
    {
      id: 3,
      category: "nature",
      thumb: "/images/gallery/thumb-3.jpg",
      full: "/images/gallery/full-3.jpg",
      title: "Mountain Peak",
      caption: "Majestic mountains touching the clouds",
      alt: "Mountain landscape",
    },
    {
      id: 4,
      category: "urban",
      thumb: "/images/gallery/thumb-4.jpg",
      full: "/images/gallery/full-4.jpg",
      title: "City Lights",
      caption: "Urban landscape illuminated at night",
      alt: "City night view",
    },
    {
      id: 5,
      category: "nature",
      thumb: "/images/gallery/thumb-5.jpg",
      full: "/images/gallery/full-5.jpg",
      title: "Forest Path",
      caption: "A serene journey through nature",
      alt: "Forest pathway",
    },
    {
      id: 6,
      category: "nature",
      thumb: "/images/gallery/thumb-6.jpg",
      full: "/images/gallery/full-6.jpg",
      title: "Desert Dunes",
      caption: "Golden sands stretching to infinity",
      alt: "Desert landscape",
    },
    {
      id: 7,
      category: "ocean",
      thumb: "/images/gallery/thumb-7.jpg",
      full: "/images/gallery/full-7.jpg",
      title: "Coastal Sunrise",
      caption: "Dawn breaks over the peaceful shore",
      alt: "Coastal sunrise",
    },
    {
      id: 8,
      category: "urban",
      thumb: "/images/gallery/thumb-8.jpg",
      full: "/images/gallery/full-8.jpg",
      title: "Modern Architecture",
      caption: "Contemporary design meets functionality",
      alt: "Modern building",
    },
    {
      id: 9,
      category: "nature",
      thumb: "/images/gallery/thumb-9.jpg",
      full: "/images/gallery/full-9.jpg",
      title: "Autumn Colors",
      caption: "Nature's palette in full display",
      alt: "Autumn forest",
    },
    // Add more images as needed
  ];

  // Filter categories
  const categories = [
    { id: "all", name: "All Photos", icon: "images" },
    { id: "nature", name: "Nature", icon: "leaf" },
    { id: "ocean", name: "Ocean", icon: "water" },
    { id: "urban", name: "Urban", icon: "city" },
  ];

  // Filter images based on active category
  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-main">
      {/* Header Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
              Photo Gallery
            </h1>
            <p className="text-lg max-w-3xl mx-auto">
              Discover our complete collection of stunning moments and memorable
              experiences
            </p>
            <div className="flex justify-center items-center gap-3 mt-6"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                  flex items-center gap-2
                  ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200"
                  }
                `}
              >
                <FontAwesomeIcon
                  icon={["fas", category.icon]}
                  className="text-sm"
                />
                <span>{category.name}</span>
                {activeFilter === category.id && (
                  <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {category.id === "all"
                      ? galleryImages.length
                      : galleryImages.filter(
                          (img) => img.category === category.id
                        ).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Image Grid - 2 cols for sm and below, 3 cols for md and above */}
          <div
            ref={fancyboxRefFullGallery}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          >
            {filteredImages.map((image, index) => (
              <a
                key={image.id}
                href={image.full}
                data-fancybox="full-gallery"
                data-caption={image.caption}
                className={`
                  group relative block overflow-hidden rounded-lg lg:rounded-xl shadow-md hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-2 bg-gray-100
                  ${
                    index === 0
                      ? "col-span-2 md:col-span-1 row-span-1 md:row-span-2"
                      : ""
                  }
                  ${index === 4 ? "col-span-2 md:col-span-1" : ""}
                `}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden bg-gray-200 ${
                    index === 0
                      ? "aspect-[4/3] md:aspect-[3/4]"
                      : index === 4
                      ? "aspect-[8/5] md:aspect-[4/3]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={image.thumb}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-base sm:text-lg font-semibold mb-0.5 sm:mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                      {image.caption}
                    </p>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <FontAwesomeIcon
                      icon={["fas", "magnifying-glass-plus"]}
                      className="text-white text-xs sm:text-sm"
                    />
                  </div>

                  {/* Category Badge */}
                  {image.category && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs font-medium capitalize">
                        {image.category}
                      </span>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Load More Button (optional) */}
          <div className="text-center mt-12">
            <button className="relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden font-semibold text-white rounded-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FontAwesomeIcon
                icon={["fas", "plus"]}
                className="relative z-10 w-4 h-4"
              />
              <span className="relative z-10">Load More Photos</span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Back Button */}
          <div className="text-center mt-6">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-gray-700 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full font-medium hover:bg-white hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon
                icon={["fas", "arrow-left"]}
                className="w-4 h-4"
              />
              <span>Back to Booking</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Optional: Floating Stats */}
      <div className="fixed bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-lg shadow-lg px-4 py-3 hidden lg:block">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={["fas", "images"]} className="text-gray-600" />
          <div>
            <p className="text-xs text-gray-500">Showing</p>
            <p className="text-sm font-semibold text-gray-900">
              {filteredImages.length} of {galleryImages.length} photos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryViewAll;
