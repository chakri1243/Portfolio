import { motion } from "framer-motion";

import "./Hero.css";

import heroData from "../../data/heroData";

import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";
import HeroTypewriter from "./HeroTypewriter";
import profile from "../../assets/profile.png";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-container">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {heroData.greeting}
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
          >
            {heroData.name}
          </motion.h1>

          {/* Animated Roles */}

          <div className="hero-role">
            <HeroTypewriter />
          </div>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
          >
            {heroData.description}
          </motion.p>

          <div className="hero-buttons">
            <HeroButtons />
          </div>

          <div className="hero-social">
            <HeroSocial />
          </div>

          <div className="hero-stats">
            <HeroStats />
          </div>

        </div>

        {/* RIGHT SIDE */}

        <HeroImage />

      </div>

    </section>
  );
}