import AboutCarousel from "../components/about-carousel/aboutCarousel";
import About from "../components/about/aboutSection";

import Footer from "../components/footer/footer";
import HeroSection from "../components/hero/heroSection";
import Navbar from "../components/navbar";
import MarqueeEffect from "../components/collab/collab";
import AOS from "aos";
import "aos/dist/aos.css";
import Testomials from "../components/testimonials/testimonialSection";
import VideoSection from "../components/videosection/videoSection";
import MedicalConditions from "../components/medicalConditions/medicalConditions";

AOS.init({
  duration: 500,
  once: true,
});

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AboutCarousel />
      <About />
      <MedicalConditions />
      <MarqueeEffect />
      {/* <FeatureSection /> */}
      {/* <CTA /> */}
      {/* <Pricing /> */}
      <Testomials />
      <Footer />
    </>
  );
}

export default Home;
