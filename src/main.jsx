import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import SoftwareTypes from "./components/SoftwareTypes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Header />
    <Services />
    <SoftwareTypes />
  </StrictMode>
);
