import React, { useState } from "react";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

// import fancybox dependencies
import useFancybox from "../fancybox";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// font awesome icon import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";
import LazyDiv from "./misc/LazyDiv";

library.add(fas, far, fab);

const Booking = () => {
  const [fancyboxRefRoom1] = useFancybox({
    // Your custom options
    groupAll: false,
  });

  const [fancyboxRefRoom2] = useFancybox({
    groupAll: false,
  });

  const [fancyboxRefRoom3] = useFancybox({
    groupAll: false,
  });

  const [fancyboxRefGallery] = useFancybox({
    groupAll: true,
    // Additional custom options for gallery
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

  // useEffect for wedding package gallery
  useEffect(() => {
    // Bind Fancybox to all elements with data-fancybox attribute
    Fancybox.bind("[data-fancybox]", {
      Thumbs: { autoStart: true },
      Navigation: false,
      arrows: false,
      Toolbar: {
        display: [
          { id: "counter", position: "center" },
          "zoom",
          "slideshow",
          "fullscreen",
          "download",
          "thumbs",
          "close",
        ],
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // useState to handle accordion opening and closing
  const [openIndex, setOpenIndex] = useState(null);

  const galleryImages = [
    {
      id: 1,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      title: "Sunset Paradise",
      caption: "A breathtaking view of the golden sunset",
      alt: "Sunset view",
    },
    {
      id: 2,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      title: "Ocean Dreams",
      caption: "Crystal clear waters meet the horizon",
      alt: "Ocean view",
    },
    {
      id: 3,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      title: "Mountain Peak",
      caption: "Majestic mountains touching the clouds",
      alt: "Mountain landscape",
    },
    {
      id: 4,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      title: "City Lights",
      caption: "Urban landscape illuminated at night",
      alt: "City night view",
    },
    {
      id: 5,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      title: "Forest Path",
      caption: "A serene journey through nature",
      alt: "Forest pathway",
    },
    {
      id: 6,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
      title: "Desert Dunes",
      caption: "Golden sands stretching to infinity",
      alt: "Desert landscape",
    },
  ];

  // for smooth scrolling specific page
  useEffect(() => {
    document.documentElement.classList.add("smooth-scroll"); // add to <html>

    return () => {
      document.documentElement.classList.remove("smooth-scroll"); // clean up
    };
  }, []);

  return (
    <section id="booking" className="m-0 p-0  w-full smooth-scroll">
      {/* Slide section */}
      <div className="w-full ">
        <div className="wrapper">
          <div className="hero-slides h-[80vh] relative">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
              }}
              speed={2500}
              loop="true"
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="" src="/images/hotel.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/contoh.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/wedding.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/hotel.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/wedding.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="" src="/images/contoh.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-40"></div>
            {/* Description for Hero section */}
            <div className="booking-hero-desc absolute z-30 inset-0  flex justify-center items-center text-white flex-col animate-fade-up">
              <div className="header text-center w-[85%]">
                <h1 className="title drop-shadow-lg">
                  We offer you a cozy room suitable for you and your loved one!
                </h1>
              </div>
              <div className="subheader text-center px-4">
                <h2 className="title-desc">
                  Order your room right here and right now before it's too late!
                </h2>
                <div className=" mt-12">
                  <a href="#order-section" className="blue-btn">
                    Book Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper px-5 md:px-12 lg:px-24">
        {/* Booking room section */}
        <div id="order-section" className="my-container w-full">
          <div className="wrapper my-10">
            <div className="family-suite flex flex-col gap-5 justify-center">
              {/* title for booking section */}
              <LazyDiv>
                <div className="booking-title relative mt-8 w-fit animate-fade-up">
                  <h2 className="subtitle text-left">ROOM LIST</h2>
                  <h1 className="page-title">Our Room For You</h1>
                  <span className="absolute left-0 w-1/2  bottom-0 h-[2px] bg-blue-600"></span>
                </div>

                {/* booking section description */}
                <div className="mb-8 w-fit animate-fade-right">
                  <p className="page-title-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    quidem quam est, exercitationem beatae, modi sequi porro
                    quibusdam debitis, minima veniam temporibus molestias
                    similique quae impedit et minus ipsa mollitia!
                  </p>
                </div>
              </LazyDiv>

              {/* Booking room 1 */}
              <LazyDiv>
                <div
                  id="booking-room1"
                  className="w-full border-2 border-black rounded-lg flex justify-center items-center flex-col p-8 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row animate-fade-right"
                >
                  <div ref={fancyboxRefRoom1} className="grid-images ">
                    <img
                      data-fancybox="gallery"
                      src="/images/contoh.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/hotel.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/wedding.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/hotel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-10 lg:mt-0 lg:pt-0 lg:text-wrap">
                    <div className="family-suite-desc-text">
                      <h1 className="card-title">Family Suite</h1>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Neque fugit excepturi cumque qui optio, iste odit
                        atque
                      </p>
                    </div>
                    <div className="benefit-icon flex flex-col mt-4 gap-2">
                      {/* icon description 1*/}
                      <div className="icon-desc flex gap-4">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-bed"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Kapasitas 4 dewasa + 2 anak. 1 king bed dan 1 single
                            large
                          </p>
                        </div>
                      </div>
                      {/* icon description 2*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-utensils"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Free sarapan pagi untuk 4 orang
                          </p>
                        </div>
                      </div>
                      {/* icon description 3*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-water-ladder"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Free berenang untuk 4 dewasa & 2 anak
                          </p>
                        </div>
                      </div>
                      {/* icon description 4*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-couch"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Bathtub, living room, 2 bathroom, dan fasilitas
                            pendukung lainnya
                          </p>
                        </div>
                      </div>
                      {/* icon description 5*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-wifi"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Netflix dan WIFI cepat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing flex flex-col   lg:w-[24rem] h-full w-full py-6 px-4 ">
                    <h1 className="text-3xl font-semibold">Harga :</h1>
                    <h2 className="text-2xl font-semibold mt-6">
                      Rp.1300,000/malam
                    </h2>
                    {/* <p className="mt-6">1 Kamar/malam</p> */}
                    <p className="mt-2">4 Dewasa, 2 Anak</p>

                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </LazyDiv>

              {/* Booking room 2 */}
              <LazyDiv>
                <div
                  id="booking-room2"
                  className="w-full border-2 border-black  rounded-lg flex justify-center items-center flex-col p-8 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row animate-fade-left"
                >
                  <div ref={fancyboxRefRoom2} className="grid-images ">
                    <img
                      data-fancybox="gallery"
                      src="/images/contoh.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/hotel.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/wedding.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/hotel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-10 lg:mt-0 lg:pt-0 lg:text-wrap">
                    <div className="family-suite-desc-text">
                      <h1 className="card-title">Family Studio</h1>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Neque fugit excepturi cumque qui optio, iste odit
                        atque
                      </p>
                    </div>
                    <div className="benefit-icon flex flex-col mt-4 gap-2">
                      {/* icon description 1*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-bed"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Kapasitas 4 dewasa + 2 anak. 1 king bed dan 1 single
                            large
                          </p>
                        </div>
                      </div>
                      {/* icon description 2*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-utensils"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Free sarapan pagi untuk 4 orang
                          </p>
                        </div>
                      </div>
                      {/* icon description 3*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-water-ladder"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Free berenang untuk 4 dewasa & 2 anak
                          </p>
                        </div>
                      </div>
                      {/* icon description 4*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-couch"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Bathtub, living room, 2 bathroom, dan fasilitas
                            pendukung lainnya
                          </p>
                        </div>
                      </div>
                      {/* icon description 5*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-wifi"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Netflix dan WIFI cepat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing flex flex-col   lg:w-[24rem] h-full w-full py-6 px-4 ">
                    <h1 className="text-3xl font-semibold">Harga :</h1>
                    <h2 className="text-2xl font-semibold mt-6">
                      Rp.1300,000/malam
                    </h2>
                    {/* <p className="mt-6">1 Kamar/malam</p> */}
                    <p className="mt-2">2 Dewasa, 2 Anak</p>

                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20Studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </LazyDiv>

              {/* Booking room 3 */}
              <LazyDiv>
                <div
                  id="booking-room3"
                  className="w-full border-2 border-black  rounded-lg flex justify-center items-center flex-col p-8 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row animate-fade-right"
                >
                  <div ref={fancyboxRefRoom3} className="grid-images ">
                    <img
                      data-fancybox="gallery"
                      src="/images/contoh.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/hotel.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/wedding.jpg"
                      alt=""
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/hotel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-10 lg:mt-0 lg:pt-0 lg:text-wrap">
                    <div className="family-suite-desc-text">
                      <h1 className="card-title">Family Deluxe</h1>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Neque fugit excepturi cumque qui optio, iste odit
                        atque
                      </p>
                    </div>
                    <div className="benefit-icon flex flex-col mt-4 gap-2">
                      {/* icon description 1*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-bed"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Kapasitas 4 dewasa + 2 anak. 1 king bed dan 1 single
                            large
                          </p>
                        </div>
                      </div>
                      {/* icon description 2*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-utensils"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Free sarapan pagi untuk 4 orang
                          </p>
                        </div>
                      </div>
                      {/* icon description 3*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-water-ladder"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Free berenang untuk 4 dewasa & 2 anak
                          </p>
                        </div>
                      </div>
                      {/* icon description 4*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-couch"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Bathtub, living room, 2 bathroom, dan fasilitas
                            pendukung lainnya
                          </p>
                        </div>
                      </div>
                      {/* icon description 5*/}
                      <div className="icon-desc flex gap-4 ">
                        <div className="booking-icon">
                          <span className="">
                            <FontAwesomeIcon
                              className="text-2xl"
                              icon="fa-solid fa-wifi"
                            />
                          </span>
                        </div>
                        <div>
                          <p className="booking-icon-desc">
                            Netflix dan WIFI cepat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing flex flex-col   lg:w-[24rem] h-full w-full py-6 px-4 ">
                    <h1 className="text-3xl font-semibold">Harga :</h1>
                    <h2 className="text-2xl font-semibold mt-6">
                      Rp. 1.300,000/malam
                    </h2>
                    {/* <p className="mt-6">1 Kamar/malam</p> */}
                    <p className="mt-2">2 Dewasa, 2 Anak</p>

                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20deluxe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </LazyDiv>
            </div>
          </div>
        </div>

        {/* Wedding Section */}
        <div className="wedding-container py-16">
          {/* title for Wedding section */}
          <LazyDiv>
            <div className="booking-title relative my-8 w-fit animate-fade-up">
              <h2 className="subtitle text-left">WEDDING HALL</h2>
              <h1 className="page-title">
                A Modern Wedding Hall Designed <br /> for Your Special Day
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-blue-600"></span>
            </div>
          </LazyDiv>

          {/* wedding section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quidem quam est, exercitationem beatae, modi sequi porro
                quibusdam debitis, minima veniam temporibus molestias similique
                quae impedit et minus ipsa mollitia!
              </p>
            </div>
          </LazyDiv>

          <PackageCard />

          {/* Wedding package list section */}
          <div className="wedding-package py-10 mt-12">
            {/* Section Header */}
            <LazyDiv>
              <div className="text-center">
                <div className="inline-block">
                  <h2 className="subtitle animate-fade-left animate-delay-100">
                    Wedding Package
                  </h2>
                  <h1 className="page-title !mb-4 animate-fade-right animate-delay-200">
                    Our Wedding Package
                  </h1>
                </div>
                <p className="page-title-desc max-w-2xl mx-auto animate-fade-left animate-delay-300 !mb-12">
                  Explore our wedding package created for you
                </p>
                {/* <div className="flex justify-center items-center gap-3 mt-4">
              <div className="w-1/5 h-1 bg-blue-600 rounded-full"></div>
            </div> */}
              </div>
            </LazyDiv>

            <div className="wrapper max-w-6xl mx-auto flex justify-center items-center gap-2">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                }}
                modules={[Pagination]}
                className="myWeddingPackageSwiper"
              >
                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a
                      href="silver-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Silver Package"
                    >
                      <img
                        src="silver-package.png"
                        alt="silver package"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="text-3xl  font-semibold mb-2">
                        Silver Package
                      </h3>
                      <p className="  ">
                        Perfect for intimate weddings with essential services
                        included.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blue-btn mt-24 md:text-xl"
                      >
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a
                      href="platinum-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Platinum Package"
                    >
                      <img
                        src="platinum-package.png"
                        alt="platinum package wedding"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="text-3xl font-semibold mb-2">
                        Platinum Package
                      </h3>
                      <p className=" ">
                        A luxurious package for couples who want premium
                        arrangements.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blue-btn mt-24 md:text-xl"
                      >
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a
                      href="gold-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Gold Package"
                    >
                      <img
                        src="gold-package.png"
                        alt="gold package wedding"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="text-3xl font-semibold mb-2">
                        Gold Package
                      </h3>
                      <p className=" ">
                        Balanced elegance and value, designed for medium-size
                        weddings.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blue-btn mt-24 md:text-xl"
                      >
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <a
                      href="royal-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Royal Package"
                    >
                      <img
                        src="royal-package.png"
                        alt="royal package wedding"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="text-3xl font-semibold mb-2">
                        Royal Package
                      </h3>
                      <p className=" ">
                        The ultimate fairy-tale experience with every luxury
                        included.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blue-btn mt-24 md:text-xl"
                      >
                        <span className="text-2xl pr-1">
                          <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                        </span>
                        Booking
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* End of Wedding package list section */}

          {/*Wedding Gallery Section */}
          <div className="mt-10 px-4 sm:px-6 lg:px-8 bg-main">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <LazyDiv>
                <div className="text-center mb-12">
                  <div className="inline-block">
                    <h2 className="subtitle animate-fade-left animate-delay-100">
                      wedding gallery
                    </h2>
                    <h1 className="page-title !mb-4 animate-fade-right animate-delay-200">
                      Our Gallery Showcasing the wedding
                    </h1>
                  </div>
                  <p className="page-title-desc !mb-12 animate-fade-left animate-delay-300">
                    Explore our stunning collection of moments captured in time
                  </p>
                </div>
              </LazyDiv>

              {/* Gallery Grid with Fancybox */}
              <div
                ref={fancyboxRefGallery}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
              >
                {galleryImages.map((image) => (
                  <a
                    key={image.id}
                    href={image.full}
                    data-fancybox="gallery"
                    data-caption={image.caption}
                    className="group relative block overflow-hidden rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gray-100"
                  >
                    {/* Image Container with Aspect Ratio */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                      <img
                        src={image.thumb}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-white text-lg font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {image.title}
                        </h3>
                        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                          {image.caption}
                        </p>
                      </div>

                      {/* Corner Icon with FontAwesome */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                        <FontAwesomeIcon
                          icon={["fas", "magnifying-glass-plus"]}
                          className="text-white text-sm"
                        />
                      </div>

                      {/* Side Badge (optional) */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                        <span className="text-white text-xs font-medium">
                          View
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Optional: Load More / View All Button */}
              <div className="text-center mt-12">
                <Link
                  to="/gallery"
                  className="relative inline-flex items-center gap-2 px-8 py-3 overflow-hidden font-semibold text-white rounded-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10">View All Photos</span>
                  <FontAwesomeIcon
                    icon={["fas", "arrow-right"]}
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>
            </div>
          </div>
          {/* End of wedding gallery section */}
        </div>

        {/* Meeting Room Section */}
        <div className="wedding-package mt-10">
          {/* title for Meeting section */}
          <LazyDiv>
            <div className="booking-title relative my-8 w-fit animate-fade-up">
              <h2 className="subtitle text-left">Meeting Room</h2>
              <h1 className="page-title">
                A Modern Meeting Room Designed <br /> for Your Special Day
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-blue-600"></span>
            </div>
          </LazyDiv>
          {/* Meeting section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quidem quam est, exercitationem beatae, modi sequi porro
                quibusdam debitis, minima veniam temporibus molestias similique
                quae impedit et minus ipsa mollitia!
              </p>
            </div>
          </LazyDiv>

          {/* meeting package list */}
          <div className="wrapper max-w-6xl mx-auto flex justify-center items-center gap-2">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 3 },
                640: { slidesPerView: 3 },
              }}
              modules={[Pagination]}
              className="myMeetingPackageSwiper"
            >
              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="silver-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Silver Package"
                  >
                    <img
                      src="silver-package.png"
                      alt="silver package"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl  font-semibold mb-2">
                      Silver Package
                    </h3>
                    <p className="  ">
                      Perfect for intimate weddings with essential services
                      included.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="platinum-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Platinum Package"
                  >
                    <img
                      src="platinum-package.png"
                      alt="platinum package wedding"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl font-semibold mb-2">
                      Platinum Package
                    </h3>
                    <p className=" ">
                      A luxurious package for couples who want premium
                      arrangements.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="gold-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Gold Package"
                  >
                    <img
                      src="gold-package.png"
                      alt="gold package wedding"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl font-semibold mb-2">
                      Gold Package
                    </h3>
                    <p className=" ">
                      Balanced elegance and value, designed for medium-size
                      weddings.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="royal-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Royal Package"
                  >
                    <img
                      src="royal-package.png"
                      alt="royal package wedding"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl font-semibold mb-2">
                      Royal Package
                    </h3>
                    <p className=" ">
                      The ultimate fairy-tale experience with every luxury
                      included.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* End of meeting package list section */}

        {/* Swimming pool Section */}
        <div className="wedding-package mt-10">
          {/* title for Swimming pool section */}
          <LazyDiv>
            <div className="booking-title relative my-8 w-fit animate-fade-up">
              <h2 className="subtitle text-left">Swimming pool</h2>
              <h1 className="page-title">
                A Modern Swimming pool Designed <br /> for Your Special Day
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-blue-600"></span>
            </div>
          </LazyDiv>
          {/* Swimming pool section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quidem quam est, exercitationem beatae, modi sequi porro
                quibusdam debitis, minima veniam temporibus molestias similique
                quae impedit et minus ipsa mollitia!
              </p>
            </div>
          </LazyDiv>

          {/* meeting package list */}
          <div className="wrapper max-w-6xl mx-auto flex justify-center items-center gap-2">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 3 },
                640: { slidesPerView: 3 },
              }}
              modules={[Pagination]}
              className="myMeetingPackageSwiper"
            >
              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="silver-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Silver Package"
                  >
                    <img
                      src="silver-package.png"
                      alt="silver package"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl  font-semibold mb-2">
                      Silver Package
                    </h3>
                    <p className="  ">
                      Perfect for intimate weddings with essential services
                      included.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="platinum-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Platinum Package"
                  >
                    <img
                      src="platinum-package.png"
                      alt="platinum package wedding"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl font-semibold mb-2">
                      Platinum Package
                    </h3>
                    <p className=" ">
                      A luxurious package for couples who want premium
                      arrangements.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="gold-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Gold Package"
                  >
                    <img
                      src="gold-package.png"
                      alt="gold package wedding"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl font-semibold mb-2">
                      Gold Package
                    </h3>
                    <p className=" ">
                      Balanced elegance and value, designed for medium-size
                      weddings.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="royal-package.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Royal Package"
                  >
                    <img
                      src="royal-package.png"
                      alt="royal package wedding"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="text-3xl font-semibold mb-2">
                      Royal Package
                    </h3>
                    <p className=" ">
                      The ultimate fairy-tale experience with every luxury
                      included.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kamar%20dengan%20tipe%20family%20suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn mt-24 md:text-xl"
                    >
                      <span className="text-2xl pr-1">
                        <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                      </span>
                      Booking
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* End of meeting package list section */}

        {/* Accordion section */}
        <div className="accordion-container my-16">
          {/* title for FAQ section */}
          <LazyDiv>
            <div className="booking-title relative mt-8 w-fit animate-fade-right">
              <h2 className="subtitle text-left">F.A.Q.</h2>
              <h1 className="page-title">Frequently Asked Questions</h1>
              <span className="absolute left-0 w-1/2  -bottom-4 h-[2px] bg-blue-600"></span>
            </div>
          </LazyDiv>

          <div className="w-full mt-10 rounded-xl">
            {/* Item 1 */}
            <LazyDiv>
              <div className="border mt-2 bg-main rounded-lg border-black animate-fade-left animate-delay-100">
                <button
                  onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                  className="flex items-center justify-between w-full p-5 font-medium  hover:bg-gray-100 hover:rounded-t-lg gap-3"
                >
                  <span>What is Flowbite?</span>
                  <svg
                    className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                      openIndex === 0 ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    openIndex === 0 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-5 border-t border-black ">
                    <p className="mb-2 ">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </div>
                </div>
              </div>
            </LazyDiv>

            {/* Item 2 */}
            <LazyDiv>
              <div className="border mt-2 bg-main rounded-lg border-black animate-fade-right animate-delay-200">
                <button
                  onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
                  className="flex items-center justify-between w-full p-5 font-medium  hover:bg-gray-100  gap-3"
                >
                  <span>Is there a Figma file available?</span>
                  <svg
                    className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                      openIndex === 1 ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    openIndex === 1 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-5 border-t border-black ">
                    <p className="mb-2 ">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                  </div>
                </div>
              </div>
            </LazyDiv>

            {/* Item 3 */}
            <LazyDiv>
              <div className="border mt-2 rounded-lg bg-main border-black animate-fade-left animate-delay-300">
                <button
                  onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
                  className="flex items-center justify-between w-full p-5 font-medium  hover:bg-gray-100 hover:rounded-b-lg gap-3"
                >
                  <span>
                    What are the differences between Flowbite and Tailwind UI?
                  </span>
                  <svg
                    className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                      openIndex === 2 ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    openIndex === 2 ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-5 border-t border-black ">
                    <p className="mb-2 ">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                  </div>
                </div>
              </div>
            </LazyDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

// * Contoh integrasi fancybox dengan fancybox

//  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-main">
//       <div className="max-w-7xl mx-auto">
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           modules={[Autoplay, Pagination]}
//           className="gallery-swiper"
//         >
//           {galleryImages.map((image) => (
//             <SwiperSlide key={image.id}>
//               <a
//                 href={image.full}
//                 data-fancybox="gallery-swiper"
//                 data-caption={image.caption}
//                 ref={fancyboxRefGallery}
//                 className="block"
//               >
//                 <img
//                   src={image.thumb}
//                   alt={image.alt}
//                   className="w-full rounded-xl"
//                 />
//               </a>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
