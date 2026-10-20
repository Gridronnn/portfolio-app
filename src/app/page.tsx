import Shell from "@/components/Shell";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Media from "@/components/Media";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Blog />
      <Media />
    </Shell>
  );
}
