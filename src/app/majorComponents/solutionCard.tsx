import Image from "next/image";
import { motion } from "framer-motion";

interface TweetCardProps {
  profileImage: string;
  username: string;
  handle: string;
  tweetContent: string;
  timestamp: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
  profileImage,
  username,
  handle,
  tweetContent,
  timestamp,
}) => {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto rounded-lg shadow-xl bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), 0px 30px 40px rgba(0, 0, 0, 0.1)", // Custom shadow effect
      }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden rounded-lg -z-10"
        style={{
          filter: "blur(15px)",
          transform: "scale(1.1)",
        }}
      >
        <Image
          src={profileImage}
          alt="background blur"
          layout="fill"
          objectFit="cover"
          quality={50}
        />
      </motion.div>

      {/* Tweet Card Content */}
      <div className="relative p-4">
        <div className="flex items-start space-x-3">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src={profileImage}
              alt={`${username}'s profile`}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          {/* Tweet Text Content */}
          <div className="text-left">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-sm">{username}</h3>
                <p className="text-gray-500 text-sm">{handle}</p>
              </div>
              <button className="text-gray-400">X</button>
            </div>
            <p className="mt-2 text-gray-700 text-sm">{tweetContent}</p>
            <p className="mt-2 text-gray-400 text-xs">{timestamp}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TweetCard;
