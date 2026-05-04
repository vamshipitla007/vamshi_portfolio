import React from "react";
import ChefKitchen from "@/assets/chefrestaurant/chefkitchen.png"

const ChefNavbar: React.FC = () => {
    return (
        <nav className="w-full bg-white border-b">
            <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* LEFT: Logo */}
                <div className="flex items-center gap-3">
                    <img src={ChefKitchen} alt="Chef Kitchen Logo" className="w-28 h-12" />
                </div>

                {/* CENTER: Menu */}
                <div className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
                    <a href="#" className="text-green-500">
                        Menu
                    </a>
                    <a href="#" className="hover:text-green-500">
                        Delivery
                    </a>
                    <a href="#" className="hover:text-green-500">
                        FAQ
                    </a>
                    <a href="#" className="hover:text-green-500">
                        Contacts
                    </a>
                </div>

                {/* RIGHT: Contact + Language + Sign In */}
                <div className="flex items-center gap-6">
                    
                    {/* Phone */}
                    <div className="hidden md:flex items-center gap-2 text-gray-700 text-sm font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h2l2 5-2 1a16 16 0 006 6l1-2 5 2v2a2 2 0 01-2 2h-1C8 19 5 16 5 9V8a2 2 0 01-2-2z"
                            />
                        </svg>
                        <span className="font-bold">591 902 883</span>
                    </div>

                    {/* Language */}
                    <div className="flex items-center gap-1 text-gray-700 text-sm font-medium cursor-pointer">
                        <span className="font-bold">EN</span>
                        <svg
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M5 7l5 5 5-5H5z" />
                        </svg>
                    </div>

                    {/* Sign In */}
                    <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {/* User Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 12c2.8 0 5-2.2 5-5S14.8 2 12 2 7 4.2 7 7s2.2 5 5 5z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"
                            />
                        </svg>
                        SIGN IN
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default ChefNavbar;