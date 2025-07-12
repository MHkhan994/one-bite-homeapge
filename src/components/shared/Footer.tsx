import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#021701] text-white">
      <div className="my-container relative">
        <svg
          className="absolute bottom-0 left-0"
          width="175"
          height="188"
          viewBox="0 0 175 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M105.202 183.063C83.1805 194.401 56.7947 185.558 46.0044 163.225C31.6178 133.457 35.1792 103.785 15.8304 74.2748C3.17249 54.9721 -11.1641 21.7281 13.4084 5.24063C28.6779 -5.00327 48.2392 -0.336052 76.0394 20.1829C95.3595 34.4396 103.871 37.8247 126.16 40.1161C174.48 45.0779 189.406 67.8144 159.803 107.345C142.618 130.293 131.684 169.435 105.202 183.063Z"
            fill="#F2C94C"
            fill-opacity="0.03"
          />
        </svg>

        <div className="mx-auto md:py-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <Image
                  src={"/logo.png"}
                  className="w-[80px] md:w-[100px] lg:w-[160px] "
                  height={60}
                  width={160}
                  alt="logo"
                />
              </div>
              <p className=" text-gray-300 max-w-[260px] text-sm leading-relaxed">
                OneBite একটি প্রাকৃতিক ও খাঁটি সরিষার তেল প্রস্তুতকারী
                ব্র্যান্ড, যা প্রতিটি ঘরে স্বাস্থ্যকর রান্নার স্বাদ পৌঁছে দিতে
                প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>

            <div className="space-y-4 plus-jakarta-sans">
              <h3 className="text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিংক</h3>
              <ul className="bengali-font space-y-2 text-gray-300">
                <li>
                  <a
                    href="/#about-us"
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a
                    href="/#about-product"
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    পণ্য সম্পর্কে
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    মূল্য তালিকা
                  </a>
                </li>
                <li>
                  <a
                    href="/order"
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    অর্ডার করুন
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 plus-jakarta-sans">
              <h3 className="plus-jakarta-sans text-lg font-semibold mb-4">
                যোগাযোগ
              </h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <p className="flex items-center gap-2">ফোন: +8801754123456</p>
                <p className="flex items-center gap-2">
                  ইমেইল: contact@oneheartbd.com
                </p>
                <p className="flex items-center gap-2">
                  ঠিকানা: Road 1, Metro View Housing Society,
                  Uttara, Dhaka - 1230
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.facebook.com/oneheart012"
                  target="_blank"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 p-1 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://wa.me/8801754123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 p-1 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <div className="size-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#ffffff"
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-4">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <p className="plus-jakarta-sans text-gray-400 text-sm text-center font-bold">
                copyright ২০২৫ OneBite. সর্বস্বত্ব সংরক্ষিত।
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
