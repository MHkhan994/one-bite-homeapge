import Image from "next/image";
import React from "react";
import OrderButton from "../common/OrderButton";

const MiddleSection = () => {
  return (
    <section className="relative flex overflow-hidden">
      <svg
        className="absolute left-0 top-0 z-0"
        width="905"
        height="1390"
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

      <div className="my-container py-20 xl:flex gap-7 relative z-10">
        <div className="relative w-full max-w-[560px] mx-auto xl:mx-0">
          <div className="bg-[#078B00] bottom-4 -rotate-[10deg] h-[255px] w-[315px] rounded-[60px] absolute"></div>
          <div className="ps-14 mb-16">
            <Image
              className="z-10 relative h-[315px] w-[402px]"
              src={"/banner/section-1.png"}
              height={315}
              width={402}
              alt="secton-1"
            />
            <Image
              className="z-10 absolute top-[40%] left-[40%] rounded-[36px] h-[235px] w-[313px]"
              src={"/banner/section-1-extra.png"}
              height={235}
              width={313}
              alt="secton-1"
            />
          </div>
        </div>

        <div className="text-dark space-y-3 xl:pr-16 w-full">
          <h1 className="text-[42px] hind-siliguri-bold">
            <span className="text-[45px]">OneBite Premium</span>, <br />{" "}
            বিশুদ্ধতায় প্রতিদিন
          </h1>
          <ul className="list-disc text-green text-sm leading-6 hind-siliguri-semibold xl:pr-10">
            <li>
              One Heart-এ আমরা বিশ্বাস করি, প্রকৃতির কাছে ফেরাটাই স্বাস্থ্যকর
              জীবনের প্রথম ধাপ।
            </li>
            <li>
              OneBite সরিষার তেল আপনার পরিবারকে দিচ্ছে বিশুদ্ধ স্বাদ, স্বাস্থ্য
              ও ঐতিহ্যের ছোঁয়া।
            </li>
          </ul>
          <h4 className="hind-siliguri-medium text-gray text-base md:leading-6 lg:leading-7">
            ওয়ানবাইট প্রিমিয়াম আধুনিক বাঙালি গৃহিণীর রান্নাঘরে আবহমান বাংলা আর
            আধুনিকতার এক মেলবন্ধন.
          </h4>
          <OrderButton />
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
