import { useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Contact/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import MouseGlow from "./components/MouseGlow/MouseGlow";
import Github from "./sections/Github/Github";
import JobSimulations from "./sections/JobSimulations/JobSimulations";
import CurrentlyLearning from "./sections/CurrentlyLearning/CurrentlyLearning";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <LoadingScreen />;

  }

  return (
    <>
      <Background />

      <MouseGlow />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <JobSimulations />

      <Skills />

      <CurrentlyLearning />

      <Projects />

      <Github />

      <Education />

      <Contact />

      <CommandPalette />
      
      <ThemeSwitcher/>

      <Footer />
    </>
  );
}

export default App;