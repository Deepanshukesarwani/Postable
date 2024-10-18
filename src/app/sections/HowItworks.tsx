import React from 'react';
import CardOne from '../majorComponents/cardOne';
import TweetCard from '../majorComponents/solutionCard';
import Step1 from "/public/images/step-1.webp";
import Step2 from "/public/images/step-2.webp";
import Step3 from "/public/images/step-3.webp";

interface DataSchema {
  image: string;
  step: string;
  heading: string;
  content: string;
}

// Data array for cards
const data: DataSchema[] = [
  {
    image: Step1.src,  // Ensure the image is passed correctly as a string
    step: "Step 1",
    heading: "Customize Design",
    content:
      "Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click."
  },
  {
    image: Step2.src,  // Ensure the image is passed correctly as a string
    step: "Step 2",
    heading: "Customize Design",
    content:
      "Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click."
  },
  {
    image: Step3.src,  // Ensure the image is passed correctly as a string
    step: "Step 3",
    heading: "Customize Design",
    content:
      "Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click."
  },
];

export default function HowItWorks() {
  return (
    <div className='h-[120vh]  pt-[7rem]'>
      <div>
        <h1 className='text-5xl  mb-5 pl-5'>How it works?</h1>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
        {data.map((item, index) => (
          <CardOne
            key={index}
            image={item.image}
            step={item.step}
            heading={item.heading}
            content={item.content}
          />
        ))}
      </div> */}
<div className="flex justify-around overflow-x-auto overflow-y-hidden space-x-6 scrollbar-hide px-6 py-5">
        {/* Mapping through the data and rendering CardOne for each item */}
        {data.map((item, index) => (
          <div key={index} className="flex-shrink-0 max-w-[24rem]"> {/* Card container with fixed width */}
            <CardOne
              image={item.image}
              step={item.step}
              heading={item.heading}
              content={item.content}
            />
          </div>
        ))}
      </div>


      {/* <div className="h-screen flex items-center justify-center bg-gray-100">
        <TweetCard
          profileImage="/images/bg_1.webp" // Replace with the profile image
          username="Kim Kardashian"
          handle="@KimKardashian"
          tweetContent="Last week I had the opportunity to go visit the Department of Justice in Washington DC to meet with our United States pardon attorney Elizabeth Oyer. We talked about some of the many men and women who have taken accountability for their crimes, worked hard to turn their lives around."
          timestamp="8:53 PM · Aug 26, 2024"
        />
      </div> */}
    </div>
  );
}
