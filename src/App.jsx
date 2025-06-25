import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import AppNavbar from "@/components/AppNavbar";
import HeroSection from "@/components/HeroSection";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <AppNavbar />

      <HeroSection />

      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;
