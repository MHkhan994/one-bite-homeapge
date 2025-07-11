import Banner from "@/components/homepage/Banner";
import CarosolSection from "@/components/homepage/CarosolSection";
import MiddleSection from "@/components/homepage/MiddleSection";
import Newsletter from "@/components/homepage/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OneBite Premium,বিশুদ্ধতায় প্রতিদিন",
  description:
    "OneBite Premium একটি আনকম্প্রোমাইসড কোয়ালিটি মাস্টার্ড অয়েল, যা নিশ্চিতভাবে বাংলাদেশের বাজারে সেরা মানের তেলগুলোর একটি",
  keywords: "oneBite,One Bite, ONE BITE, Musturd Oil",
  openGraph: {
    title: "OneBite Premium,বিশুদ্ধতায় প্রতিদিন",
    description:
      "OneBite Premium একটি আনকম্প্রোমাইসড কোয়ালিটি মাস্টার্ড অয়েল, যা নিশ্চিতভাবে বাংলাদেশের বাজারে সেরা মানের তেলগুলোর একটি",
    url: "https://oneheartbd.com/order",
    images: [
      {
        url: "/banner/customar-section-bg.png",
        width: 1200,
        height: 630,
        alt: "OneBite Premium",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://oneheartbd.com/order",
  },
  facebook: {
    admins: "https://www.facebook.com/oneheart012", // Replace with your actual Facebook page URL
  },
};

export default function Home() {
  return (
    <div>
      <Banner />
      <MiddleSection />
      <CarosolSection />
      <section id="pricing">
        <Newsletter />
      </section>
    </div>
  );
}
