"use client"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
            {/* Logo Top Left */}
            <div className="absolute top-6 left-6">
                <img src="/Logo.png" alt="ScapeSync Logo" className="w-36 object-cover " />
            </div>

            {/* Login Form */}
            <div className="w-full max-w-md">
                <h2 className="text-center text-2xl font-semibold text-gray-900">
                    Welcome to ScapeSync
                </h2>
                <p className="text-center text-gray-500 text-sm mt-1">
                    Please share your login details so you can access the website.
                </p>

                <form className="mt-8 space-y-4">
                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-3 py-4 border-gray-300 border rounded-md text-sm focus:ring-2 focus:ring-green-600 outline-none"
                    />

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full px-3 py-4 border-gray-300 border rounded-md text-sm focus:ring-2 focus:ring-green-600 outline-none"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-2.5 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Remember Me + Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 border-gray-300 rounded mr-2"
                            />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-green-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md shadow-sm transition"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-3 text-sm text-gray-500">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google Button */}
                <button className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md text-sm hover:bg-gray-50 transition">
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google Logo"
                        className="h-5 w-5"
                    />
                    Continue with Google
                </button>

                {/* Bottom Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-green-600 font-medium">
                        Get started
                    </a>
                </p>
            </div>
        </div>
    );
};

export default page;