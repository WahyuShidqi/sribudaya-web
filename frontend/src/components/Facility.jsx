// // import React from "react";
// // const Facility = () => {
// // };
// // export default Facility;
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../swiper-styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const facilities = [
  {
    title: "Kolam Renang Outdoor",
    description:
      "Nikmati sensasi berenang di bawah langit biru Aceh, dikelilingi taman tropis yang menenangkan.",
    image:
      "https://dekorrumah.net/wp-content/uploads/2017/06/desain-kolam-renang-mewah-modern.jpg",
  },
  {
    title: "Wi-Fi Cepat & Gratis",
    description:
      "Internet berkecepatan tinggi tersedia di seluruh area resort, agar Anda tetap terhubung.",
    image:
      "https://desaingriyaku.com/wp-content/uploads/2023/06/mushola-al-hafizh.jpg",
  },
  {
    title: "Musholla",
    description:
      "Musholla bersih dan tenang tersedia agar ibadah Anda tetap khusyuk di tengah liburan.",
    image:
      "https://desaingriyaku.com/wp-content/uploads/2023/06/mushola-al-hafizh.jpg",
  },
  {
    title: "Parking Area",
    description:
      "Nikmati kenyamanan parkir pribadi gratis yang aman dan luas untuk kendaraan Anda selama menginap.",
    image:
      "https://desaingriyaku.com/wp-content/uploads/2023/06/mushola-al-hafizh.jpg",
  },
  {
    title: "Kamar Bebas Rokok",
    description:
      "Kamar bebas rokok yang bersih dan nyaman untuk menjaga kualitas udara dan kesehatan Anda.",
    image:
      "https://desaingriyaku.com/wp-content/uploads/2023/06/mushola-al-hafizh.jpg",
  },
  {
    title: "Layanan Kamar",
    description:
      "Nikmati kenyamanan dengan layanan kamar yang siap membantu kebutuhan Anda setiap saat.",
    image:
      "https://desaingriyaku.com/wp-content/uploads/2023/06/mushola-al-hafizh.jpg",
  },
  {
    title: "Coffee Shop",
    description:
      "Nikmati secangkir kopi hangat atau minuman segar di coffee shop kami, tempat sempurna untuk bersantai dan berbincang.",
    image:
      "https://desaingriyaku.com/wp-content/uploads/2023/06/mushola-al-hafizh.jpg",
  },
  {
    title: "Wedding Venue",
    description:
      "Raih momen sakral Anda di tempat yang indah dengan pemandangan mempesona dan pelayanan terbaik untuk pernikahan tak terlupakan.",
    image:
      "https://nibble-images.b-cdn.net/nibble/original_images/wedding-venue-bogor-5.jpg",
  },
];

const Facility = () => {
  return (
    <section className=" bg-[#ece6df]">
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
                <h1 className="font-normal text-6xl font-beau-rivage mb-4">
                  Fasilitas Unggulan Kami
                </h1>
              </div>
              <div className="subheader text-center px-4">
                <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white mb-4 tracking-wide">
                  Selamat datang di{" "}
                  <span className="font-semibold text-white">
                    Sribudaya Resort & Homestay
                  </span>
                  , tempat di mana kenyamanan bertemu dengan kehangatan Aceh.
                  Setiap fasilitas dirancang untuk menghadirkan{" "}
                  <span className="font-semibo">
                    momen berharga yang tak terlupakan
                  </span>{" "}
                  selama liburan Anda.
                </p>
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

      {/* List Fasilitas */}
      <div className="space-y-12 py-10 px-6 md:px-20">
        {facilities.map((facility, index) => {
          if (facility.title === "Wedding Venue") {
            // Khusus Wedding Venue
            return (
              <div key={index} className="relative w-full h-[500px] mb-12">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center rounded-2xl px-6">
                  <h3 className="text-4xl font-beau-rivage text-white mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-lg text-gray-100 max-w-2xl">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          } else {
            // Fasilitas lainnya
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center overflow-hidden ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Gambar */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full md:w-1/2 h-80 object-cover rounded-2xl"
                />

                {/* Teks */}
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl  font-beau-rivage text-[#000000] mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-gray-800 text-base leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Facility;
