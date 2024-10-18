import { motion } from "framer-motion";
import { Twitter, Instagram, Coffee } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white">
    <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-wrap">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        //   className=""
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Postable</h2>
          <p className="text-lg text-white opacity-60 font-light">
            We help you to create postable content! Postable is a free,
            unlimited tool designed to empower individuals, influencers, and
            businesses to amplify their voice and effortlessly create engaging
            content that goes beyond the ordinary.
          </p>
        </motion.div>

        {/* Center Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Products</h3>
          <ul>
            <li className="opacity-60 text-white">Tweet Converter</li>
            <li className="opacity-60 text-white">
              Post Scheduler (Coming Soon)
            </li>
            <li className="opacity-60 text-white">
              Screenshot Designer (Coming Soon)
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul>
            <li className="opacity-60 text-white">Privacy Policy</li>
            <li className="opacity-60 text-white">Terms And Conditions</li>
            <li className="opacity-60 text-white">Refund Policy</li>
          </ul>
        </motion.div>
      </div>
      <hr className=" opacity-60 h-px bg-white" />
      {/* Social & Support */}
      <div className="flex">
        <div className="mt-10 flex flex-wrap  gap-2">
        <motion.button
            whileHover={{ scale: 1.05 }} // Small scaling effect on hover
            whileTap={{ scale: 0.95 }} // Button shrinks a little on tap
            className="flex items-center gap-2  text-white font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-[#924bdf]" // Custom styles
            style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Twitter className="text-[#a05bff]" size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm opacity-60"> Follow us on</span>
              <span className="text-base font-bold">X / Twitter</span>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }} // Small scaling effect on hover
            whileTap={{ scale: 0.95 }} // Button shrinks a little on tap
            className="flex items-center gap-2  text-white font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-[#924bdf]" // Custom styles
            style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Instagram className="text-[#a05bff]" size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm opacity-60">Follow us on</span>
              <span className="text-base font-bold">Instagram</span>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }} // Small scaling effect on hover
            whileTap={{ scale: 0.95 }} // Button shrinks a little on tap
            className="flex items-center gap-2  text-white font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-[#924bdf]" // Custom styles
            style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <FaDiscord className="text-[#a05bff]" size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm opacity-60"> Join Community</span>
              <span className="text-base font-bold">Discord</span>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }} // Small scaling effect on hover
            whileTap={{ scale: 0.95 }} // Button shrinks a little on tap
            className="flex items-center gap-2  text-white font-medium py-3 px-6 rounded-lg transition duration-300 hover:bg-[#924bdf]" // Custom styles
            style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}
          >
            <div className="bg-white p-2 rounded-full flex items-center justify-center">
              <Coffee className="text-[#a05bff]" size={24} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm opacity-60">Support us</span>
              <span className="text-base font-bold">Buy Coffee</span>
            </div>
          </motion.button>
        </div>

        <div className="flex justify-center items-center mt-10 ml-[8rem] ">
          <p className="text-sm text-center opacity-60 text-white">
            Copyright 2024 Postable
          </p>
        </div>
      </div>

      {/* Copyright */}
    </div>
    // </footer>
  );
};

export default Footer;
