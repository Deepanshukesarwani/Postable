import React from 'react';
import Image from 'next/image';

const Engaging: React.FC = () => {
  return (
    <div>
      <Image 
        src="/images/engaging.webp" 
        alt="engagingImg" 
        className="min-w-screen-sm" 
        layout="responsive" // Optional: use this for responsive images
        width={800} // Set appropriate width for the image
        height={600} // Set appropriate height for the image
      />
    </div>
  );
};

export default Engaging;

