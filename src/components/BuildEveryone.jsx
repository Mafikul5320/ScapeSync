import React from 'react';

const BuildEveryone = () => {
    return (
        <div className='my-9 w-11/13 mx-auto'>
            <div className='relative'>
                <h1 className='text-center font-bold backdrop-blur-md text-5xl'>Build for Everyone</h1>
                <img className='absolute right-181 top-13' src="/underline_2.png" />
                <p className='text-center font-sm text-gray-400 py-6'>Whether you're booking services, managing tasks, or running operations, we've <br /> designed the perfect experience for you.</p>
            </div>
            <div className='flex items-center justify-between my-20'>
                <div className='mt-26'>
                    <button className='border px-5  rounded-full border-[#3ba334] text-[#3ba334] font-medium' >Users</button>
                    <div className=''>
                        <h1 className='font-bold text-lg py-3'>Book services, track progress <br />
                            and stay updated</h1>
                        <p className='text-gray-400 pb-5'>Easily schedule appointments, get real-time updates, and <br /> enjoy a smooth, transparent service experience.</p>
                        <div className='space-y-3'>
                            <h1 className='border-l-3 border-l-[#3ba334] pl-3 font-semibold'>Book services in seconds</h1>
                            <h1 className='border-l-3 border-l-[#76bf71] pl-3 font-semibold'>Track real-time job updates</h1>
                            <h1 className='border-l-3 border-l-[#b0daad] pl-3 font-semibold'>Schedule appointments at your convenience</h1>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Glow background */}
                    <div className="absolute w-[530px] h-[530px] rounded-full 
    bg-gradient-to-tr from-green-300 via-green-200 to-transparent 
    opacity-30 bottom-8 -right-0 blur-[80px] z-0">
                    </div>

                    {/* Phone image */}
                    <img className="relative z-10" src="/Mobile_two.png" alt="" />
                    <div className="absolute bottom-4 left-0 w-full h-26 
      bg-gradient-to-b from-white/0 via-white/90 to-white z-50 pointer-events-none"></div>
                </div>

            </div>
            <div className='flex items-center justify-between my-20'>
                <div className="relative">
                    {/* Glow background */}
                    <div className="absolute w-[530px] h-[530px] rounded-full 
    bg-gradient-to-tr from-green-300 via-green-200 to-transparent 
    opacity-30 bottom-19 right-29 blur-[80px] z-0">
                    </div>

                    {/* Phone image */}
                    <img className="relative z-10" src="/Mobile_three.png" alt="" />
                    <div className="absolute -bottom-2 left-0 w-full h-26 
      bg-gradient-to-b from-white/0 via-white/90 to-white z-50 pointer-events-none"></div>
                </div>
                <div className='mt-26'>
                    <button className='border px-5  rounded-full border-[#3ba334] text-[#3ba334] font-medium' >Users</button>
                    <div className=''>
                        <h1 className='font-bold text-lg py-3'>Book services, track progress <br />
                            and stay updated</h1>
                        <p className='text-gray-400 pb-5'>Easily schedule appointments, get real-time updates, and <br /> enjoy a smooth, transparent service experience.</p>
                        <div className='space-y-3'>
                            <h1 className='border-l-3 border-l-[#3ba334] pl-3 font-semibold'>Book services in seconds</h1>
                            <h1 className='border-l-3 border-l-[#76bf71] pl-3 font-semibold'>Track real-time job updates</h1>
                            <h1 className='border-l-3 border-l-[#b0daad] pl-3 font-semibold'>Schedule appointments at your convenience</h1>
                        </div>
                    </div>
                </div>

            </div>
            {/* Three */}
            <div className='flex items-center justify-between my-20'>
                <div className='mt-26'>
                    <button className='border px-5  rounded-full border-[#3ba334] text-[#3ba334] font-medium' >Users</button>
                    <div className=''>
                        <h1 className='font-bold text-lg py-3'>Book services, track progress <br />
                            and stay updated</h1>
                        <p className='text-gray-400 pb-5'>Easily schedule appointments, get real-time updates, and <br /> enjoy a smooth, transparent service experience.</p>
                        <div className='space-y-3'>
                            <h1 className='border-l-3 border-l-[#3ba334] pl-3 font-semibold'>Book services in seconds</h1>
                            <h1 className='border-l-3 border-l-[#76bf71] pl-3 font-semibold'>Track real-time job updates</h1>
                            <h1 className='border-l-3 border-l-[#b0daad] pl-3 font-semibold'>Schedule appointments at your convenience</h1>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Glow background */}
                    <div className="absolute w-[530px] h-[530px] rounded-full 
    bg-gradient-to-tr from-green-300 via-green-200 to-transparent 
    opacity-30 bottom-10 right-34 blur-[80px] z-0">
                    </div>

                    {/* Phone image */}
                    <img className="relative z-10" src="/Mobile_three.png" alt="" />
                    <div className="absolute -bottom-6 left-0 w-full h-26 
      bg-gradient-to-b from-white/0 via-white/90 to-white z-50 pointer-events-none"></div>
                </div>

            </div>
        </div>
    );
};

export default BuildEveryone;