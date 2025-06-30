import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import AppNavbar from "@/components/AppNavbar";
import HeroSection from "@/components/HeroSection";
import CocktailsSection from "./components/CocktailsSection";
import AboutSection from "./components/AboutSection";
import ArtSection from "./components/ArtSection";
import MenuSlider from "./components/MenuSlider";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <AppNavbar />

      <HeroSection />

      <CocktailsSection />

      <AboutSection />

      <ArtSection />

      <MenuSlider />
    </main>
  );
};

export default App;
