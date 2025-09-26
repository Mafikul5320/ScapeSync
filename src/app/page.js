import BuildEveryone from "@/components/BuildEveryone";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navber from "@/components/Navber";
import UserReview from "@/components/UserReview";
export default function Home() {
  return (
    <div>
      <Navber />
      <HeroSection></HeroSection>
      <BuildEveryone />
      <div className="bg-gradient-to-l from-white to-green-50/70">
        <UserReview />
        <FAQSection />
        <Footer />
      </div>

    </div>
  );
}
