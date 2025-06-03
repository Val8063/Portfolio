import FuturisticHeader from "@/components/FuturisticHeader";
import FuturisticAboutSection from "@/components/FuturisticAboutSection";
import FuturisticProjectsSection from "@/components/FuturisticProjectsSection";
import FuturisticContactSection from "@/components/FuturisticContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/AnimatedBackground";
import FuturisticDivider from "@/components/FuturisticDivider";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col relative">
      {/* Fond animé qui couvre toute la page */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      {/* Contenu du site avec positionnement au-dessus du fond */}
      <div className="relative z-10 w-full">
        <FuturisticHeader />
        
        <FuturisticDivider />
        <FuturisticAboutSection />
        
        <FuturisticDivider />
        <FuturisticProjectsSection />
        
        <FuturisticDivider />
        <FuturisticContactSection />
        
        <Footer />
        <BackToTop />
      </div>
    </main>
  );
}
