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
import ContactSection from "../components/contact/Contact";

AOS.init({
  duration: 500,
  once: true,
});

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <MedicalConditions />
      <VideoSection />

      <MarqueeEffect />
      {/* <FeatureSection /> */}
      {/* <CTA /> */}
      {/* <Pricing /> */}
      <Testomials />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
