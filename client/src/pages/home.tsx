import About from "../components/about/aboutSection";

import Footer from "../components/footer/footer";
import HeroSection from "../components/hero/heroSection";
import Navbar from "../components/navbar";
import Partners from "../components/partners/partners";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../components/testimonials/testimonialSection";
import FlairInfoVideo from "../components/flairInfoVideo/videoSection";
import MedicalConditions from "../components/medicalConditions/medicalConditions";
import ContactSection from "../components/contact/Contact";

AOS.init({
  duration: 500,
  once: true,
});

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <MedicalConditions />
      <FlairInfoVideo />
      <Partners />
      {/* <FeatureSection /> */}
      {/* <CTA /> */}
      {/* <Pricing /> */}
      <Testimonials />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default Home;