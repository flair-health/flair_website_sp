import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Privacy from "./pages/privacy";
import TermsOfService from "./pages/termsOfService";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/privacy-policy" element={<Privacy />}></Route>
        <Route path="terms-of-service" element={<TermsOfService />}></Route>
      </Routes>
    </div>
  );
}

export default App;
