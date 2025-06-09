import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Interests from "./components/Interest";
import Navbar from "./components/Navbar";
import QuickLinks from "./components/QuickLinks";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Interests />
      <Testimonials />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;
