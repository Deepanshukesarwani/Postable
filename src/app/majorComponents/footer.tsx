import { motion } from "framer-motion";
import { Twitter , Instagram, Coffee} from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white">
      <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
              <li className="opacity-60 text-white">Post Scheduler (Coming Soon)</li>
              <li className="opacity-60 text-white">Screenshot Designer (Coming Soon)</li>
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
              <li>Privacy Policy</li>
              <li>Terms And Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </motion.div>
        </div>

        {/* Social & Support */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <motion.a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-md flex items-center gap-2 hover:bg-gray-100 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Twitter className="w-5 h-5" /> Follow us on X / Twitter
          </motion.a>
          <motion.a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-md flex items-center gap-2 hover:bg-gray-100 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Instagram className="w-5 h-5" /> Follow us on Instagram
          </motion.a>
          <motion.a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-md flex items-center gap-2 hover:bg-gray-100 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaDiscord  className="w-5 h-5" /> Join community Discord
          </motion.a>
          <motion.a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-md flex items-center gap-2 hover:bg-gray-100 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Coffee className="w-5 h-5" /> Support us Buy Coffee
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10">
          <p className="text-sm">Copyright 2024 Postable</p>
        </div>
      </div>
    // </footer>
  );
};

export default Footer;
