import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px]" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Collaborate <span className="text-purple">and</span> Elevate Your Digital Presence Together?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
         Contact me today, and let&apos;s discuss how we can achieve your goals together.
        </p>
        <a href="https://www.instagram.com/rakharizki_/">
          <MagicButton
            title="Mutualan Yuk"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-16">
  <div className="flex justify-center items-center md:gap-3 gap-6">
    {socialMedia.map((info) => (
      <div
        key={info.id}
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
      >
        <img src={info.img} alt="icons" width={20} height={20} />
      </div>
    ))}
  </div>
</div>

    </footer>
    
  );
};

export default Footer;

