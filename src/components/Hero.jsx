import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-12">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ricardo Melo
            </h1>
            <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
              About Me
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        {/* to put logo image in the right place change line 22 elements: <  lg:pl & lg:max-w-[ rem]  > */}
        <div className="w-full lg:w-1/2 lg:p-2  lg:pl-40 lg:max-w-[40rem]">
          <div className="flex justify-center flex-col items-center">
            <img
              className="rounded-2xl"
              src={profilePic}
              alt="profilePic"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
