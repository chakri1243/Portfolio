import { motion } from "framer-motion";

import profile from "../../assets/images/profile.png";

import HeroOrbit from "./HeroOrbit";
import HeroBadge from "./HeroBadge";
import HeroStatus from "./HeroStatus";
import HeroTechOrbit from "./HeroTechOrbit";

export default function HeroImage() {
  return (
    <div className="hero-image-wrapper">

      <HeroOrbit />

      <div className="image-glow"></div>
      <HeroOrbit />

      <HeroTechOrbit />

      <div className="image-glow"></div>


      <motion.img
        src={profile}
        alt="Chakrapani"
        className="hero-image"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      <HeroBadge />

      <HeroStatus />

    </div>
  );
}