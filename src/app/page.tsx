import Banner from "@/components/homepage/Banner";
import CarosolSection from "@/components/homepage/CarosolSection";
import MiddleSection from "@/components/homepage/MiddleSection";
import Newsletter from "@/components/homepage/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <MiddleSection />
      <CarosolSection />
      <Newsletter />
    </div>
  );
}
