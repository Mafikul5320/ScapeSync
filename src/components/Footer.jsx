import { FaYoutube, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaApple, FaRegCalendarCheck } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-[#0c3d34] text-white px-8 md:px-25 lg:px-34 py-25 relative">
            <div>

                {/* Left side: Logo & Text */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div >
                        <img src="/Logo_white.png" alt="" />
                    </div>

                    {/* Description */}
                    <p className=" text-gray-300">
                        Your all-in-one platform for job scheduling, employee <br /> management, and client
                        service built to keep your <br /> business running smoothly from anywhere.
                    </p>
                    {/* Store buttons */}
                    <div className="mt-11 flex flex-wrap justify-center lg:justify-start gap-4">
                        <div
                            href="#"
                            className="flex items-center gap-3 px-5 py-3 bg-white border border-[#abdaa9] rounded-xl shadow hover:shadow-md transition"
                        >
                            <FaApple className="w-8 h-8" />
                            <div className="text-left">
                                <p className="text-xs text-gray-500">Download on the</p>
                                <p className="text-sm font-semibold text-gray-900">App Store</p>
                            </div>
                        </div>

                        <div
                            href="#"
                            className="flex items-center gap-3 px-5 py-3 bg-white border border-[#abdaa9] rounded-xl shadow hover:shadow-md transition"
                        >
                            <img src="./Playstore.png" alt="" />
                            <div className="text-left">
                                <p className="text-xs text-gray-500">Download on the</p>
                                <p className="text-sm font-semibold text-gray-900">
                                    Google Play
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-xl text-gray-300">
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
            </div>

            {/* Bottom Text */}
            <div className="border-t border-gray-600 mt-6 pt-4 text-xs text-gray-400 text-center md:text-left">
                © 2021-2025, ScapeSync. All Rights Reserved.
            </div>

            {/* Background shapes */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
                <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full fill-green-700"
                >
                    <path d="M42.4,-74.1C55.6,-67.1,68,-55.2,75.9,-40.4C83.9,-25.7,87.5,-8.1,83.8,7.7C80,23.4,68.9,37.2,56.1,48.8C43.4,60.4,29,69.8,13.2,75.5C-2.6,81.3,-19.7,83.5,-34.2,76.7C-48.7,70,-60.5,54.3,-69,37.2C-77.5,20.2,-82.7,1.9,-78.5,-13.8C-74.3,-29.5,-60.7,-42.7,-46,-50.3C-31.3,-58,-15.6,-60.1,0.5,-60.7C16.6,-61.3,33.3,-60.4,42.4,-74.1Z" />
                </svg>
            </div>
        </footer>
    );
};

export default Footer;