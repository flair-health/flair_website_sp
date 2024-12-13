import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/navbar";
import HeroSection from "../components/hero/heroSection";
import Customers from "../components/customers/customers";
// import HowItWorks from "../components/howitWorks/working";
import PharmacyWorkflow from "../components/pharmacy/pharmacyWorkflow"; // TODO
import Team from "../components/team/teamLogos";
import ValueProps from "../components/pharmacy/pharmaValueProps";
import ContactSection from "../components/contact/Contact";
import Footer from "../components/footer/footer";
import { useEffect } from "react";
// import Testimonials from "../components/testimonials/testimonialSection";
// import FlairInfoVideo from "../components/flairInfoVideo/videoSection";
// import MedicalConditions from "../components/medicalConditions/medicalConditions";

AOS.init({
  duration: 500,
  once: true,
});

function Home() {
  useEffect(() => {
    // Check if the URL contains the anchor part for either #features or #contact
    if (window.location.hash === "#features") {
      // Scroll to the features section
      document.getElementById("features")?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (window.location.hash === "#contact") {
      // Scroll to the contact section
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <br></br>
      <Customers />
      <br></br>
      {/*<MedicalConditions /> */}
      {/*<FlairInfoVideo /> */}
      {/* <HowItWorks /> */}
      <PharmacyWorkflow />
      <ValueProps />
      <Team />
      {/* <FeatureSection /> */}
      {/* <CTA /> */}
      {/* <Pricing /> */}
      {/*<Testimonials />*/}
      <br></br>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
