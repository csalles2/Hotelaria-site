import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoomsSection from "@/components/RoomsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <RoomsSection />
    <ExperiencesSection />
    <GallerySection />
    <BookingSection />
    <Footer />
  </div>
);

export default Index;
