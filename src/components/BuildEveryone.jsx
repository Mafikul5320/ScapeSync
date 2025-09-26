import React from 'react';

const BuildEveryone = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="relative">
                <h1 className="text-center font-bold backdrop-blur-md text-3xl sm:text-4xl md:text-5xl">
                    Build for Everyone
                </h1>
                <img
                    className="absolute right-10 sm:right-32 md:right-44 lg:right-[374px] top-9 sm:top-8 md:top-12"
                    src="/underline_2.png"
                    alt="underline"
                />
                <p className="text-center text-sm sm:text-base text-gray-400 py-4 sm:py-6">
                    Whether you're booking services, managing tasks, or running operations, we've <br className="hidden sm:block" />
                    designed the perfect experience for you.
                </p>
            </div>

            {/* First */}
            <div className="flex flex-col md:flex-row items-center justify-between my-12 md:my-20 gap-10">
                <div className="mt-6 md:mt-26">
                    <button className="border px-4 sm:px-5 py-1 rounded-full border-[#3ba334] text-[#3ba334] font-medium">
                        Users
                    </button>
                    <div>
                        <h1 className="font-bold text-base sm:text-lg py-3">
                            Book services, track progress <br className="hidden sm:block" />
                            and stay updated
                        </h1>
                        <p className="text-gray-400 pb-5 text-sm sm:text-base">
                            Easily schedule appointments, get real-time updates, and <br className="hidden sm:block" />
                            enjoy a smooth, transparent service experience.
                        </p>
                        <div className="space-y-3">
                            <h1 className="border-l-4 border-[#3ba334] pl-3 font-semibold text-sm sm:text-base">
                                Book services in seconds
                            </h1>
                            <h1 className="border-l-4 border-[#76bf71] pl-3 font-semibold text-sm sm:text-base">
                                Track real-time job updates
                            </h1>
                            <h1 className="border-l-4 border-[#b0daad] pl-3 font-semibold text-sm sm:text-base">
                                Schedule appointments at your convenience
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    {/* Glow background */}
                    <div className="absolute w-[300px] sm:w-[400px] md:w-[530px] h-[300px] sm:h-[400px] md:h-[530px] rounded-full 
                        bg-gradient-to-tr from-green-300 via-green-200 to-transparent 
                        opacity-30 bottom-6 right-0 blur-[60px] md:blur-[80px] z-0">
                    </div>

                    {/* Phone image */}
                    <img className="relative z-10 w-[220px] sm:w-[280px] md:w-auto" src="/Mobile_two.png" alt="" />
                </div>
            </div>

            {/* Second */}
            <div className="flex flex-col md:flex-row items-center justify-between my-12 md:my-20 gap-10">
                <div className="relative flex justify-center order-1 md:order-none">
                    {/* Glow background */}
                    <div className="absolute w-[300px] sm:w-[400px] md:w-[530px] h-[300px] sm:h-[400px] md:h-[530px] rounded-full 
                        bg-gradient-to-tr from-green-300 via-green-200 to-transparent 
                        opacity-30 bottom-6 right-0 blur-[60px] md:blur-[80px] z-0">
                    </div>

                    {/* Phone image */}
                    <img className="relative z-10 w-[220px] sm:w-[280px] md:w-auto" src="/Mobile_three.png" alt="" />
                </div>

                <div className="mt-6 md:mt-26">
                    <button className="border px-4 sm:px-5 py-1 rounded-full border-[#3ba334] text-[#3ba334] font-medium">
                        Business Owners
                    </button>
                    <div>
                        <h1 className="font-bold text-base sm:text-lg py-3">
                            Assign jobs, monitor performance, and <br className="hidden sm:block" />
                            streamline operations.
                        </h1>
                        <p className="text-gray-400 pb-5 text-sm sm:text-base">
                            Gain full control of your workforce with real-time tracking, smart scheduling, and <br className="hidden sm:block" />
                            service management in one app.
                        </p>
                        <div className="space-y-3">
                            <h1 className="border-l-4 border-[#3ba334] pl-3 font-semibold text-sm sm:text-base">
                                Assign jobs to the right team member
                            </h1>
                            <h1 className="border-l-4 border-[#76bf71] pl-3 font-semibold text-sm sm:text-base">
                                Monitor performance in real time
                            </h1>
                            <h1 className="border-l-4 border-[#b0daad] pl-3 font-semibold text-sm sm:text-base">
                                Manage clients and services seamlessly
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third */}
            <div className="flex flex-col md:flex-row items-center justify-between my-12 md:my-20 gap-10">
                <div className="mt-6 md:mt-26">
                    <button className="border px-4 sm:px-5 py-1 rounded-full border-[#3ba334] text-[#3ba334] font-medium">
                        Employees
                    </button>
                    <div>
                        <h1 className="font-bold text-base sm:text-lg py-3">
                            See tasks, track time, and navigate <br className="hidden sm:block" />
                            routes with ease.
                        </h1>
                        <p className="text-gray-400 pb-5 text-sm sm:text-base">
                            Everything you need to manage your workday from job <br className="hidden sm:block" />
                            assignments to optimized routes and time logging.
                        </p>
                        <div className="space-y-3">
                            <h1 className="border-l-4 border-[#3ba334] pl-3 font-semibold text-sm sm:text-base">
                                Assign jobs to the right team member
                            </h1>
                            <h1 className="border-l-4 border-[#76bf71] pl-3 font-semibold text-sm sm:text-base">
                                Monitor performance in real time
                            </h1>
                            <h1 className="border-l-4 border-[#b0daad] pl-3 font-semibold text-sm sm:text-base">
                                Manage clients and services seamlessly
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    {/* Glow background */}
                    <div className="absolute w-[300px] sm:w-[400px] md:w-[530px] h-[300px] sm:h-[400px] md:h-[530px] rounded-full 
                        bg-gradient-to-tr from-green-300 via-green-200 to-transparent 
                        opacity-30 bottom-6 right-0 blur-[60px] md:blur-[80px] z-0">
                    </div>

                    {/* Phone image */}
                    <img className="relative z-10 w-[220px] sm:w-[280px] md:w-auto" src="/Mobile_three.png" alt="" />
                </div>
            </div>

            {/* Background decorations */}
            <img className="absolute -right-10 sm:-right-20 md:-right-78 top-10 sm:top-16 md:top-20 w-16 sm:w-24 md:w-auto" src="/round_1.png" alt="" />
            <img className="absolute right-20 sm:right-40 md:right-[489px] top-16 sm:top-24 md:top-32 w-12 sm:w-20 md:w-auto" src="/round_2.png" alt="" />
            <img className="absolute left-10 sm:left-20 md:left-[119px] top-20 sm:top-28 md:top-26 w-12 sm:w-20 md:w-auto" src="/round_3.png" alt="" />
        </div>
    );
};

export default BuildEveryone;
