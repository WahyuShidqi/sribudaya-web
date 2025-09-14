import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Camera,
  Eye,
  X,
} from "lucide-react";
import LazyDiv from "./misc/LazyDiv";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data Owner Resort
  const owners = [
    {
      id: 1,
      name: "Budi Santoso",
      title: "Co-Founder & CEO",
      experience: "15+ Years in Hospitality",
      description:
        "Passionate about creating unforgettable experiences for guests. Started this journey with a vision to provide authentic Indonesian hospitality combined with modern comfort.",
      specialties: [
        "Resort Management",
        "Customer Experience",
        "Business Strategy",
      ],
      image: "/owners/owner3.jpg",
      contact: {
        phone: "+62 812-3456-7890",
        email: "budi@resortparadise.com",
        whatsapp: "+62 812-3456-7890",
      },
      socialMedia: {
        facebook: "https://facebook.com/budisantoso",
        instagram: "https://instagram.com/budisantoso_resort",
        linkedin: "https://linkedin.com/in/budisantoso",
        twitter: "https://twitter.com/budisantoso",
      },
    },
    {
      id: 2,
      name: "Sari Wijaya",
      title: "Co-Founder & Operations Director",
      experience: "12+ Years in Tourism",
      description:
        "Dedicated to sustainable tourism and community development. Believes in creating positive impact for both guests and local communities through responsible hospitality.",
      specialties: [
        "Operations Management",
        "Sustainable Tourism",
        "Community Relations",
      ],
      image: "/owners/owner2.jpg",
      contact: {
        phone: "+62 813-2345-6789",
        email: "sari@resortparadise.com",
        whatsapp: "+62 813-2345-6789",
      },
      socialMedia: {
        facebook: "https://facebook.com/sariwijaya",
        instagram: "https://instagram.com/sariwijaya_hospitality",
        linkedin: "https://linkedin.com/in/sariwijaya",
        twitter: "https://twitter.com/sariwijaya",
      },
    },
  ];

  // Data Gallery Resort
  const galleryData = {
    description: {
      title: "Experience Paradise",
      subtitle: "Discover Our Beautiful Resort",
      text: "Immerse yourself in the breathtaking beauty of our resort. From luxurious accommodations to world-class facilities, every corner tells a story of comfort and elegance. Our dedicated team ensures that every moment of your stay is filled with warmth and exceptional service.",
      highlights: [
        "Premium Accommodations",
        "World-Class Facilities",
        "Professional Staff",
        "Stunning Natural Views",
      ],
    },
    images: [
      {
        id: 1,
        src: "/images/gallery/rooms/villa-oceanview.jpg",
        alt: "Ocean View Villa",
        category: "Accommodations",
        title: "Luxury Ocean View Villa",
        position: "top-left",
      },
      {
        id: 2,
        src: "/images/gallery/facilities/infinity-pool.jpg",
        alt: "Infinity Pool",
        category: "Facilities",
        title: "Infinity Pool with Ocean View",
        position: "top-right",
      },
      {
        id: 3,
        src: "/images/gallery/staff/reception-team.jpg",
        alt: "Reception Team",
        category: "Staff",
        title: "Our Friendly Reception Team",
        position: "left",
      },
      {
        id: 4,
        src: "/images/gallery/facilities/spa-treatment.jpg",
        alt: "Spa Treatment",
        category: "Wellness",
        title: "Relaxing Spa Experience",
        position: "right-top",
      },
      {
        id: 5,
        src: "/images/gallery/dining/restaurant-view.jpg",
        alt: "Restaurant",
        category: "Dining",
        title: "Beachfront Restaurant",
        position: "bottom-left",
      },
      {
        id: 6,
        src: "/images/gallery/activities/beach-activities.jpg",
        alt: "Beach Activities",
        category: "Activities",
        title: "Fun Beach Activities",
        position: "right-bottom",
      },
      {
        id: 7,
        src: "/images/gallery/rooms/presidential-suite.jpg",
        alt: "Presidential Suite",
        category: "Accommodations",
        title: "Presidential Suite Interior",
        position: "bottom-right",
      },
      {
        id: 8,
        src: "/images/gallery/facilities/gym-fitness.jpg",
        alt: "Fitness Center",
        category: "Facilities",
        title: "Modern Fitness Center",
        position: "left-bottom",
      },
    ],
  };

  // Data testimonial
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Jakarta, Indonesia",
      rating: 5,
      comment:
        "Pengalaman menginap yang luar biasa! Staff sangat ramah dan pemandangan resort yang memukau. Kamar sangat bersih dan nyaman. Pasti akan kembali lagi!",
      image: "/testimonial/cewe1.png",
      stayType: "Resort Villa",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      comment:
        "Perfect getaway destination! The homestay felt like a home away from home. Amazing hospitality and the breakfast was incredible. Highly recommended!",
      image: "/testimonial/cowo1.png",
      stayType: "Homestay Deluxe",
    },
    {
      id: 3,
      name: "Rina Sari",
      location: "Surabaya, Indonesia",
      rating: 5,
      comment:
        "Tempat yang sempurna untuk liburan keluarga. Anak-anak sangat senang dengan kolam renang dan taman bermain. Pelayanan sangat memuaskan!",
      image: "/testimonial/cewe1.png",
      stayType: "Family Resort",
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Australia",
      rating: 4,
      comment:
        "Beautiful location with stunning sunset views. The room was spacious and well-maintained. Great value for money and excellent service throughout our stay.",
      image: "/testimonial/cowo1.png",
      stayType: "Ocean View Suite",
    },
    {
      id: 5,
      name: "Lisa Putri",
      location: "Bandung, Indonesia",
      rating: 5,
      comment:
        "Homestay yang sangat cozy dan bersih. Lokasinya strategis dan mudah dijangkau. Host sangat baik dan membantu memberikan rekomendasi tempat wisata.",
      image: "/testimonial/cewe1.png",
      stayType: "Premium Homestay",
    },
    {
      id: 6,
      name: "James Rodriguez",
      location: "Mexico",
      rating: 5,
      comment:
        "Outstanding experience! The resort exceeded all expectations. From the luxurious amenities to the breathtaking views, everything was perfect. Will definitely return!",
      image: "/testimonial/cowo1.png",
      stayType: "Luxury Resort",
    },
  ];

  // Modal functions
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-main">
      {/* Gallery Section */}

      <section className="py-20  overflow-hidden mt-16 animate-fade-up">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Gallery Layout */}
          <div className="relative">
            {/* Desktop Layout */}
            <LazyDiv
              className="hidden lg:block"
              placeholderHeight="1000px"
              threshold={0.5}
            >
              <div className="hidden lg:block">
                <div className="relative min-h-[900px]">
                  {/* Center Description - Fixed Position */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-2xl text-center border border-gray-200">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 animate-jump-in">
                        <Camera className="w-10 h-10 text-blue-600" />
                      </div>
                      <h3 className="text-2xl text-blue-600 font-semibold mb-6 animate-fade-right">
                        {galleryData.description.subtitle}
                      </h3>
                      <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-left">
                        {galleryData.description.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-8 text-lg animate-fade-right">
                        {galleryData.description.text}
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                        {galleryData.description.highlights.map(
                          (highlight, index) => (
                            <div
                              key={index}
                              className="flex items-center text-base animate-jump-in"
                            >
                              <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                              <span className="text-gray-700 font-medium">
                                {highlight}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Top Left - Large 0*/}
                  <div
                    className="absolute top-0 left-0 w-80 h-60 group cursor-pointer animate-jump-in"
                    onClick={() => openModal(galleryData.images[0])}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <img
                        src={galleryData.images[0].src}
                        alt={galleryData.images[0].alt}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">
                            {galleryData.images[0].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Center wide - Optional 100*/}
                  <div
                    className="absolute -top-16 left-1/3 transform -translate-x-1/2 w-[28rem] h-60 group cursor-pointer animate-jump-in animate-delay-100"
                    onClick={() => openModal(galleryData.images[7])}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      <img
                        src={galleryData.images[7].src}
                        alt={galleryData.images[7].alt}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-6 h-6 text-white mb-1 mx-auto" />
                          <p className="text-white text-xs font-semibold text-center px-2">
                            {galleryData.images[7].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Top Right - Large 200*/}
                  <div
                    className="absolute top-0 right-0 w-80 h-60 group cursor-pointer animate-jump-in animate-delay-200"
                    onClick={() => openModal(galleryData.images[1])}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <img
                        src={galleryData.images[2].src}
                        alt={galleryData.images[2].alt}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">
                            {galleryData.images[2].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - tall 300*/}
                  <div
                    className="absolute top-72 right-0 w-64 h-80 group cursor-pointer animate-jump-in animate-delay-300"
                    onClick={() => openModal(galleryData.images[3])}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-x-2">
                      <img
                        src={galleryData.images[3].src}
                        alt={galleryData.images[3].alt}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-7 h-7 text-white mb-2 mx-auto" />
                          <p className="text-white text-sm font-semibold text-center px-2">
                            {galleryData.images[3].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Right - Large 400*/}
                  <div
                    className="absolute bottom-0 right-0 w-80 h-60 group cursor-pointer animate-jump-in animate-delay-[400ms]"
                    onClick={() => openModal(galleryData.images[6])}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-2">
                      <img
                        src={galleryData.images[6].src}
                        alt={galleryData.images[6].alt}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">
                            {galleryData.images[6].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Center wide - Optional 500*/}
                  <div
                    className="absolute -bottom-16 left-1/3 transform -translate-x-1/2 w-[28rem] h-60 group cursor-pointer animate-jump-in animate-delay-[500ms]"
                    onClick={() => openModal(galleryData.images[0])}
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:translate-y-1">
                      <img
                        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop"
                        alt="Resort View"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-6 h-6 text-white mb-1 mx-auto" />
                          <p className="text-white text-xs font-semibold text-center px-2">
                            Resort Overview
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left - Large 600*/}
                  <div
                    className="absolute bottom-0 left-0 w-80 h-60 group cursor-pointer animate-jump-in animate-delay-[600ms]"
                    onClick={() => openModal(galleryData.images[4])}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-2">
                      <img
                        src={galleryData.images[4].src}
                        alt={galleryData.images[4].alt}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-10 h-10 text-white mb-3 mx-auto" />
                          <p className="text-white text-lg font-semibold text-center">
                            {galleryData.images[4].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Left Side - Tall 700*/}
                  <div
                    className="absolute top-72 left-0 w-64 h-80 group cursor-pointer animate-jump-in animate-delay-[700ms]"
                    onClick={() => openModal(galleryData.images[3])}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-x-2">
                      <img
                        src={galleryData.images[3].src}
                        alt={galleryData.images[3].alt}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Eye className="w-7 h-7 text-white mb-2 mx-auto" />
                          <p className="text-white text-sm font-semibold text-center px-2">
                            {galleryData.images[3].title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </LazyDiv>

            {/* Mobile & Tablet Layout */}
            <LazyDiv>
              <div className="lg:hidden animate-fade-up">
                {/* Description Section */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <Camera className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="subtitle mb-6">
                    {galleryData.description.subtitle}
                  </h3>
                  <h2 className="page-title mb-4">
                    {galleryData.description.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                    {galleryData.description.text}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {galleryData.description.highlights.map(
                      (highlight, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Mobile Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryData.images.slice(0, 6).map((image) => (
                    <div
                      key={image.id}
                      className="group cursor-pointer"
                      onClick={() => openModal(image)}
                    >
                      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                          src={image.src}
                          alt={image.alt}
                          onError={(e) => {
                            e.target.src =
                              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop";
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Eye className="w-6 h-6 text-white mb-1 mx-auto" />
                            <p className="text-white text-xs font-medium text-center px-2">
                              {image.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={() => openModal(galleryData.images[0])}
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    View All Photos
                  </button>
                </div>
              </div>
            </LazyDiv>
          </div>
        </div>

        {/* Modal for Image Viewing */}
        {isModalOpen && selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop";
                }}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Testimonial Section */}

      <section className="py-16 bg-gradient-to-br  overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <LazyDiv>
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="page-title animate-fade-up">
                What Our Guests Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up">
                Discover why thousands of travelers choose our resorts and
                homestays for their perfect getaway
              </p>
            </div>
          </LazyDiv>

          {/* Testimonial Slider */}
          <LazyDiv>
            <div className="relative animate-fade-up">
              {/* Main Slider Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onMouseEnter={() => setIsAutoPlay(false)}
                  onMouseLeave={() => setIsAutoPlay(true)}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <div className="bg-white mx-4 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-8 md:p-12">
                          {/* Quote Icon */}
                          <div className="mb-6">
                            <Quote className="w-12 h-12 text-blue-400" />
                          </div>

                          {/* Rating */}
                          <div className="flex items-center mb-6">
                            <div className="flex space-x-1 mr-4">
                              {renderStars(testimonial.rating)}
                            </div>
                            <span className="text-gray-600 text-sm">
                              {testimonial.rating}/5 Stars
                            </span>
                          </div>

                          {/* Testimonial Content */}
                          <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                            "{testimonial.comment}"
                          </blockquote>

                          {/* Customer Info */}
                          <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center space-x-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                onError={(e) => {
                                  e.target.src =
                                    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face";
                                }}
                                className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900 text-lg">
                                  {testimonial.name}
                                </h4>
                                <p className="text-gray-600">
                                  {testimonial.location}
                                </p>
                              </div>
                            </div>

                            <div className="bg-blue-50 px-4 py-2 rounded-full">
                              <span className="text-blue-700 font-medium text-sm">
                                {testimonial.stayType}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 z-10 group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 z-10 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </LazyDiv>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
