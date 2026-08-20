import { useEffect } from "react";
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
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import { sendEvent } from "./lib/tracking";

// Guarda em escopo de módulo: garante um único PageView por carregamento,
// mesmo com o duplo-efeito do StrictMode ou remontagem de rota.
let pageViewSent = false;

export default function LandingPage({ variant = "checkout" }) {
  useEffect(() => {
    if (pageViewSent) return;
    pageViewSent = true;
    sendEvent("PageView");
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header variant={variant} />
      <main>
        <Hero variant={variant} />
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
        <Pricing variant={variant} />
        <Bonus />
        <Guarantee variant={variant} />
        <FAQ />
        <FinalCTA variant={variant} />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}
