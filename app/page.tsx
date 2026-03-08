import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stack />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
