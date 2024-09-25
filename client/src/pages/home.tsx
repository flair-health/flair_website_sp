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
// import Testimonials from "../components/testimonials/testimonialSection";
// import FlairInfoVideo from "../components/flairInfoVideo/videoSection";
// import MedicalConditions from "../components/medicalConditions/medicalConditions";

AOS.init({
  duration: 500,
  once: true,
});

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <br></br>
      <Customers/>
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
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default Home;