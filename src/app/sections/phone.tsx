import React from 'react'
import { motion } from "framer-motion";
export default function Phone() {
  return (
    <div
    className='bg-white mx-0 px-0 overflow-hidden'
    >
      <motion.img 
    //   initial={{rotateY:0}}
      whileHover={{transform:'translateX(50px)'}}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      src="/images/phones.png" alt="phn_img"className='min-w-screen-sm' />
    </div>
  )
}
