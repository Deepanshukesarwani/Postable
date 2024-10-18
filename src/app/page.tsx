"use client";

import { Navbar } from "./majorComponents/Navbar";
import Hero from "./majorComponents/Hero";
import MainCard from "./majorComponents/firstMainCard";
import HowItworks from "./sections/HowItworks";
import OptimizedForSocialMedia from "./sections/optimizeSocial";
import DynamicContentSection from "./sections/oneSolution";
import Section2 from "./majorComponents/section2";
import FeaturesSection from "./sections/featureSection";
import Engaging from "./sections/Engaging";
import FAQSection from "./sections/faqSection";
import { motion  } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import Footer from "./majorComponents/footer";
import Image from "next/image";
import Phone from "./sections/phone";
export default function Home() {
  const featureImage = [
    "/images/feature-1.webp",
    "/images/feature-2.webp",
    "/images/feature-3.webp",
    "/images/feature-4.webp",
    "/images/feature-5.webp",
  ];
  // const { scrollYProgress } = useScroll(); // Track scroll progress
  // const yPos = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]); // Move black section up as we scroll

  return (
    <>
      <div className="">
        <div className=" flex justify-center items-center">
          <Navbar />
        </div>
        <main >
          <Hero />
          <MainCard />
          <HowItworks />
          <OptimizedForSocialMedia />
          <Phone/>
          <Section2
            title="Grow your audience with powerful visuals"
            subtitle="shared across all your social media platforms."
            buttonText="Get Started for FREE"
          />
          <FeaturesSection images={featureImage} />
          <DynamicContentSection />
          <Section2
            title="Grow your audience with powerful visuals"
            subtitle="shared across all your social media platforms."
            buttonText="Get Started for FREE"
          />
          <Engaging />
          <FAQSection />
        </main>
      </div>

      <footer className="h-[230vh]  ">
        <div className="bg-white m-0 p-0 rounded-b-[6rem] relative ">

      <section className="flex flex-col z-20 bg-black py-[6rem] sm:px-25 lg:px-17 xl:px-10 h-[150vh] rounded-[4rem]">
            <motion.h1
              className="text-3xl flex flex-col items-center sm:text-4xl lg:text-7xl font-bold w-full text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              One-Click to Create
            </motion.h1>
            <motion.p
              className="mt-4 text-center px-[14rem] text-lg sm:text-lg font-extralight lg:text-xl text-slate-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Postable is built with simplicity and fun at its core. No design
              skills? No problem. We handle the heavy lifting so you can
              effortlessly create stunning posts.
            </motion.p>
            <div className="flex justify-center">
              <motion.button
                className="mt-8 px-6 py-3 w-[20%] bg-gray-800 text-white font-medium rounded-[1rem] flex items-center space-x-2 hover:bg-gray-700 transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span>Get started for free</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem]">
  <Image 
    src="/images/footer.webp" 
    alt="footerImg" 
    className="object-cover" 
    fill 
  />
</div>
          </section>
        </div>

          <div className="bg-gradient-to-tr from-pink-400 via-purple-500  to-purple-500 lg:h-[100vh] sm:pt-[20rem]  sticky bottom-0 -z-10   p-6 lg:pt-[10rem] ">

            <Footer/>
          </div>

      </footer>

    </>
  );
}
