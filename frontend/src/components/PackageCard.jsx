// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

import { Autoplay, Pagination, Parallax } from "swiper/modules";

const PackageCard = () => {
  const weddingSlide = [
    {
      id: 1,
      src: "/images/booking/wedding-slide1.jpg",
      alt: "wedding-slide1.jpg",
      title: "Momen Romantis yang Abadi",
      desc: "Rayakan awal kisah cinta Anda di tempat yang elegan dengan dekorasi menawan dan suasana penuh kehangatan.",
    },
    {
      id: 2,
      src: "/images/booking/wedding-slide2.jpg",
      alt: "wedding-slide2.jpg",
      title: "Venue Eksklusif",
      desc: "Ruang yang luas dan indah, sempurna untuk berbagi kebahagiaan bersama keluarga dan sahabat.",
    },
    {
      id: 3,
      src: "/images/booking/wedding-slide3.jpg",
      alt: "wedding-slide3.jpg",
      title: "Pelayanan Profesional",
      desc: "Tim berpengalaman siap membantu setiap detail agar hari istimewa Anda berjalan sempurna.",
    },
    {
      id: 4,
      src: "/images/booking/wedding-slide4.jpg",
      alt: "wedding-slide4.jpg",
      title: "Kenangan Tak Terlupakan",
      desc: "Ciptakan momen indah yang akan dikenang sepanjang masa dengan paket pernikahan terbaik kami.",
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="wrapper ">
        <div className="hero-slides h-[36rem] relative">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            parallax={true}
            speed={1800}
            loop="true"
            modules={[Pagination, Autoplay, Parallax]}
            className="mySwiper "
          >
            {weddingSlide.map((slide, idx) => (
              <SwiperSlide key={idx} className="group">
                <img
                  className="w-full h-full object-cover transition-transform transform duration-700 group-hover:scale-110"
                  src={slide.src}
                  alt={slide.alt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute left-0 bottom-0  text-left p-8">
                  <h1
                    className="page-title !text-white !mb-2"
                    data-swiper-parallax="-1200"
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="page-title-desc w-2/3 text-white "
                    data-swiper-parallax="-600"
                  >
                    {slide.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
