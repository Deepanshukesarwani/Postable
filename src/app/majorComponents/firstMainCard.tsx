"use client"
import FacebookPostCard from "../components/postCard";
import { motion } from "framer-motion";
import Bg from "/public/images/bg_1.webp"
import { div } from "framer-motion/client";
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
const MainCard = () => {
    console.log(Bg);
  return (
    
    <div className="flex justify-center items-center h-screen">

    <section 
    className="relative min-w-[80%]  h-screen  flex  justify-center text-center pl-5 pr-5 pt-2  border rounded-[6rem]"
    style={{
        backgroundImage: `url(${Bg.src})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
    }}>
      <motion.div
        className=" bg-opacity-30 backdrop-blur-lg p-12 rounded-xl  max-w-3xl mx-auto "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-6xl font-bold text-white mb-6">
          Share Your Voice Beyond Just a Tweet
        </h1>
        <p className="text-lg text-white">
          Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.
        </p>
        <div className="flex space-x-3 justify-center mt-6">
          <button className=" text-slate-200 p-2 rounded-md">Instagram Story</button>
          <button className="text-slate-200 p-2 rounded-md">LinkedIn Post</button>
          <button className="bg-gray-800 text-slate-200 p-2 rounded-md">Facebook Post</button>
          <button className="text-slate-200 p-2 rounded-md">Instagram Post</button>
          <button className=" text-slate-200 p-2 rounded-md">+ More</button>
        </div>
      </motion.div>

      {/* Facebook Post Card */}
      <div className="absolute bottom-[-5.5rem] left-1/2 transform -translate-x-1/2">
        <FacebookPostCard />
      </div>
    </section>
    </div>

  );
};

export default MainCard;
