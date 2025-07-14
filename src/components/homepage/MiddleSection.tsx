import Image from "next/image";
import React from "react";
import OrderButton from "../common/OrderButton";
import { CircleCheckBig } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const users = [
  {
    name: "Liam Wilson",
    role: "Designer",
    image: "/middleSection/avatar-1.jpg",
  },
  {
    name: "Emma Davis",
    role: "Developer",
    image: "/middleSection/avatar-2.jpg",
  },
  {
    name: "Noah Brown",
    role: "Manager",
    image: "/middleSection/avatar-3.jpg",
  },
  {
    name: "Noah Brown",
    role: "Manager",
    image: "/middleSection/avatar-4.jpg",
  },
];

const MiddleSection = () => {
  return (
    <section className="relative overflow-hidden">
      <svg
        className="absolute left-0 top-0 z-0"
        width="905"
        height="800"
        viewBox="0 0 905 1390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_91_706)">
          <path
            d="M-4.65105 573.283C-29.6878 529.965 -65.3177 430 -114.022 430C-154.78 430 -147.898 580.691 -76.7411 705.648C88.0433 948.823 209.132 960 318.502 960C427.872 960 475 889.839 475 846.521C475 803.203 442.058 741.558 264.164 741.558C86.2727 741.558 20.3857 616.601 -4.65105 573.283Z"
            fill="#FF4A00"
            fillOpacity="0.6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_91_706"
            x="-569"
            y="0"
            width="1474"
            height="1390"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="215"
              result="effect1_foregroundBlur_91_706"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute right-0 bottom-0 z-0"
        width="831"
        height="874"
        viewBox="0 0 831 1334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_91_707)">
          <path
            d="M538.748 558.144C518.482 519.403 489.642 430 450.218 430C417.227 430 422.797 564.769 480.395 676.523C613.779 894.004 711.794 904 800.323 904C888.853 904 927 841.252 927 802.511C927 763.771 900.335 708.638 756.34 708.638C612.346 708.638 559.014 596.885 538.748 558.144Z"
            fill="#00BD1E"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_91_707"
            x="0"
            y="0"
            width="1357"
            height="1334"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="215"
              result="effect1_foregroundBlur_91_707"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute top-8 -left-10"
        width="146"
        height="240"
        viewBox="0 0 146 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M131.022 26.1595C95.5654 3.42761 60.0239 -4.39606 51.6378 8.68457C43.2516 21.7652 65.1963 50.7968 100.653 73.5287C120.524 86.2682 139.511 92.1069 143.061 86.5697C146.611 81.0325 133.38 66.2162 113.509 53.4767C78.052 30.7448 42.5105 22.9211 34.1243 36.0018C25.7381 49.0825 47.6827 78.1144 83.1396 100.846C103.01 113.586 121.997 119.424 125.547 113.887C129.097 108.35 115.866 93.5334 95.9954 80.7939C60.5386 58.062 24.9553 50.3035 16.5178 63.4643C8.08022 76.625 29.983 105.722 65.4399 128.454C85.3108 141.193 104.297 147.032 107.848 141.495C111.398 135.957 98.1663 121.142 78.2954 108.402C42.8386 85.6702 7.29737 77.8461 -1.08885 90.9268C-9.47508 104.008 12.47 133.039 47.9268 155.771C67.7978 168.51 86.7839 174.349 90.334 168.812C93.8841 163.275 80.6533 148.458 60.7824 135.719C25.3255 112.987 -10.2162 105.164 -18.6024 118.244C-26.9887 131.325 -5.04358 160.356 30.4133 183.088C50.2842 195.828 69.2708 201.666 72.8204 196.13C76.3705 190.592 63.1397 175.776 43.2688 163.036C7.81194 140.304 -27.7298 132.481 -36.1155 145.561C-44.5017 158.642 -22.5572 187.674 12.8997 210.405C32.7706 223.145 51.7573 228.984 55.3073 223.446C58.8569 217.91 45.6261 203.093 25.7552 190.354C-9.70165 167.622 -45.2846 159.863 -53.7221 173.023C-62.1597 186.184 -40.2568 215.281 -4.79999 238.013"
          stroke="#FF4A00"
          stroke-opacity="0.2"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>

      <div
        id={"about-us"}
        className="my-container py-6 xl:py-16 flex xl:flex-row xl:items-center flex-col-reverse xl:gap-16 gap-4 relative z-10"
      >
        <div className="relative w-full max-w-[560px] mx-auto xl:mx-0">
          <div className="bg-[#078B00] sm:left-0 left-4 xl:-bottom-0 bottom-4 -rotate-[10deg] h-[160px] w-[245px] md:h-[255px] md:w-[315px] md:rounded-[60px] rounded-4xl absolute"></div>
          <div className="ps-14 mb-16 sm:block justify-center w-full">
            <Image
              className="z-10 relative md:w-[402px] sm:w-[350px] min-[480px]:w-[300px] w-[250px]"
              src={"/banner/section-1.png"}
              height={315}
              width={402}
              alt="secton-1"
            />
            <Image
              className="z-10 absolute top-[40%] md:left-[40%] left-1/2 rounded-2xl sm:rounded-[36px] sm:w-[250px] min-[480px]:w-[200px] w-[150px] md:w-[313px]"
              src={"/banner/section-1-extra.png"}
              height={235}
              width={313}
              alt="secton-1"
            />
          </div>
        </div>

        <div className="text-dark space-y-3 xl:pr-16 w-full xl:pt-0 lg:pt-10">
          <h1 className="lg:text-[42px] md:text-4xl text-2xl hind-siliguri-bold leading-8 xl:leading-16">
            <span className="lg:text-[45px] md:text-4xl text-2xl">
              OneBite Premium
            </span>
            , <br /> বিশুদ্ধতায় প্রতিদিন
          </h1>
          <ul className="list-disc ps-4 space-y-1 text-green text-sm leading-6 hind-siliguri-semibold xl:pr-10">
            <li>
              One Heart-এ আমরা বিশ্বাস করি, প্রকৃতির কাছে ফেরাটাই স্বাস্থ্যকর
              জীবনের প্রথম ধাপ।
            </li>
            <li>
              OneBite সরিষার তেল আপনার পরিবারকে দিচ্ছে বিশুদ্ধ স্বাদ, স্বাস্থ্য
              ও ঐতিহ্যের ছোঁয়া।
            </li>
          </ul>
          <h4 className="hind-siliguri-medium text-gray text-base md:leading-6 lg:leading-7 md:pr-60">
            ওয়ানবাইট প্রিমিয়াম আধুনিক বাঙালি গৃহিণীর রান্নাঘরে আবহমান বাংলা আর
            আধুনিকতার এক মেলবন্ধন.
          </h4>
          <OrderButton />
        </div>
      </div>

      <div
        id={"about-product"}
        className="my-container pb-7 xl:pb-12 grid xl:grid-cols-2 gap-6 items-center relative z-10"
      >
        <div className="space-y-3">
          <h1 className="lg:text-[42px] md:text-4xl text-2xl hind-siliguri-bold text-dark leading-8 xl:leading-16">
            <span className="lg:text-[45px] md:text-4xl text-2xl">
              OneBite Premium
            </span>
            , আপনার রান্নাঘরে নির্ভরতার সঙ্গী
          </h1>
          <ul className="list-outside text-sm hind-siliguri-semibold text-gray space-y-3">
            <li className="flex gap-2 items-center">
              <CircleCheckBig size={15} />
              ১০০% বিশুদ্ধ ও প্রাকৃতিক সরিষার তেল
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <CircleCheckBig size={15} />
              হৃদরোগের ঝুঁকি কমাতে সহায়ক
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <CircleCheckBig size={15} />
              শক্তিশালী অ্যান্টিঅক্সিডেন্ট
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <CircleCheckBig size={15} />
              রাঁধুন ঘরের ঐতিহ্য মেনে
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <CircleCheckBig size={15} />
              প্রতিটি ফোঁটায় দেশি ঘ্রাণ ও স্বাদ
            </li>
          </ul>
          <h4 className="hind-siliguri-medium text-gray text-base md:leading-6 lg:leading-7">
            OneBite একটি মূল্যসাশ্রয়ী প্রিমিয়াম সরিষার তেল, যা খরচ অনুযায়ী
            যথাযথ মূল্য নিশ্চিত করে। খাঁটি সরিষার তেলের সুঘ্রান
          </h4>
          <OrderButton />
        </div>
        <div className="flex justify-center relative mb-[80px]">
          <Image
            className="z-10 rounded-2xl w-full object-cover max-w-[600px]"
            src={"/banner/customar-section-bg.png"}
            height={532}
            width={556}
            alt="secton-1"
          />
          <div className="bg-white text-black flex items-center justify-center flex-col p-4 z-20 absolute -translate-x-1/2 md:w-2/3 w-[75%] left-1/2 md:h-[160px] h-[120px] shadow-md -bottom-[80px] rounded-2xl">
            <h4 className="font-semibold pb-4">OneBite-এর খুশি গ্রাহকরা</h4>
            <TooltipProvider delayDuration={0}>
              <div className="flex -space-x-[5px] *:ring-3 *:ring-background">
                {users.map((user, index) => (
                  <Avatar className="lg:size-13 size-10" key={index}>
                    <AvatarImage
                      className="object-cover"
                      src={user.image}
                      alt={user.name}
                    />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <div className="bg-[#078B00] z-20 text-xs font-semibold text-white lg:size-13 size-10 flex items-center justify-center rounded-full">
                  +
                </div>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
