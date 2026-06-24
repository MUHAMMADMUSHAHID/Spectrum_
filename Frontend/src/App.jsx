import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Team from "./pages/Team";
import Clients from "./pages/Clients";
import Testimonials from "./pages/Testimonials";
import Employee from "./pages/Employee";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/Contactus";
import Training from "./pages/Training";
// import CertificationCTA from "./components/CertificationCTA";

// Add top padding to account for fixed navbar
// const pageStyles = { paddingTop: '4rem' };

import ISO14001 from "./pages/Services/ISO14001";
import ISO45001 from "./pages/Services/ISO45001";
import ISO22000 from "./pages/Services/ISO22000";
import ISO13485 from "./pages/Services/ISO13485";
import ISO27001 from "./pages/Services/ISO27001";
import IATF16949 from "./pages/Services/IATF16949";
import ServicesIndex from "./pages/Services/ServicesIndex";
import AnimatedBackground from "./components/Background/AnimatedBackground";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
  
      <Navbar />
      <SmoothScroll>
      <AnimatedBackground>
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/training" element={<Training/>}/>
       
        <Route
          path="/services/iso-14001-2015"
          element={<ISO14001 />}
        />

        <Route path="/services" element={<ServicesIndex />} />

        <Route
          path="/services/iso-45001-2018"
          element={<ISO45001 />}
        />

        <Route
          path="/services/iso-22000-2018"
          element={<ISO22000 />}
        />

        <Route
          path="/services/iso-13485-2016"
          element={<ISO13485 />}
        />

        <Route
          path="/services/iso-27001-2022"
          element={<ISO27001 />}
        />

        <Route
          path="/services/iatf-16949-2016"
          element={<IATF16949 />}
        />

      </Routes>
      </AnimatedBackground>
      </SmoothScroll>
      <Footer />
      </div>
    </>
  );
}

export default App;