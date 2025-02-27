"use client";

import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { navItems } from "@/Data";
import { FloatingNav } from "@/Components/UI/FloatingNavbar";
import Grid from "@/Components/Grid";
import RecentsProjects from "@/Components/RecentsProjects";
import Approaches from "@/Components/Approaches";
import Experience from "@/Components/Experience";




export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentsProjects />
        <Experience />
        <Approaches />
        <Footer />
      </div>
    </main>
  );
}