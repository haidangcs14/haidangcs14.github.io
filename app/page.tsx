import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import {
  Experience,
  Projects,
  // Awards,
  Certificates,
  Education,
  Skills,
} from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        {/* <Awards /> */}
        <Certificates />
        <Education />
        <Skills />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
