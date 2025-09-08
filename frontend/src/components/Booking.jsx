import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

// import fancybox dependencies
import useFancybox from "../fancybox";
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

  // useState to handle accordion opening and closing
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="booking" className="m-0 p-0  w-full">
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
            <div className="booking-hero-desc absolute z-30 inset-0  flex justify-center items-center text-white  flex-col">
              <div className="header text-center w-[85%]">
                <h1 className="text-3xl md:text-5xl font-bold p-5">
                  We offer you a cozy room suitable for you and your loved one!
                </h1>
              </div>
              <div className="subheader text-center px-4">
                <h2 className="font-semibold text-xl md:text-2xl">
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

      {/* Booking room section */}
      <div
        id="order-section"
        className="my-container w-full px-5 md:px-12 lg:px-24"
      >
        <div className="wrapper my-10">
          <div className="family-suite flex flex-col gap-5 justify-center">
            {/* title for booking section */}
            <div className="booking-title relative mt-8 w-fit">
              <h2 className="subtitle text-left">ROOM LIST</h2>
              <h1 className="title">Our Room For You</h1>
              <span className="absolute left-0 w-1/2  bottom-0 h-[2px] bg-blue-600"></span>
            </div>

            {/* booking section description */}
            <div className="booking-title  mb-8 w-fit">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                quidem quam est, exercitationem beatae, modi sequi porro
                quibusdam debitis, minima veniam temporibus molestias similique
                quae impedit et minus ipsa mollitia!
              </p>
            </div>

            {/* Booking room 1 */}
            <div
              id="booking-room1"
              className="w-full border-2 border-black rounded-lg flex justify-center items-center flex-col p-8 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row "
            >
              <div ref={fancyboxRefRoom1} className="grid-images ">
                <img data-fancybox="gallery" src="/images/contoh.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/wedding.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
              </div>
              <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-10 lg:mt-0 lg:pt-0 lg:text-wrap">
                <div className="family-suite-desc-text">
                  <h1 className="card-title">Family Suite</h1>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Neque fugit excepturi cumque qui optio, iste odit atque
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

            {/* Booking room 2 */}
            <div
              id="booking-room2"
              className="w-full border-2 border-black  rounded-lg flex justify-center items-center flex-col p-8 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row "
            >
              <div ref={fancyboxRefRoom2} className="grid-images ">
                <img data-fancybox="gallery" src="/images/contoh.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/wedding.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
              </div>
              <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-10 lg:mt-0 lg:pt-0 lg:text-wrap">
                <div className="family-suite-desc-text">
                  <h1 className="card-title">Family Studio</h1>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Neque fugit excepturi cumque qui optio, iste odit atque
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

            {/* Booking room 3 */}
            <div
              id="booking-room3"
              className="w-full border-2 border-black  rounded-lg flex justify-center items-center flex-col p-8 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row "
            >
              <div ref={fancyboxRefRoom3} className="grid-images ">
                <img data-fancybox="gallery" src="/images/contoh.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/wedding.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
              </div>
              <div className="family-suite-desc mt-6 w-auto lg:border-x-2 lg:border-black  text-left md:p-10 lg:mt-0 lg:pt-0 lg:text-wrap">
                <div className="family-suite-desc-text">
                  <h1 className="card-title">Family Deluxe</h1>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Neque fugit excepturi cumque qui optio, iste odit atque
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
          </div>
        </div>
      </div>

      {/* Wedding Section */}

      <div className="wedding-container py-24 px-5 md:px-12 lg:px-24 ">
        {/* title for Wedding section */}
        <div className="booking-title relative my-8 w-fit ">
          <h2 className="subtitle text-left">WEDDING HALL</h2>
          <h1 className="title">
            A Modern Wedding Hall Designed <br /> for Your Special Day
          </h1>
          <span className="absolute left-0 w-1/2  bottom-0 h-[2px] bg-blue-600"></span>
        </div>

        {/* wedding section description */}
        <div className="booking-title  mb-8 w-fit">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem
            quam est, exercitationem beatae, modi sequi porro quibusdam debitis,
            minima veniam temporibus molestias similique quae impedit et minus
            ipsa mollitia!
          </p>
        </div>

        <PackageCard />
      </div>

      {/* Accordion section */}
      <div className="accordion-container py-24 px-5 md:px-12 lg:px-24 ">
        {/* title for FAQ section */}
        <div className="booking-title relative mt-8 w-fit">
          <h2 className="subtitle text-left">F.A.Q.</h2>
          <h1 className="title">Frequently Asked Questions</h1>
          <span className="absolute left-0 w-1/2  bottom-0 h-[2px] bg-blue-600"></span>
        </div>

        <div className="w-full mt-10 rounded-xl">
          {/* Item 1 */}
          <div className="border mt-2 bg-main rounded-lg border-black ">
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
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="border mt-2 bg-main rounded-lg border-black ">
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
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="border mt-2 rounded-lg bg-main border-black ">
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
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
