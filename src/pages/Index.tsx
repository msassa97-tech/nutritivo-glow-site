import Hero from "@/components/Hero";
import About from "@/components/About";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import VideoSection from "@/components/VideoSection";
import Events from "@/components/Events";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <PainPoints />
      <Services />
      <VideoSection />
      <Events />
      <LeadMagnet />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
