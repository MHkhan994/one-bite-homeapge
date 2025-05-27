import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { CircleArrowRight } from "lucide-react";
import OrderButton from "../common/OrderButton";

const Banner = () => {
  return (
    <div className="bg-secondary relative lg:h-[calc(520px)] overflow-hidden py-10">
      <Image
        className="opacity-30 absolute inset-0 z-0 h-full object-cover"
        width={1460}
        height={560}
        src={"/banner/banner-bg.png"}
        alt="banner-bg"
      />
      <div className="my-container lg:flex items-center h-full relative z-10">
        <div className="lg:w-[60%] lg:space-y-6 md:space-y-4 space-y-3 text-center lg:text-start">
          <div className="text-dark lg:leading-20 md:leading-16 lg:text-[50px] md:text-[36px] text-2xl hind-siliguri-bold font-black">
            <h2 className="inline">
              <p className="inline relative text-primary">
                OneBite
                <svg
                  className="absolute -bottom-3 left-0 lg:w-[178px] md:w-[130px] w-[90px]"
                  width="178"
                  height="18"
                  viewBox="0 0 178 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 15C31.4854 2.32432 90.861 -4.01349 177 15"
                    stroke="#FF4A00"
                    strokeWidth="5"
                  />
                </svg>
              </p>{" "}
              Premium
            </h2>
            , খাঁটি স্বাদ, সুগন্ধ আর বিশুদ্ধতার প্রতীক{" "}
          </div>
          <h4 className="hind-siliguri-semibold text-gray lg:text-xl md:text-base text-sm md:leading-6 lg:leading-7 lg:pr-[140px]">
            "OneBite Premium" একটি আনকম্প্রোমাইসড কোয়ালিটি মাস্টার্ড অয়েল, যা
            নিশ্চিতভাবে বাংলাদেশের বাজারে সেরা মানের তেলগুলোর একটি
          </h4>
          <OrderButton />
        </div>
        <div className="lg:absolute py-5 lg:py-0 lg:w-[52%] right-0">
          <Image
            className=""
            width={1650}
            height={863}
            src={"/banner/banner-oil.png"}
            alt="banner-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
