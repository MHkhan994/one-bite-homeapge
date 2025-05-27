import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#021701] text-white mt-16">
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

        <div className="mx-auto px-8 py-12">
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
                    href="#"
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    আমাদের সম্পর্কে
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    পণ্য সম্পর্কে
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors text-sm"
                  >
                    মূল্য তালিকা
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
                <p className="flex items-center gap-2">ফোন: +৮৮০ ১২৩৪৫৬৭৮৯</p>
                <p className="flex items-center gap-2">
                  ইমেইল: info@onebite.com
                </p>
                <p className="flex items-center gap-2">
                  ঠিকানা: হাউজ #১২৩, রোড #৪, ধানমন্ডি, ঢাকা-১২০৯, বাংলাদেশ
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
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
