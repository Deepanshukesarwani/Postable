"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // For the close icon
import Image from "next/image";

export default function SampleTweet() {
  return (
    <div className=" flex justify-center h-[9rem] w-[18rem]">
      {/* Outer Pink Card */}
      <motion.div
        className="p-6 hover:bg-purple-50 rounded-[2rem] "
        initial={{ rotate: -5 }} // Slightly tilt the entire component by default
        whileHover={{ rotate: 0 }} // Straighten on hover
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.div
          className="bg-white rounded-xl shadow-md p-3 h-[7rem] w-[14rem] relative"
          initial={{ rotate: -1 }} // Slight tilt of the tweet card
          whileHover={{ rotate: 0, scale: 1.05 }} // Straighten and scale up on hover
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          {/* Tweet Header */}
          <div className="flex items-center space-x-4">
            {/* Twitter Profile Image */}
            <Image
              src="/images/sample-profile.webp" // Replace with actual profile image path
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full h-4 w-4"
            />
            {/* Profile Info */}
            <div>
              <h3 className="text-[0.8rem] font-bold flex items-center space-x-1">
                <span>Postable</span>
                <span className="text-blue-500">✔️</span>
              </h3>
              <p className="text-gray-500 text-[0.5rem]">@postable_app</p>
            </div>

            {/* Close Button */}
            <div className="ml-auto">
              <X className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Tweet Content */}
          <div className="mt-4">
            <p className="text-gray-700 text-[0.6rem]">
              Get scroll-stopping posts from your tweets with zero design
              experience, only with Postable.
            </p>
          </div>

          {/* Tweet Footer (Date) */}
          <div className="mt-2 text-gray-400 text-[0.4rem]">
            <p>9:42 PM · Jul 29, 2024</p>
          </div>
        </motion.div>

        {/* "Try Sample Tweet" Text */}
        {/* <motion.p
          className="text-purple-600 text-2xl text-center mt-4"
          whileHover={{ scale: 1.05 }} // Slight scale on hover for the text as well
        >
          Try Sample Tweet
        </motion.p> */}
      </motion.div>
    </div>
  );
}
