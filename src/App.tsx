import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Why from "./components/Why";
import Industries from "./components/Industries";
import BeforeAfter from "./components/BeforeAfter";
import Work from "./components/Work";
import Process from "./components/Process";
import Quote from "./components/Quote";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer, { CtaBand } from "./components/Footer";
import Contact from "./components/Contact";
import WhatsAppFab from "./components/WhatsAppFab";
import ServiceSheet from "./components/ServiceSheet";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded-full bg-fg px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <BeforeAfter />
        <Industries />
        <Why />
        <Work />
        <Process />
        <Quote />
        <Testimonials />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <ServiceSheet />
    </>
  );
}
