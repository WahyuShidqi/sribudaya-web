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

export default function About() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/images/resort-building.jpg')" }} // ganti dengan nama file gambarmu
    >
      {/* Overlay biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten */}
      <div className="relative p-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Tentang Kami</h2>
        <p className="mb-4">
          Sribudaya Resort & Homestay bermula dari sebuah mimpi sederhana: menciptakan tempat di mana orang dapat melarikan diri dari hiruk pikuk kota, 
          dan menemukan ketenangan di tengah hiruk-pikuk perkotaan.
        </p>
        <p className="mb-4">
          Sejak berdiri pada tahun 2010, kami terus berkomitmen memberikan pengalaman menginap terbaik dengan memadukan kenyamanan modern 
          dan keindahan tradisional. Kami percaya bahwa setiap tamu adalah bagian dari keluarga besar kami.
        </p>
        <p>
          Visi kami adalah menjadi resort pilihan utama di Aceh dengan menghadirkan pengalaman liburan yang tak terlupakan, 
          dan misi kami adalah memberikan pelayanan sepenuh hati bagi setiap tamu yang datang.
        </p>
      </div>
    </section>
  );
}

