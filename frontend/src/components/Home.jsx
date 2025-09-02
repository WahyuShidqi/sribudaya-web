// import React from "react";

// const Home = () => {
//   return <div>home</div>;
// };

// export default Home;

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/resort-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-6xl font-bold">Selamat Datang di Sribudaya Resort & Homestay</h1>
            <p className="mt-4 text-lg">Nikmati keindahan alam & kenyamanan terbaik untuk liburan Anda</p>
            <Link to="/booking" className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400">
              Booking Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Tentang singkat */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Kenapa Memilih Kami?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kami bukan sekadar resort, tapi sebuah pengalaman. Dari pemandangan tropis hingga pelayanan hangat, kami siap menemani liburan Anda.
        </p>
      </section>
    </div>
  );
}

