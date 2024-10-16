"use client";
import React, { useState, useEffect } from "react";
import { Clipboard } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "/public/images/postablelogo.png";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350); // Trigger after scrolling 350px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.nav
        className="fixed top-5 left-[50%] z-50 border rounded-[1rem] bg-black shadow-md transition-all duration-300"
        initial={{ height: 80 }}
        animate={{ width: scrolled ? "55%" : "15%" }}
        style={{ transform: "translateX(-50%)" }} // Center the navbar
      >
        <div className="flex items-center justify-between h-full px-4">
          {/* Logo and Title Container */}
          <motion.div
            className="flex items-center transition-all duration-300"
            layout
          >
            <Image src={logo} alt="logo" className="w-10 h-10" />
            <div className="text-2xl font-bold text-white ml-2">Postable</div>
          </motion.div>

          {/* Input Container - Only visible when scrolled */}
          <motion.div
            className={`${
              scrolled ? "flex" : "hidden"
            } items-center w-full max-w-md mx-auto`}
            layout
            initial={{ opacity: 0, x: -50 }} // Start slightly off to the left
            animate={{ opacity: 1, x: 0 }} // Translate it to the center on scroll
            transition={{ duration: 0.5 }} // Smooth animation for translation
          >
            <div className="relative w-full max-w-3xl">
              {/* Input field */}
              <input
                type="text"
                placeholder="Paste Tweet Link"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md pr-16 text-gray-400 outline-none focus:border-gray-400 transition-colors duration-200"
              />
              {/* Paste button */}
              <button className="absolute right-1 top-1 bottom-0 flex items-center px-2 bg-gray-800 text-gray-400 text-xs rounded-r-md hover:bg-gray-300 h-[80%] w-[15%]">
                <Clipboard className="w-4 h-4 mr-1" />{" "}
                {/* Adjusted icon size and added margin */}
                Paste
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};
