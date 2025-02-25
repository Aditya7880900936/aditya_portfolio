"use client";

import { projects } from "@/Data";
import { PinContainer } from "./UI/3DPin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const RecentsProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A Small Selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 gap-4">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-png" width={500} height={500} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={500}
                  className="z-10 absolute bottom-0 w-full h-full"
                />
              </div>
              <h1 className="lg:text-2xl md:text-xl  font-bold text-base ">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm mt-3">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center "
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={100}
                        height={100}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentsProjects;
