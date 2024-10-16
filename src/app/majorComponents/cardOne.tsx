"use-client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Image import
import designImage from "/public/images/step-1.webp"; // Replace with your image path

const CardOne = () => {
  const [hoverDirection, setHoverDirection] = useState<"left" | "right" | null>(
    null
  );

  return (
    <motion.div
      onMouseEnter={() => setHoverDirection("right")}
      onMouseLeave={() => setHoverDirection(null)}
      className="relative max-w-sm w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
      whileHover={{
        scale: 1.05,
        x: hoverDirection === "right" ? 15 : hoverDirection === "left" ? -15 : 0,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Top Image Section */}
      <div className="w-full bg-gray-100 p-4">
        <Image
          src={designImage}
          alt="Customize Design"
          className="w-full h-auto"
          width={500}
          height={300}
        />
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white">
        <h2 className="text-sm text-gray-400 font-semibold mb-2">STEP 2</h2>
        <h3 className="text-2xl font-bold mb-4">Customize Design</h3>
        <p className="text-gray-600 text-sm">
          Choose social media sizes, adjust the style, set the border radius,
          and customise the design to your liking and preferred branding—all
          with a single click.
        </p>
      </div>
    </motion.div>
  );
};

export default CardOne;
