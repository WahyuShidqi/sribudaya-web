import React from "react";

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

// import font awesome icon

import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
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

  return (
    <section id="booking" className="m-0 p-0 w-full">
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
            <div className="booking-hero-desc absolute z-30 inset-0  flex justify-center items-center text-white flex-col">
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
                  <a href="#order-section" className="green-btn">
                    Book Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking room section */}
      <div className="my-container w-full">
        <div className="wrapper my-10">
          <div className="family-suite ">
            {/* Booking room 1 */}
            <div
              id="booking-room1"
              className="w-full flex justify-center flex-col p-10 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row "
            >
              <div ref={fancyboxRefRoom1} className="grid-images ">
                <img data-fancybox="gallery" src="/images/contoh.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/wedding.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
              </div>
              <div className="family-suite-desc p-10  w-auto lg:text-left lg:text-wrap">
                <h1 className="font-normal text-6xl font-beau-rivage mb-4">
                  Family Suite
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fugit excepturi cumque qui optio, iste odit atque
                </p>
              </div>
            </div>

            {/* Booking room 2 */}
            {/* <div
              id="booking-room2"
              className="w-full bg-green-700 flex justify-center items-center flex-col p-10 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row-reverse "
            >
              <div ref={fancyboxRefRoom2} className="grid-images ">
                <img data-fancybox="gallery" src="/images/contoh.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/wedding.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
              </div>
              <div className="family-suite-desc text-white p-10 text-center lg:w-1/2 lg:text-left lg:text-wrap">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fugit excepturi cumque qui optio, iste odit atque
                  expedita? Quasi mollitia, officiis illo perferendis odit
                  quisquam explicabo. Aspernatur temporibus repudiandae
                  asperiores! Dolor veritatis temporibus, ipsa, sapiente, ipsum
                  libero minus aut odit facere quibusdam excepturi sequi
                  repudiandae possimus perferendis? Nihil perferendis totam
                  voluptate eaque sapiente, impedit, corporis eveniet sit
                  reiciendis, eos enim! Similique repudiandae porro aliquam
                  animi, praesentium ipsa autem officia! Vitae commodi facere
                  dolore, fuga odio amet placeat, doloribus animi voluptatum in
                  perferendis dolor, beatae necessitatibus. Labore minus maiores
                  quia omnis.
                </p>
              </div>
            </div> */}

            {/* Booking room 3 */}
            {/* <div
              id="booking-room3"
              className="w-full flex justify-center items-center flex-col p-10 md:mb-8 lg:mb-12 md:gap-5 lg:flex-row "
            >
              <div ref={fancyboxRefRoom3} className="grid-images ">
                <img data-fancybox="gallery" src="/images/contoh.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/wedding.jpg" alt="" />
                <img data-fancybox="gallery" src="/images/hotel.jpg" alt="" />
              </div>
              <div className="family-suite-desc p-10 text-center lg:w-1/2 lg:text-left lg:text-wrap">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque fugit excepturi cumque qui optio, iste odit atque
                  expedita? Quasi mollitia, officiis illo perferendis odit
                  quisquam explicabo. Aspernatur temporibus repudiandae
                  asperiores! Dolor veritatis temporibus, ipsa, sapiente, ipsum
                  libero minus aut odit facere quibusdam excepturi sequi
                  repudiandae possimus perferendis? Nihil perferendis totam
                  voluptate eaque sapiente, impedit, corporis eveniet sit
                  reiciendis, eos enim! Similique repudiandae porro aliquam
                  animi, praesentium ipsa autem officia! Vitae commodi facere
                  dolore, fuga odio amet placeat, doloribus animi voluptatum in
                  perferendis dolor, beatae necessitatibus. Labore minus maiores
                  quia omnis.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
