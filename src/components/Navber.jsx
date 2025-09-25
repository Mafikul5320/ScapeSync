"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="w-full z-10">
            <div className="w-11/13 mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src="./logo.png" 
                        alt="ScapeSync"
                        className="w-36 object-cover "
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md border-t">
                    <div className="flex flex-col items-start px-6 py-4 space-y-3">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition w-full text-center">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navber;