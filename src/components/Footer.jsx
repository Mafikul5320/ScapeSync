import { FaYoutube, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c3d34] text-white px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/Logo_white.png" alt="Logo" className="w-40 sm:w-48 md:w-56" />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base text-center lg:text-left max-w-md">
          Your all-in-one platform for job scheduling, employee <br />
          management, and client service built to keep your <br />
          business running smoothly from anywhere.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {/* App Store */}
          <div className="flex items-center gap-3 px-6 sm:px-8 py-2 border border-[#abdaa9] rounded-xl shadow hover:shadow-md transition">
            <FaApple className="w-7 h-7 sm:w-8 sm:h-8" />
            <div className="text-left">
              <p className="text-xs text-white">Download on the</p>
              <p className="text-base sm:text-lg font-semibold text-white">App Store</p>
            </div>
          </div>

          {/* Google Play */}
          <div className="flex items-center gap-3 px-6 sm:px-8 py-2 border border-[#abdaa9] rounded-xl shadow hover:shadow-md transition">
            <img src="./Playstore.png" alt="Google Play" className="w-7 sm:w-8" />
            <div className="text-left">
              <p className="text-xs text-white">Download on the</p>
              <p className="text-sm sm:text-base font-semibold text-white">Google Play</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <img className="absolute top-0 right-0 opacity-35 w-40 sm:w-60 md:w-80" src="/sape_1.png" />
      <img className="absolute bottom-0 right-0 opacity-35 w-40 sm:w-60 md:w-80" src="/sape_2.png" />
      <img className="absolute bottom-0 right-20 md:right-28 opacity-35 w-28 sm:w-36 md:w-48" src="/sape_3.png" />

      {/* Social + Bottom */}
      <div className="mt-10">
        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-6 text-xl sm:text-2xl text-white">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-xs sm:text-sm text-gray-400 text-center">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
