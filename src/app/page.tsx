"use client";
import Image from "next/image";
import { useEffect ,useState} from "react";
import { Navbar } from "./majorComponents/Navbar";
import Hero from "./majorComponents/Hero";
import MainCard from "./majorComponents/firstMainCard";
import CardOne from "./majorComponents/cardOne";
import HowItworks from "./sections/HowItworks";
import OptimizedForSocialMedia from "./sections/optimizeSocial";
import DynamicContentSection from "./sections/oneSolution";
import Section2 from "./majorComponents/section2";
import FeaturesSection from "./sections/featureSection";
import Engaging from "./sections/Engaging";
import FAQSection from "./sections/faqSection";
import { motion, useScroll, useSpring,useTransform  } from 'framer-motion';
import { ArrowRight } from "lucide-react";
export default function Home() {
  const featureImage = [
    "/images/feature-1.webp",
    "/images/feature-2.webp",
    "/images/feature-3.webp",
    "/images/feature-4.webp",
    "/images/feature-5.webp",
  ];

  // const { scrollYProgress } = useScroll(); // useScroll replaces useViewportScroll
  // const [isFloating, setIsFloating] = useState(false);

  // const { scrollYProgress } = useScroll(); // Track scroll progress
  // const yPos = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]); // Move black section up as we scroll

  // This controls when to apply the floating effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  //     // If the user scrolls near the bottom, float the black footer
  //     setIsFloating(scrollPosition > maxScroll - 500);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const { scrollYProgress } = useScroll(); // Track scroll progress
  const yPos = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]); // Move black section up as we scroll

  return (
    <>
      <div className="">
        <div className=" flex justify-center items-center">
          <Navbar />
        </div>
        <main >
          <Hero />
          <MainCard />
          {/* <CardOne/> */}
          <HowItworks />
          <OptimizedForSocialMedia />
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


      <div className="relative h-[240vh]">
        
        {/* Black Section (Floating Effect) */}
        <motion.div 
          className="h-[160vh] w-full bg-black rounded-[5rem] z-10" 
          style={{ y: yPos }} // Applying parallax effect
        >
          <section className="flex flex-col py-[6rem] sm:px-25 lg:px-17 xl:px-10 h-[50vh]">
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
            <div>
              <img src="/images/footer.webp" alt='footerImg' className='min-w-screen-sm'/>
            </div>
          </section>
        </motion.div>

        {/* Purple Section */}
        <footer className="absolute bottom-0 h-[80vh] bg-purple-500 z-0">
          <p className="text-white p-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolorum veniam minus officiis dicta architecto tenetur dolores voluptatum, nostrum ducimus molestias officia. Sit, beatae dolore quidem eum tempora deserunt eaque.
          </p>
        </footer>
      </div>
    </>
  );
}
