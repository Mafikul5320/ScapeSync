import { FaYoutube, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c3d34] text-white px-6 md:px-12 lg:px-20 py-16 relative">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

        {/* Left side: Logo */}
        <div className="flex-shrink-0">
          <img src="/Logo_white.png" alt="Logo" className="w-36 md:w-44 lg:w-52" />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed">
          Your all-in-one platform for job scheduling, employee <br className="hidden md:block" /> 
          management, and client service built to keep your <br className="hidden md:block" /> 
          business running smoothly from anywhere.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-3 px-6 py-2 border border-[#abdaa9] rounded-xl shadow hover:shadow-md transition w-full sm:w-auto">
            <FaApple className="w-8 h-8" />
            <div className="text-left">
              <p className="text-xs text-white">Download on the</p>
              <p className="text-lg font-semibold text-white">App Store</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-2 border border-[#abdaa9] rounded-xl shadow hover:shadow-md transition w-full sm:w-auto">
            <img src="./Playstore.png" alt="Playstore" className="w-8 h-8" />
            <div className="text-left">
              <p className="text-xs text-white">Download on the</p>
              <p className="text-sm font-semibold text-white">Google Play</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <img className="absolute top-0 right-0 opacity-35 max-w-[180px] md:max-w-[260px]" src="/sape_1.png" />
      <img className="absolute bottom-0 right-0 opacity-35 max-w-[180px] md:max-w-[260px]" src="/sape_2.png" />
      <img className="absolute bottom-0 right-63 opacity-35 w-[25%] md:w-[16%]" src="/sape_3.png" />

      {/* Social Icons & Bottom Text */}
      <div className="mt-10">
        <div className="flex justify-center lg:justify-start gap-6 text-xl">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        <div className="border-t border-gray-600 mt-6 pt-4 text-xs text-gray-400 text-center">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
