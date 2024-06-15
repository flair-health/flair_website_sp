import "./App.css";
import About from "./components/about/aboutSection";
import FeatureSection from "./components/features/featureSection";
import HeroSection from "./components/hero/heroSection";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <FeatureSection />
    </>
  );
}

export default App;
