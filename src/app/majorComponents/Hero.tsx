
// import { Clipboard } from 'lucide-react';
// import SampleTweet from './postcard';

// const Hero = () => {
//   return (
//     <section className="h-screen flex flex-col justify-center bg-white">
//       <div className="text-center mb-14 mt-[6rem]">
//         <h1 className="text-4xl md:text-6xl font-sans font-bold w-full md:w-[55%] mx-auto">
//           Convert Tweets into Engaging Social Media Posts, Instantly!
//         </h1>
//       </div>

//       <div className="w-full flex flex-col items-center">
//         <div className="mb-4">
//           <p className="text-center">Paste your tweet link below to get started for FREE</p>
//         </div>

//         <div className="w-full flex justify-center  h-[3.8rem]">
//           <div className="relative w-full max-w-3xl h-full">
//             {/* Input field */}
//             <input
//               type="text"
//               placeholder="Paste Tweet Link here..."
//               className="w-full p-3 border border-gray-300 rounded-[1rem] pr-16 text-gray-400 outline-none h-full focus:border-gray-400  transition-colors duration-200" 
//             />
//             {/* Paste button */}
//             <button className="absolute right-1 top-1 bottom-0 flex items-center px-2 outline-gray-400 bg-gray-100 text-gray-400 text-xs rounded-r-md hover:bg-gray-300 h-[80%] w-[10%]">
//                 <Clipboard className="w-4 h-4 mr-1" />{" "}
//                 {/* Adjusted icon size and added margin */}
//                 Paste
//               </button>
//           </div>
//         </div>
//       </div>
//       <div className='h-6 text-center mt-2'>
//         <p className='text-gray-300'>No signup, no credit card, no crap!</p>
//       </div>
//       <div className=" flex justify-center mt-3">
//         <SampleTweet/>
//       </div>
//     </section>
//   );
// };

// export default Hero;
 "use client"
import { Clipboard } from 'lucide-react';
import { useState } from 'react';
import SampleTweet from './postcard';

const Hero: React.FC = () => {
  const [tweetLink, setTweetLink] = useState<string>(''); // Specify the type for state

  // Function to handle the paste button click
  const handlePasteClick = async (): Promise<void> => {
    try {
      const text: string = await navigator.clipboard.readText(); // Read clipboard content
      setTweetLink(text); // Set clipboard content to input field
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center bg-white">
      <div className="text-center mb-14 mt-[6rem]">
        <h1 className="text-4xl md:text-6xl font-sans font-bold w-full md:w-[55%] mx-auto">
          Convert Tweets into Engaging Social Media Posts, Instantly!
        </h1>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="mb-4">
          <p className="text-center">Paste your tweet link below to get started for FREE</p>
        </div>

        <div className="w-full flex justify-center h-[3.8rem]">
          <div className="relative w-full max-w-3xl h-full">
            {/* Input field */}
            <input
              type="text"
              placeholder="Paste Tweet Link here..."
              value={tweetLink}
              onChange={(e) => setTweetLink(e.target.value)} // Update state on input change
              className="w-full p-3 border border-gray-300 rounded-[1rem] pr-16 text-gray-400 outline-none h-full focus:border-gray-400 transition-colors duration-200"
            />
            {/* Paste button */}
            <button
              onClick={handlePasteClick} // Call paste handler on button click
              className="absolute right-1 top-1 bottom-0 flex items-center px-2 outline-gray-400 bg-gray-100 text-gray-400 text-xs rounded-r-md hover:bg-gray-300 h-[80%] w-[10%]"
            >
              <Clipboard className="w-4 h-4 mr-1" />
              Paste
            </button>
          </div>
        </div>
      </div>
      <div className="h-6 text-center mt-2">
        <p className="text-gray-300">No signup, no credit card, no crap!</p>
      </div>
      <div className="flex justify-center mt-3">
        <SampleTweet />
      </div>
    </section>
  );
};

export default Hero;


