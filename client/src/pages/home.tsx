import About from "../components/about/aboutSection";

import Footer from "../components/footer/footer";
import HeroSection from "../components/hero/heroSection";
import Navbar from "../components/navbar";
import Partners from "../components/partners/partners";
import PharmacyWorkflow from "../components/pharmacy/pharmacyWorkflow";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../components/testimonials/testimonialSection";
import FlairInfoVideo from "../components/flairInfoVideo/videoSection";
import MedicalConditions from "../components/medicalConditions/medicalConditions";
import ContactSection from "../components/contact/Contact";
import CareModel from "../components/careModel/careModel";
import HowItWorks from "../components/howitWorks/working";
import spValueProp from "../components/pharmacy/spValueProp";
import ValueProps from "../components/pharmacy/pharmaValueProps";


AOS.init({
  duration: 500,
  once: true,
});

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <About/>
      <br></br>
      <CareModel/>
      <br></br>
      {/* <MedicalConditions /> */}
       {/*<FlairInfoVideo /> */}
       <HowItWorks />
       <PharmacyWorkflow />
      {/*<spValueProp/>*/}
      <Partners />
      {/* <FeatureSection /> */}
      {/* <CTA /> */}
      {/* <Pricing /> */}
      {/*<Testimonials />*/}
      <br></br>
      <ValueProps />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default Home;