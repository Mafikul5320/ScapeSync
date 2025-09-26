import BuildEveryone from "@/components/BuildEveryone";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import UserReview from "@/components/UserReview";
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <BuildEveryone />
      <div className="bg-gradient-to-l from-white to-green-50/70">
        <UserReview />
        <FAQSection />
      </div>

    </div>
  );
}
