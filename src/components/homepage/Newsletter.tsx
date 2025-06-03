import React from "react";
import OrderButton from "../common/OrderButton";

const Newsletter = () => {
  return (
    <div
      className="lg:py-16 md:py-10 py-6 bg-gradient-to-r from-amber-400 to-amber-50"
      style={{
        backgroundImage: "url(/slider/newsletter-bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="my-container">
        <div
          style={{
            backgroundImage: "url(/slider/newletter-shape.png)",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
          className="bg-[#148800] min-h-[252px] flex items-center rounded-2xl lg:p-8 md:p-6 p-4 relative overflow-hidden shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-start w-full lg:items-center justify-between relative z-10">
            <div className="text-white mb-6 lg:mb-0 lg:flex-1">
              <h2 className="hind-siliguri-bold text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                সততা ও স্বাদের প্রতিশ্রুতি — এক নির্ধারিত মূল্যে
              </h2>
              <p className="hind-siliguri-medium text-green-100 text-sm lg:text-base mb-4">
                স্বাদ, পুষ্টি ও নির্ভরযোগ্যতার একমাত্র ঠিকানা এখন এক নির্ধারিত
                মূল্যে"
              </p>

              <OrderButton />
            </div>

            <div className="bg-white rounded-xl md:p-6 p-3 shadow-xl lg:ml-8">
              <div className="text-center flex items-center gap-2">
                <div className="text-3xl lg:text-4xl hind-siliguri-bold font-bold text-green-600">
                  ৳১৪০০
                </div>
                <div className="text-gray-600 text-sm ">(৫ লিটার বোতল)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
