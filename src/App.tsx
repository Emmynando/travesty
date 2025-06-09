import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interests from "./components/Interest";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import QuickLinks from "./components/QuickLinks";
import Testimonials from "./components/Testimonials";

function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <div className="hidden md:block lg:block">
        <Navbar />
      </div>
      <div className="block md:hidden lg:hidden mb-[5rem]">
        <MobileNav
          onClick={() => setIsModal((prev) => !prev)}
          isModal={isModal}
        />
      </div>
      <Hero />
      <Interests />
      <Testimonials />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;
