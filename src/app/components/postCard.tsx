"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import Image from "next/image";
import Bg2 from "/public/images/postbgImage.webp";
import logo from "/public/images/postablelogo.png";

interface Type {
  postCategory: string;
}

const FacebookPostCard = ({ postCategory }: Type) => {
  const [key, setKey] = useState(0); // State to force re-render on postCategory change

  // Re-trigger the animation when postCategory changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Update the key to reset the animation
  }, [postCategory]);

  const dynamicHeight = postCategory === "Instagram Story" ? "h-[34rem]" : "h-[24rem]";
  return (
    <motion.div
      key={key}
      initial={{ x: -10, y: 10, rotate: -2, opacity: 0 }} // Initial tilt and position
      animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }} // Final position and straightened
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }} // Smooth transition
      whileHover={{
        x: 10,
        y: 10,
        rotate: 2, // Slight rotation on hover
        boxShadow: "10px 15px 25px rgba(0, 0, 0, 0.1)", // Adjust shadow on hover
      }}
      className={`relative md:w-[24rem] ${dynamicHeight} mx-auto rounded-[2rem] shadow-lg text-left transform-gpu`}
      style={{
        backgroundImage: `url(${Bg2.src})`,
        backgroundSize: "cover",
        perspective: "1000px",
      }}
    >
      {/* Top Section */}
      <div className="rounded-t-[2rem] p-4 bg-blue-400">
        <div className="font-bold text-slate-200">{postCategory}</div>
      </div>

      {/* Content Section */}
      <div className="pl-10 pr-10 pb-10 pt-6">
        <div className="mt-4 p-6 bg-white rounded-[2rem] shadow-md">
          {/* Profile Section */}
          <div className="flex items-start p-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-full overflow-hidden w-10 h-10">
                <Image src={logo} alt="Postable Logo" width={40} height={40} />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-lg">Postable</span>
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                </div>
                <p className="text-gray-500 text-sm">@postable_app</p>
              </div>
            </div>
            <div className="ml-auto">
              <X className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              Sharing your tweets across multiple platforms made easy. Postable helps you create engaging visuals.
            </p>
          </div>

          {/* Timestamp */}
          <div className="px-4 pb-4">
            <p className="text-xs text-gray-500">9:42 PM · Jul 29, 2024</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FacebookPostCard;



