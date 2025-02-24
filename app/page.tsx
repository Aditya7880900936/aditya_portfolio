import dynamic from 'next/dynamic';
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import { navItems } from "@/Data";

// Dynamic imports for components that need client-side rendering
const FloatingNav = dynamic(() => import("@/Components/UI/FloatingNavbar").then(mod => mod.FloatingNav), {
  ssr: false
});
const Grid = dynamic(() => import("@/Components/Grid"), { ssr: false });
const RecentsProjects = dynamic(() => import("@/Components/RecentsProjects"), { ssr: false });
const Experience = dynamic(() => import("@/Components/Experience"), { ssr: false });
const Approaches = dynamic(() => import("@/Components/Approaches"), { ssr: false });

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