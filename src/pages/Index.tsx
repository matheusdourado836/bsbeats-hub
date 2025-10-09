import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <DownloadSection />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
