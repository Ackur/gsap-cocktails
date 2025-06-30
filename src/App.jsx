import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import AppNavbar from "@/components/AppNavbar";
import HeroSection from "@/components/HeroSection";
import CocktailsSection from "./components/CocktailsSection";
import AboutSection from "./components/AboutSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <AppNavbar />

      <HeroSection />

      <CocktailsSection />

      <AboutSection />
    </main>
  );
};

export default App;
