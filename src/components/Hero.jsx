import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pt-40 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-12">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ricardo Melo
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="bg-gradient-to-r from-blue-300 via-slate-500 to-blue-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Sobre Mim
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        {/* to put logo image in the right place change line 22 elements: <  lg:pl & lg:max-w-[ rem]  > */}
        <div className="w-full lg:w-1/2 lg:p-2  lg:pl-40 lg:max-w-[40rem]">
          <div className="flex justify-center flex-col items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
              className="rounded-[50rem]"
              src={profilePic}
              alt="profilePic"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
