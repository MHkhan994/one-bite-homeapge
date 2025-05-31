import Newsletter from "@/components/homepage/Newsletter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const OrderPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="my-16 grid grid-cols-1 xl:grid-cols-2 gap-8 my-container items-center">
        <div className="text-black space-y-4">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold xl:leading-16 pb-4">
            আপনি কি আমাদের Onebite Premium ক্রয় করতে চান?
          </h2>
          <div className="flex md:flex-row flex-col gap-4 w-full">
            <div className="bg-[#078B001A] rounded-lg p-5 gap-3 flex flex-col justify-center w-full py-2 min-h-[100px]">
              <p className="flex text-gray font-medium text-base items-center gap-2">
                <Mail /> ইমেইল করুন
              </p>
              <h3 className="text-black font-medium lg:text-2xl text-lg">
                support@gmail.com
              </h3>
            </div>
            <div className="bg-[#FF4A001A] rounded-lg flex flex-col justify-center gap-3 p-5 py-2 w-full min-h-[100px]">
              <p className="flex text-gray font-medium text-base items-center gap-2">
                <Phone />
                কল করুন
              </p>
              <h3 className="text-black font-medium lg:text-2xl text-lg">
                +8801754123456
              </h3>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 w-full">
            <Input placeholder="নাম *" />
            <Input placeholder="ইমেইল *" />
          </div>
          <Input placeholder="আপনার ফোন নম্বর *" />
          <Textarea className="min-h-36" placeholder="একটা বার্তা লিখুন..." />
        </div>
        <div>
          <Image
            className="w-full h-full rounded-4xl object-cover"
            src={"/banner/section-1-extra.png"}
            height={550}
            width={521}
            alt="secton-1"
          />
        </div>
        {/* <Image
          className="z-10 absolute h-[550px] top-16 w-[550px] right-[100px] object-cover rounded-l-4xl"
          src={"/banner/section-1-extra.png"}
          height={550}
          width={521}
          alt="secton-1"
        /> */}
      </div>
      <Newsletter />
    </div>
  );
};

export default OrderPage;
