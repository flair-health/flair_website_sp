import "./App.css";
import About from "./components/about/aboutSection";
import CTA from "./components/cta/cta";
import FeatureSection from "./components/features/featureSection";
import HeroSection from "./components/hero/heroSection";
import Navbar from "./components/navbar";
import Pricing from "./components/pricing/pricing";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <FeatureSection />
      <CTA />
      <Pricing />
    </>
  );
}

export default App;
