"use client"
import FacebookPostCard from "../components/postCard";
import { motion } from "framer-motion";
import Bg from "/public/images/bg_1.webp"
import { useState } from "react";
const MainCard = () => {
    // console.log(Bg);
    const[selectedCategory,setSelectedCategory]=useState<"Instagram Story" | "Linkedin Post" | "Instagram Post"|"Facebook Post">("Facebook Post")
    console.log(selectedCategory);

    // const dynamicHeight = selectedCategory === "Instagram Story" ? "h-[200vh]" : "";
  return (
    

    <section 
    className={`relative w-[80vw] ${
      selectedCategory === "Instagram Story" ? "h-[200vh] sm:h-[150vh] md:h-[130vh] lg:h-[130vh] h-xs:h-[120vh]" : "h-[150vh] sm:h-[120vh] md:h-[100vh] lg:h-[100vh]"
    } mx-auto flex justify-center text-center pl-5 pr-5 border rounded-[6rem]`}
    style={{
      backgroundImage: `url(${Bg.src})`,
    }}>
      <motion.div
        className="  p-12 rounded-[6rem]  max-w-3xl mx-auto "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl lg:text-6xl font-bold text-white mb-6">
          Share Your Voice Beyond Just a Tweet
        </h1>
        <p className="text-sm lg:text-lg text-white">
          Keep your online presence steady and growing by creating customizable images from your tweets, perfect for Instagram, Facebook, and more.
        </p>
        <div className="flex space-x-3 justify-center mt-6">
          {
            ['Instagram Story', 'Linkedin Post', 'Facebook Post','Instagram Post'].map((category)=>(
              <button 
              key={category}
              onClick={()=>setSelectedCategory(category as "Instagram Story" | "Linkedin Post" | "Instagram Post"|"Facebook Post" )}
              className={` text-slate-200 p-2 rounded-md
                 ${ selectedCategory === category ?
                  'bg-gray-900 ':
                  ""
                 }`}>{category}</button>
            ))
          }

       
        </div>
      </motion.div>

      {/* Facebook Post Card */}
      <div className="absolute bottom-[-5.5rem] left-1/2 transform -translate-x-1/2">
        <FacebookPostCard 
        postCategory={selectedCategory}/>
      </div>

    </section>
    

  );
};

export default MainCard;
