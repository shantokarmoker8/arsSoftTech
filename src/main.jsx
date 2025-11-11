import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import SoftwareTypes from "./components/SoftwareTypes";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <Navbar />
      <Header />
      <Services />
      <SoftwareTypes />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </div>
  </StrictMode>
);
