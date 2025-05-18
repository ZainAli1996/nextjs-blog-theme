import "./style.css";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}