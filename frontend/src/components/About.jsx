// import React from "react";

// const About = () => {
//   return <div>About</div>;
// };

// export default About;
// export default function About() {
//   return (
//     <section className="p-10 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-6">Tentang Kami</h2>
//       <p className="text-gray-700 mb-4">
//         Sribudaya Resort & Homestay bermula dari sebuah mimpi sederhana: menciptakan tempat di mana orang dapat melarikan diri dari hiruk pikuk kota,
//         dan menemukan ketenangan di tengah hiruk-pikuk perkotaan.
//       </p>
//       <p className="text-gray-700 mb-4">
//         Sejak berdiri pada tahun 2010, kami terus berkomitmen memberikan pengalaman menginap terbaik dengan memadukan kenyamanan modern
//         dan keindahan tradisional. Kami percaya bahwa setiap tamu adalah bagian dari keluarga besar kami.
//       </p>
//       <p className="text-gray-700">
//         Visi kami adalah menjadi resort pilihan utama di Aceh dengan menghadirkan pengalaman liburan yang tak terlupakan,
//         dan misi kami adalah memberikan pelayanan sepenuh hati bagi setiap tamu yang datang.
//       </p>
//     </section>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// export default function About() {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-fixed text-white"
//       style={{ backgroundImage: "url('/images/resort-building.jpg')" }} // ganti dengan nama file gambarmu
//     >
//       {/* Overlay biar teks lebih jelas */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Konten */}
//       <div className="relative p-10 max-w-4xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-6">Tentang Kami</h2>
//         <p className="mb-4">
//           Sribudaya Resort & Homestay bermula dari sebuah mimpi sederhana:
//           menciptakan tempat di mana orang dapat melarikan diri dari hiruk pikuk
//           kota, dan menemukan ketenangan di tengah hiruk-pikuk perkotaan.
//         </p>
//         <p className="mb-4">
//           Sejak berdiri pada tahun 2010, kami terus berkomitmen memberikan
//           pengalaman menginap terbaik dengan memadukan kenyamanan modern dan
//           keindahan tradisional. Kami percaya bahwa setiap tamu adalah bagian
//           dari keluarga besar kami.
//         </p>
//         <p>
//           Visi kami adalah menjadi resort pilihan utama di Aceh dengan
//           menghadirkan pengalaman liburan yang tak terlupakan, dan misi kami
//           adalah memberikan pelayanan sepenuh hati bagi setiap tamu yang datang.
//         </p>
//       </div>
//     </section>
    
//   );
// }
const testimonials = [
  {
    name: "Hannah Schmitt",
    role: "Lead Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    img: "/images/client1.jpg",
  },
  {
    name: "John Doe",
    role: "CEO Company",
    text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.",
    img: "/images/client2.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.",
    img: "/images/client3.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.",
    img: "/images/client3.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.",
    img: "/images/client3.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    text: "Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.",
    img: "/images/oran3.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-10">People Love Us</h2>
      <Swiper
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={
          {
            delay: 3000
          }
        }

        speed={2000}
        modules={[Navigation, Pagination, Autoplay]}
        className="px-6 md:px-12 lg:px-20"
        breakpoints={{
          0: { slidesPerView: 1 },     // HP
          640: { slidesPerView: 1 },   // small tablet
          768: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 3 },  // desktop
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg text-center overflow-hidden h-full">
              {/* dekorasi biru */}
              <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-blue-600 rounded-tl-[100px] rotate-12 opacity-70 z-0"></div>
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-600 rounded-br-[100px] -rotate-12 opacity-70 z-0"></div>

              {/* konten */}
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-blue-600 text-sm mb-4">{item.role}</p>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;