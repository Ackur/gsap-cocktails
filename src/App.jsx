import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import AppNavbar from "@/components/AppNavbar";
import HeroSection from "@/components/HeroSection";
import CocktailsSection from "./components/CocktailsSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <AppNavbar />

      <HeroSection />

      <CocktailsSection />
    </main>
  );
};

export default App;
