import React from "react";
import { FaApple, FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineAim } from "react-icons/ai";
import { BsGraphDown } from "react-icons/bs";
import { FiShield } from "react-icons/fi";


const HeroSection = () => {
    const features = [
        {
            icon: <FaRegCalendarCheck className="w-6 h-6 text-[#2f822a]" />,
            title: "Easy Service Booking",
            description:
                "Streamlined booking process for clients with service catalogs and availability.",
        },
        {
            icon: <AiOutlineAim className="w-6 h-6 text-[#2f822a]" />,
            title: "Real-Time Tracking",
            description:
                "Monitor job progress, employee hours, and project timelines with live updates.",
        },
        {
            icon: <BsGraphDown className="w-6 h-6 text-[#2f822a]" />,
            title: "Performance Analytics",
            description:
                "Comprehensive reporting and insights to improve business operations and efficiency.",
        },
        {
            icon: <FiShield className="w-6 h-6 text-[#2f822a]" />,
            title: "Secure & Reliable",
            description:
                "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
        },
    ];
    return (
        <div className="relative">

            <div className='w-120 h-130 bg-green-300/70 rounded-full blur-3xl opacity-20 absolute -left-60 -top-23 z-50'></div>


            {/* Main content */}
            <div className="relative z-10 w-11/13 mx-auto  flex flex-col lg:flex-row items-center justify-between">
                {/* Left content */}
                <div className="max-w-xl text-center lg:text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold relative leading-tight text-gray-900">
                        All Your Jobs <br />
                        <span className="text-gray-900">One Smart App</span>
                        <img className="justify-end flex w-[62%] absolute right-19 -bottom-2" src="/unerline.png" alt="" />
                        <img className="justify-end flex absolute right-64 -top-13" src="/Vector.png" alt="" />
                    </h1>
                    <p className="mt-7 text-lg text-gray-600 leading-relaxed">
                        Built for business owners, employees, and clients streamline job
                        scheduling, service tracking, and team management in one <br /> powerful
                        app.
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

                <div className="relative mt-12 lg:mt-0">
                    {/* Glow behind phone */}
                    <div className="absolute w-[450px] h-[450px] rounded-full 
        bg-gradient-to-tr from-green-300 via-green-200 to-transparent 
         opacity-30 bottom-28 right-50 blur-[80px] overflow-hidden"></div>

                    {/* Phone mockup */}
                    <div className="relative z-10 ">
                        <img className="w-[320px] lg:w-[870px] overflow-hidden" src="/hand_phone.png" alt="App Preview" />
                    </div>

                    {/* Fade overlay ON TOP */}
                    <div className="absolute -bottom-10 left-0 w-full h-56 
      bg-gradient-to-b from-white/0 via-white/90 to-white z-50 pointer-events-none"></div>
                </div>

            </div>
            <section className="bg-white py-16">
                <div className="w-11/13 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`${index !== features.length - 1 ? "border-r border-r-gray-100" : ""
                                    } pr-6`}
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#ecfceb]">
                                    {feature.icon}
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HeroSection;
