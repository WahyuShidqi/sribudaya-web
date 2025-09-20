const Footer = () => {
  return (
    <div className="relative  bg-stone-900 text-white">
      {/* <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg> */}
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg> */}
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Sribudaya Resort.
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                Resort indah, dan natural untuk liburan keluarga anda
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                Sribudaya Resort Aceh berkomitmen untuk memberikan pelayanan
                terbaik bagi kenyamanan anda dan keluarga
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-2">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/booking"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Booking
                  </a>
                </li>
                <li>
                  <a
                    href="/facility"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    facility
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Contact Information
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://wa.me/6282267878880"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6282267878880"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Phone : 0822-6787-8880
                  </a>
                </li>
                <li>
                  Address: <br />
                  Jl. Soekarno Hatta, Lampeuneurut Ujong Blang, Darul Imarah,
                  Aceh Besar.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright {new Date().getFullYear()} Sribudaya Resort. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
