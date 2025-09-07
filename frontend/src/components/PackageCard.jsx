// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

import { Autoplay, Pagination, Parallax } from "swiper/modules";

const PackageCard = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="wrapper ">
        <div className="hero-slides h-[80vh] relative">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
            }}
            parallax={true}
            lazy={true}
            speed={1800}
            loop="true"
            modules={[Pagination, Autoplay, Parallax]}
            className="mySwiper "
          >
            <SwiperSlide>
              <img className="" src="/images/hotel.jpg" loading="lazy" alt="" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10 bg-black bg-opacity-60">
                <div className="p-8">
                  <h1
                    className="w-full card-title text-center  text-white"
                    data-swiper-parallax="-1200"
                  >
                    Halo Dunia
                  </h1>
                  <p className="text-white" data-swiper-parallax="-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    incidunt fuga minima consequuntur, vero unde, amet veritatis
                    rem quibusdam cupiditate totam delectus. Quaerat esse velit
                    eaque necessitatibus aliquam natus atque?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=""
                src="/images/contoh.jpg"
                loading="lazy"
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10 bg-black bg-opacity-60">
                <div className="p-8">
                  <h1
                    className="w-full card-title text-center  text-white"
                    data-swiper-parallax="-1200"
                  >
                    Halo Dunia
                  </h1>
                  <p className="text-white" data-swiper-parallax="-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    incidunt fuga minima consequuntur, vero unde, amet veritatis
                    rem quibusdam cupiditate totam delectus. Quaerat esse velit
                    eaque necessitatibus aliquam natus atque?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=""
                src="/images/wedding.jpg"
                loading="lazy"
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10 bg-black bg-opacity-60">
                <div className="p-8">
                  <h1
                    className="w-full card-title text-center  text-white"
                    data-swiper-parallax="-1200"
                  >
                    Halo Dunia
                  </h1>
                  <p className="text-white" data-swiper-parallax="-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    incidunt fuga minima consequuntur, vero unde, amet veritatis
                    rem quibusdam cupiditate totam delectus. Quaerat esse velit
                    eaque necessitatibus aliquam natus atque?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src="/images/hotel.jpg" loading="lazy" alt="" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10 bg-black bg-opacity-60">
                <div className="p-8">
                  <h1
                    className="w-full card-title text-center  text-white"
                    data-swiper-parallax="-1200"
                  >
                    Halo Dunia
                  </h1>
                  <p className="text-white" data-swiper-parallax="-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    incidunt fuga minima consequuntur, vero unde, amet veritatis
                    rem quibusdam cupiditate totam delectus. Quaerat esse velit
                    eaque necessitatibus aliquam natus atque?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=""
                src="/images/wedding.jpg"
                loading="lazy"
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10 bg-black bg-opacity-60">
                <div className="p-8">
                  <h1
                    className="w-full card-title text-center  text-white"
                    data-swiper-parallax="-1200"
                  >
                    Halo Dunia
                  </h1>
                  <p className="text-white" data-swiper-parallax="-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    incidunt fuga minima consequuntur, vero unde, amet veritatis
                    rem quibusdam cupiditate totam delectus. Quaerat esse velit
                    eaque necessitatibus aliquam natus atque?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=""
                src="/images/contoh.jpg"
                loading="lazy"
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10 bg-black bg-opacity-60">
                <div className="p-8">
                  <h1
                    className="w-full card-title text-center  text-white"
                    data-swiper-parallax="-1200"
                  >
                    Halo Dunia
                  </h1>
                  <p className="text-white" data-swiper-parallax="-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    incidunt fuga minima consequuntur, vero unde, amet veritatis
                    rem quibusdam cupiditate totam delectus. Quaerat esse velit
                    eaque necessitatibus aliquam natus atque?
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Description for Hero section */}
          {/* <div className="booking-hero-desc absolute z-30 inset-0  flex justify-center items-center text-white  flex-col">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
