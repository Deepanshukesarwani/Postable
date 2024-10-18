// // components/FacebookPostCard.tsx
// "use-client"
// import { motion } from "framer-motion";
// import { Facebook, FacebookIcon } from 'lucide-react';
// import { X, CheckCircle, Twitter } from "lucide-react";
// import Bg2 from "/public/images/postbgImage.webp"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "/public/images/postablelogo.png";
// import Image from "next/image";
// const FacebookPostCard = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="relative max-w-md mx-auto  rounded-[2rem] shadow-lg text-left"
//       style={{backgroundImage:`url(${Bg2.src})`,
//       backgroundSize: "cover",
//     //   backgroundPosition: "center",

//     }}
//     >
//       <div className=" rounded-t-[2rem] p-4 bg-blue-400">
//         <div className="text-blue-600">
//         {/*  */}
//         </div>
//         <div className="font-bold text-slate-200">Facebook Post</div>
//       </div>

//       <div className="pl-10 pr-10 pb-10 pt-6">
//       <div className="mt-4 p-6 bg-white rounded-[2rem]">
//         {/* <p className="text-sm">
//           <strong>Postable</strong> @PostableApp
//         </p>
//         <p className="text-sm mt-2">
//           Sharing your tweets across multiple platforms made easy. Postable
//           helps you create engaging visuals for social media.
//         </p>
//         <p className="text-xs text-gray-500 mt-4">9:42 PM · Jul 29, 2024</p> */}
//         <div className="flex items-start p-4">
//         <div className="flex items-center space-x-2">
//           {/* Profile Image */}
//           <div className="rounded-full overflow-hidden w-10 h-10">
//             <Image 
//             src={logo}
//              alt="Postable Logo" width={40} height={40} />
//           </div>
//           {/* Profile Name and Verified Badge */}
//           <div className="flex flex-col justify-center">
//             <div className="flex items-center space-x-1">
//               <span className="font-semibold text-lg">Postable</span>
//               <CheckCircle className="w-4 h-4 text-blue-500" />
//             </div>
//             <p className="text-gray-500 text-sm">@postable_app</p>
//           </div>
//         </div>
//         {/* Close Icon */}
//         <div className="ml-auto">
//           <X className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
//         </div>
//       </div>

//       {/* Tweet Content */}
//       <div className="px-4 pb-4">
//         <p className="text-gray-700 text-sm leading-relaxed">
//           Sharing your tweets across multiple platform made easy. Postable helps you creating engaging visuals.
//         </p>
//       </div>

//       {/* Timestamp */}
//       <div className="px-4 pb-4">
//         <p className="text-xs text-gray-500">9:42 PM · Jul 29, 2024</p>
//       </div>
//       </div>
//       </div>

//     </motion.div>
//   );
// };

// export default FacebookPostCard;


"use-client";
import { motion } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import Image from "next/image";
import Bg2 from "/public/images/postbgImage.webp";
import logo from "/public/images/postablelogo.png";

const FacebookPostCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        x: 10,
        y: 10,
        rotate: 2, // Slight rotation on hover
        boxShadow: "10px 15px 25px rgba(0, 0, 0, 0.1)", // Rotate and slightly adjust shadow
      }}
      className="relative md:w-[24rem] md:h-[24rem] h-[20rem] w-[20rem] md: mx-auto rounded-[2rem] shadow-lg text-left transform-gpu"
      style={{
        backgroundImage: `url(${Bg2.src})`,
        backgroundSize: "cover",
        perspective: "1000px", // Adds perspective to enhance 3D effect
      }}
    >
      {/* Top Section */}
      <div className="rounded-t-[2rem] p-4 bg-blue-400">
        <div className="font-bold text-slate-200">Facebook Post</div>
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
