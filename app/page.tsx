import Approaches from "@/Components/Approaches";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentsProjects from "@/Components/RecentsProjects";
import { FloatingNav } from "@/Components/UI/FloatingNavbar";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white  flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full ">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid/>
        <RecentsProjects/>
        <Experience/>
        <Approaches/>
        <Footer/>
      </div>
    </main>
  );
}
