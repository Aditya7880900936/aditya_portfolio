import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/UI/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" , icon:<FaHome/> },
            { name: "About", link: "/about" , icon:<FaHome/> },
            { name: "Projects", link: "/projects" , icon:<FaHome/> },
            { name: "Contact", link: "/contact" , icon:<FaHome/> },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
