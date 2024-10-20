"use client";
import React, { useState, useEffect } from "react";
import { Clipboard } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "/public/images/postablelogo.png";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [tweetLink, setTweetLink] = useState<string>(''); // State for the input field

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350); // Trigger after scrolling 350px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle the paste button click
  const handlePasteClick = async () => {
    try {
      const text: string = await navigator.clipboard.readText(); // Read clipboard content
      setTweetLink(text); // Set clipboard content to input field
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <div>
      <motion.nav
        className="fixed top-5 left-[50%] z-50 border-black overflow-hidden rounded-[1rem] bg-gray-800 shadow-md transition-all duration-300"
        initial={{ height: 80 }}
        animate={{ width: scrolled ? "55%" : "15%" }}
        style={{ transform: "translateX(-50%)" }} // Center the navbar
      >
        <div className="flex items-center justify-between h-full md:px-0 xl:px-4 lg:px-2 px-1">
          {/* Logo and Title Container */}
          <motion.div
            className="flex items-center transition-all duration-300"
            layout
          >
            <Image src={logo} alt="logo" className="md:w-10 md:h-10 w-6 h-6 sm:w-4 sm:h-4" />
            <div className="md:text-2xl text-xl sm:text-lg font-bold text-white ml-2">Postable</div>
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
            <div className="relative w-full max-w-full">
              {/* Input field */}
              <input
                type="text"
                placeholder="Paste Tweet Link"
                value={tweetLink} // Bind the input to the state
                onChange={(e) => setTweetLink(e.target.value)} // Update state on input change
                className="w-full p-3 bg-slate-600 bg-transparent border border-gray-700 rounded-md pr-16 text-gray-400 outline-none focus:border-gray-400 transition-colors duration-200"
              />
              {/* Paste button */}
              <button 
                onClick={handlePasteClick} // Call paste handler on button click
                className="absolute right-1 top-1 bottom-0 flex items-center px-2 bg-gray-800 text-white text-xs rounded-r-md hover:bg-gray-300 h-[80%] w-[15%]"
              >
                <Clipboard className="w-4 h-4 mr-1" />
                Paste
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

