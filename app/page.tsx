import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentsProjects from "@/Components/RecentsProjects";
import { FloatingNav } from "@/Components/UI/FloatingNavbar";
import { navItems } from "@/Data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid/>
        <RecentsProjects/>
      </div>
    </main>
  );
}
