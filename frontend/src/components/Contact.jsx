// Import for awesome icon plugin
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
// end of font awesome import

const Contact = () => {
  return (
    <section>
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contoh.jpg" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white flex justify-center animate-fade-up">
            <h1 className="text-2xl text-center text-wrap w-2/3 md:text-6xl font-bold">
              Contact Information
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-screen p-8 flex flex-col items-center">
        <div className="max-w-4xl w-full animate-fade-up">
          {/* Header */}
          <div className="text-center mb-10 mt-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-wide">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-white-700">
              Kami siap menyambut Anda di Sribudaya Resto & Homestay. <br />{" "}
              Silakan hubungi kami melalui informasi berikut.
            </p>
          </div>

          <div className="grid md:grid-cols-2 text-white">
            {/* Contact Information */}
            <div className="bg-green-700 p-8 shadow-xl transition-all duration-400 hover:shadow-2xl md:border-r md:border-black">
              <h2 className="text-3xl text-center font-epunda-slab text-white mb-6 border-b-2 border-white pb-4">
                Informasi Kontak
              </h2>
              <ul className="space-y-6 text-lg">
                <li className="flex items-center space-x-4">
                  <span className="text-2xl ">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  </span>
                  <span className="font-semibold">
                    Alamat : <br />
                    <span className="font-normal">
                      Jl. Soekarno Hatta, Lampeuneurut Ujong Blang, Darul
                      Imarah, Aceh Besar.
                    </span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-2xl ">
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                  </span>
                  <span className="font-semibold">
                    Telepon :
                    <span className="font-normal pl-2">0822-6787-8880</span>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-3xl ">
                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                  </span>
                  <span className="font-semibold">
                    WhatsApp :
                    <a
                      href="https://wa.me/6282267878880"
                      className="text-white font-normal pl-2 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (+62)-822-6787-8880
                    </a>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-3xl ">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                  </span>
                  <span className="font-semibold">
                    Instagram :
                    <a
                      href="https://instagram.com/sribudaya_resortaceh"
                      className="text-white font-normal pl-2 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @sribudaya_resortaceh
                    </a>
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-3xl ">
                    <FontAwesomeIcon icon="fa-brands fa-tiktok" />
                  </span>
                  <span className="font-semibold">
                    TikTok :
                    <a
                      href="https://www.tiktok.com/@sribudayaresortaceh"
                      className="text-white font-normal pl-2 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @sribudayaresortaceh
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            {/* Google Maps */}
            <div className="w-full h-[24rem] md:h-full overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
              <iframe
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3493821911425!2d95.32108227506707!3d5.5150531944649845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040392caa277e19%3A0xd761fb6d5e2daf74!2sSribudaya%20resort%20%26%20homestay!5e0!3m2!1sen!2sid!4v1757240120401!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center mt-12 text-gray-600 italic">
            If you have any questions, feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
