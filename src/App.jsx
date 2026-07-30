import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroVideo from "./components/IntroVideo";
import Diagnosis from "./components/Diagnosis";
import WhyExists from "./components/WhyExists";
import AboutLuana from "./components/AboutLuana";
import AboutDiego from "./components/AboutDiego";
import ImpactStatement from "./components/ImpactStatement";
import FiveAreas from "./components/FiveAreas";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import WhyDifferent from "./components/WhyDifferent";
import Pricing from "./components/Pricing";
import Bonus from "./components/Bonus";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main>
        <Hero />
        <IntroVideo />
        <Diagnosis />
        <WhyExists />
        <AboutDiego />
        <AboutLuana />
        <ImpactStatement />
        <FiveAreas />
        <Journey />
        <Testimonials />
        <WhyDifferent />
        <Pricing />
        <Bonus />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
