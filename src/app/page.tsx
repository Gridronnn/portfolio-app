import Shell from "@/components/Shell";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Media from "@/components/Media";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blog />
      <Media />
    </Shell>
  );
}
