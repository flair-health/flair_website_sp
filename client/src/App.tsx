import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import ForClinic from "./pages/forClinic";
import ForPharmacy from "./pages/forPharmacy";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutUs />}></Route>
      </Routes>
      <Routes>
        <Route path="/nutrition" element={<ForClinic />}></Route>
      </Routes>
      <Routes>
        <Route path="/pharmacies" element={<ForPharmacy />}></Route>
      </Routes>
    </div>
  );
}

export default App;