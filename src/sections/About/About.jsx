import "./About.css";

import AboutCard from "./AboutCard";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

export default function About() {
  return (
  
    <section id="about" className="about">

      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">

        {/* Left Side */}
        <AboutCard />

        {/* Right Side */}
        <Timeline />

      </div>

    </section>
   
  );
}