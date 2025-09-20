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
// import { Link } from "react-router-dom";
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

  // const [fancyboxRefGallery] = useFancybox({
  //   groupAll: true,
  //   // Additional custom options for gallery
  //   loop: true,
  //   buttons: [
  //     "zoom",
  //     "share",
  //     "slideShow",
  //     "fullScreen",
  //     "download",
  //     "thumbs",
  //     "close",
  //   ],
  //   animationEffect: "zoom-in-out",
  //   transitionEffect: "slide",
  //   protect: true,
  //   keyboard: true,
  //   thumbs: {
  //     autoStart: true,
  //   },
  // });

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

  // const galleryImages = [
  //   {
  //     id: 1,
  //     thumb:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     title: "Sunset Paradise",
  //     caption: "A breathtaking view of the golden sunset",
  //     alt: "Sunset view",
  //   },
  //   {
  //     id: 2,
  //     thumb:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     title: "Ocean Dreams",
  //     caption: "Crystal clear waters meet the horizon",
  //     alt: "Ocean view",
  //   },
  //   {
  //     id: 3,
  //     thumb:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     title: "Mountain Peak",
  //     caption: "Majestic mountains touching the clouds",
  //     alt: "Mountain landscape",
  //   },
  //   {
  //     id: 4,
  //     thumb:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     title: "City Lights",
  //     caption: "Urban landscape illuminated at night",
  //     alt: "City night view",
  //   },
  //   {
  //     id: 5,
  //     thumb:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     title: "Forest Path",
  //     caption: "A serene journey through nature",
  //     alt: "Forest pathway",
  //   },
  //   {
  //     id: 6,
  //     thumb:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     full: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaheRhJ-plr51li9J7DIVU78xq9c0dr07cw&s",
  //     title: "Desert Dunes",
  //     caption: "Golden sands stretching to infinity",
  //     alt: "Desert landscape",
  //   },
  // ];

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
                <img
                  className=""
                  src="/images/booking/family-deluxe01_compressed.jpg"
                  alt="family-deluxe01_compressed.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="/images/booking/family-studio01_compressed.jpg"
                  alt="family-studio01_compressed.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="/images/booking/family-suite01_compressed.jpg"
                  alt="family-suite01_compressed.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="/images/booking/resort-room-front_compressed.jpg"
                  alt="resort-room-front_compressed.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="/images/booking/family-suite02_compressed.jpg"
                  alt="family-suite02_compressed.jpg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className=""
                  src="/images/booking/family-studio02_compressed.jpg"
                  alt="family-studio02_compressed.jpg"
                />
              </SwiperSlide>
            </Swiper>
            <div className="absolute inset-0 z-10 bg-black bg-opacity-30"></div>
            {/* Description for Hero section */}
            <div className="booking-hero-desc absolute z-30 inset-0  flex justify-center items-center text-white flex-col animate-fade-up">
              <div className="header text-center w-[85%]">
                <h1 className="title drop-shadow-lg">
                  Liburan nyaman bersama keluarga di Sribudaya Resort
                </h1>
              </div>
              <div className="subheader text-center px-4">
                <h2 className="title-desc">
                  {/* Nikmati resort yang tenang dan nyaman, sempurna untuk
                  bersantai bersama orang terdekat. Pesan sekarang dan buat
                  liburanmu tak terlupakan */}
                  Nikmati resort indah dengan suasana tenang, dan momen
                  kebersamaan yang penuh kehangatan. Booking sekarang dan
                  nikmati liburan tak terlupakan untuk keluarga Anda
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
                  <h1 className="page-title">Pilihan Tipe Kamar</h1>
                  <span className="absolute left-0 w-1/2  -bottom-4 h-[2px] bg-blue-600"></span>
                </div>

                {/* booking section description */}
                <div className="mb-8 w-fit animate-fade-right">
                  <p className="page-title-desc">
                    Nikmati pilihan kamar dengan suasana tenang dan fasilitas
                    lengkap, dirancang untuk memberikan kenyamanan terbaik bagi
                    Anda dan keluarga
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
                      src="/images/booking/family-suite01_compressed.jpg"
                      alt="family-suite01_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-suite02_compressed.jpg"
                      alt="family-suite02_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-suite03_compressed.jpg"
                      alt="family-suite03_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-suite04_compressed.jpg"
                      alt="family-suite04_compressed.jpg"
                    />
                  </div>
                  <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-8 lg:mt-0 lg:pt-0 lg:text-wrap">
                    <div className="family-suite-desc-text">
                      <h1 className="card-title">Family Suite</h1>
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
                            Bathtub, living room, 2 bathroom, dan amenities
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
                    <h1 className="card-normal-title">Harga :</h1>
                    <h2 className="text-2xl font-semibold mt-6">
                      Rp. 1.500.000/malam
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
                  <div ref={fancyboxRefRoom2} className="grid-images">
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-studio01_compressed.jpg"
                      alt="family-studio01_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-studio02_compressed.jpg"
                      alt="family-studio02_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-studio03_compressed.jpg"
                      alt="family-studio03_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-studio04_compressed.jpg"
                      alt="family-studio04_compressed.jpg"
                    />
                  </div>
                  <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-8 lg:mt-0 lg:pt-0 lg:text-wrap">
                    <div className="family-suite-desc-text">
                      <h1 className="card-title">Family Studio</h1>
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
                            Dapur, Living Room, 1 Bathroom, dan Amenities
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
                    <h1 className="card-normal-title">Harga :</h1>
                    <h2 className="text-2xl font-semibold mt-6">
                      Rp. 1.300.000/malam
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
                      src="/images/booking/family-deluxe01_compressed.jpg"
                      alt="family-deluxe01_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-deluxe02_compressed.jpg"
                      alt="family-deluxe02_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-deluxe03_compressed.jpg"
                      alt="family-deluxe03_compressed.jpg"
                    />
                    <img
                      data-fancybox="gallery"
                      src="/images/booking/family-deluxe04_compressed.jpg"
                      alt="family-deluxe04_compressed.jpg"
                    />
                  </div>
                  <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-8 lg:mt-0 lg:pt-0 lg:text-wrap">
                    <div className="family-suite-desc-text">
                      <h1 className="card-title">Family Deluxe</h1>
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
                            Kapasitas 5 dewasa + 2 anak. 1 king bed dan 1 single
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
                            Free berenang untuk 5 dewasa & 2 anak
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
                            Wide Room, 1 Bathroom, dan Amenities
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
                    <h1 className="card-normal-title">Harga :</h1>
                    <h2 className="text-2xl font-semibold mt-6">
                      Rp. 1.300.000/malam
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
        <div className="wedding-container my-8">
          {/* title for Wedding section */}
          <LazyDiv>
            <div className="booking-title relative my-8 w-fit animate-fade-up">
              <h2 className="subtitle text-left">WEDDING HALL</h2>
              <h1 className="page-title">
                Wedding Hall Modern <br /> Untuk Hari Special Anda
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-blue-600"></span>
            </div>
          </LazyDiv>

          {/* wedding section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">
                Wedding hall kami dilengkapi dengan fasilitas modern dan tata
                ruang yang fleksibel, cocok untuk resepsi kecil hingga besar.
                Kami menyediakan ruang yang nyaman dan tertata untuk mendukung
                hari spesial Anda.
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
                      href="/images/booking/silver-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Silver Package"
                    >
                      <img
                        src="/images/booking/silver-package.png"
                        alt="silver package"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title font-semibold mb-2 !text-white">
                        Silver Wedding Package
                      </h3>
                      {/* <p className="  ">
                        Perfect for intimate weddings with essential services
                        included.
                      </p> */}
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20silver"
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
                      href="/images/booking/platinum-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Platinum Package"
                    >
                      <img
                        src="/images/booking/platinum-package.png"
                        alt="platinum package wedding"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title mb-2">
                        Platinum Wedding Package
                      </h3>
                      {/* <p className=" ">
                        A luxurious package for couples who want premium
                        arrangements.
                      </p> */}
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20platinum"
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
                      href="/images/booking/gold-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Gold Package"
                    >
                      <img
                        src="/images/booking/gold-package.png"
                        alt="gold package wedding"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title mb-2">
                        Gold Wedding Package
                      </h3>
                      {/* <p className=" ">
                        Balanced elegance and value, designed for medium-size
                        weddings.
                      </p> */}
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20gold"
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
                      href="/images/booking/royal-package.png"
                      data-fancybox="wedding-gallery"
                      data-caption="Royal Package"
                    >
                      <img
                        src="/images/booking/royal-package.png"
                        alt="royal package wedding"
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                      <h3 className="card-normal-title mb-2">
                        Royal Wedding Package
                      </h3>
                      {/* <p className=" ">
                        The ultimate fairy-tale experience with every luxury
                        included.
                      </p> */}
                      <a
                        href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20wedding%20royal"
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

            <LazyDiv>
              <div className="w-full flex justify-center items-center mt-12 animate-fade-up">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/sribudaya_resortaceh"
                  className="blue-btn flex items-center"
                >
                  <span>
                    <FontAwesomeIcon
                      icon="fa-brands fa-instagram"
                      className="text-3xl"
                    ></FontAwesomeIcon>
                  </span>
                  Lihat foto wedding lainnya di Instagram
                </a>
              </div>
            </LazyDiv>
          </div>
          {/* End of Wedding package list section */}
        </div>

        {/* Meeting Room Section */}
        <div className="wedding-package mt-10">
          {/* title for Meeting section */}
          <LazyDiv>
            <div className="booking-title relative my-8 w-fit animate-fade-up">
              <h2 className="subtitle text-left">Meeting Room</h2>
              <h1 className="page-title">
                Fasilitas Ruang Meeting <br /> Nyaman dan Profesional
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-blue-600"></span>
            </div>
          </LazyDiv>
          {/* Meeting section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">
                Ruang meeting yang dilengkapi dengan alat presentasi, tata ruang
                yang fleksibel, serta suasana kondusif untuk mendukung
                kelancaran rapat, seminar, atau acara perusahaan.
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
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
              }}
              modules={[Pagination]}
              className="myMeetingPackageSwiper"
            >
              <SwiperSlide>
                <div className="card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  <a
                    href="/images/booking/half-day-meetingA.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Half Day Meeting A Package"
                  >
                    <img
                      src="/images/booking/half-day-meetingA.png"
                      alt="silver package"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="card-normal-title font-semibold mb-2 !text-white">
                      Halfday Meeting A Package
                    </h3>

                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20halfday%20A"
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
                    href="/images/booking/half-day-meetingB.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Half Day Meeting B Package"
                  >
                    <img
                      src="/images/booking/half-day-meetingB.png"
                      alt="half-day-meetingB.png"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="card-normal-title mb-2">
                      Half Day Meeting B Package
                    </h3>
                    {/* <p className=" ">
                      A luxurious package for couples who want premium
                      arrangements.
                    </p> */}
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20halfday%20B"
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
                    href="/images/booking/half-day-meetingC.png"
                    data-fancybox="meeting-gallery"
                    data-caption="Half Day Meeting C Package"
                  >
                    <img
                      src="/images/booking/half-day-meetingC.png"
                      alt="half-day-meetingC.png"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="card-normal-title mb-2">
                      Half Day Meeting C Package
                    </h3>
                    {/* <p className=" ">
                      Balanced elegance and value, designed for medium-size
                      weddings.
                    </p> */}
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20halfday%20C"
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
                    href="/images/booking/one-day-meeting.png"
                    data-fancybox="meeting-gallery"
                    data-caption="One Day Meeting Package"
                  >
                    <img
                      src="/images/booking/one-day-meeting.png"
                      alt="one-day-meeting.png"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                  <div className="p-4 text-left bg-dark text-white flex flex-col flex-grow">
                    <h3 className="card-normal-title mb-2">
                      One Day Meeting Package
                    </h3>
                    {/* <p className=" ">
                      The ultimate fairy-tale experience with every luxury
                      included.
                    </p> */}
                    <a
                      href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20paket%20meeting%20one%20day"
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
                Kolam Renang Nyaman <br /> Cocok Untuk Keluarga
              </h1>
              <span className="absolute left-0 w-1/2 -bottom-4 h-[2px] bg-blue-600"></span>
            </div>
          </LazyDiv>
          {/* Swimming pool section description */}
          <LazyDiv>
            <div className="mb-8 w-fit animate-fade-right">
              <p className="page-title-desc">
                Nikmati kolam renang dengan ukuran luas, air yang selalu terjaga
                kebersihannya, dan area aman dan nyaman bagi anda dan keluarga.
              </p>
            </div>
          </LazyDiv>

          {/* swimmingpool package list */}
          <div className="wrapper max-w-6xl mx-auto flex justify-center items-center gap-2">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                650: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
              }}
              modules={[Pagination]}
              className="mySwimmingPackageSwiper"
            >
              <SwiperSlide>
                <div className="p-8 text-left bg-dark rounded-lg text-white flex flex-col flex-grow hover:shadow-xl transition-shadow">
                  <h3 className="card-normal-title font-semibold mb-2 !text-white pb-4 border-b-2 border-white text-center">
                    Pool Package
                  </h3>
                  <h4 className="text-2xl">Rp. 100.000/person</h4>
                  <ul className="mt-4 px-5">
                    <li className="list-disc">Berenang selama 3 jam</li>
                    <li className="list-disc">Free 1 handuk</li>
                    <li className="list-disc">
                      Makan (Nasi goreng/Indomie telur/Burger) *Pilih salah satu
                    </li>
                    <li className="list-disc">Minum (Teh dingin)</li>
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kolam%20renang%20dengan%20paket%20pool%20package"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue-btn mt-12 md:text-xl"
                  >
                    <span className="text-2xl pr-1">
                      <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                    </span>
                    Booking
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-8 text-left bg-dark rounded-lg text-white flex flex-col flex-grow hover:shadow-xl transition-shadow">
                  <h3 className="card-normal-title font-semibold mb-2 !text-white pb-4 border-b-2 border-white text-center">
                    Pool Regular
                  </h3>
                  <h4 className="text-2xl">Rp. 70.000/person</h4>
                  <ul className="mt-4 px-5">
                    <li className="list-disc">Berenang saja selama 3 jam</li>
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kolam%20renang%20dengan%20paket%20pool%20regular"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue-btn mt-12 md:text-xl"
                  >
                    <span className="text-2xl pr-1">
                      <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                    </span>
                    Booking
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-8 text-left bg-dark rounded-lg text-white flex flex-col flex-grow hover:shadow-xl transition-shadow">
                  <h3 className="card-normal-title font-semibold mb-2 !text-white pb-4 border-b-2 border-white text-center">
                    Pendamping
                  </h3>
                  <h4 className="text-2xl">Rp. 50.000/person</h4>
                  <ul className="mt-4 px-5">
                    <li className="list-disc">
                      Mendampingi saja di area kolam. Tidak boleh berenang
                    </li>
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=6282267878880&text=Halo%2C%20Saya%20mau%20booking%20kolam%20renang%20sebagai%20pendamping"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue-btn mt-12 md:text-xl"
                  >
                    <span className="text-2xl pr-1">
                      <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                    </span>
                    Booking
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* End of swimming package list section */}

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
                  <span className="text-left font-semibold">
                    Bagaimana cara booking kamar?
                  </span>
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
                      Anda bisa langsung klik tombol booking di paket yang anda
                      inginkan dan anda akan langsung diarahkan ke admin kami
                      melalui WhatsApp
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
                  <span className="text-left font-semibold">
                    Apakah tersedia extra bed?
                  </span>
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
                      Extra bed tersedia dengan biaya tambahan per malam.
                      Silakan hubungi resepsionis untuk informasi harga dan
                      ketersediaan.
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
                  <span className="text-left font-semibold">
                    Apakah tersedia parkir untuk tamu?
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
                      Ya, kami menyediakan area parkir luas dan gratis untuk
                      tamu yang menginap, termasuk parkir motor dan mobil.
                      beserta fasilitas lainnya
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

// * Contoh integrasi swiper dengan fancybox

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
