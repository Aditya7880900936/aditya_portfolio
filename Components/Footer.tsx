"use client";


import MagicButton from "./UI/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/Data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Take <span className="text-purple">Your</span> digital
          Presence to the Next level?{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach Out to me Today and let&apos;s Discuss how I can help you
          achieve Your Goals
        </p>
        <a href="mailto:adityasanskarsrivastav788@gmail.com">
          <MagicButton
            title="Let's Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2025 Aditya
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((social) => (
            <div
              key={social.id}
              className="cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={social.href} target="_blank"><img src={social.img} alt='icons' width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
