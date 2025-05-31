"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Premium Honey",
    image: "/slider/slider-6.png",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    title: "Golden Syrup",
    image: "/slider/slider-2.png",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: 3,
    title: "Maple Delight",
    image: "/slider/slider-3.png",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 4,
    title: "Organic Blend",
    image: "/slider/slider-1.png",
    color: "from-green-400 to-teal-500",
  },
  {
    id: 5,
    title: "Royal Honey",
    image: "/slider/slider-5.png",
    color: "from-purple-400 to-pink-500",
  },
];

export default function CarosolSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Create an infinite loop by showing cards at different positions
  const getVisibleCards = () => {
    const visibleCards = [];
    const totalVisible = 5;

    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      visibleCards.push({
        ...products[index],
        position: i,
        key: `${products[index].id}-${currentIndex}-${i}`, // Unique key for smooth transitions
      });
    }

    return visibleCards;
  };

  const getCardPosition = (position: number) => {
    const absPosition = Math.abs(position);

    if (absPosition === 0) {
      return {
        x: { mobile: 0, desktop: 0 },
        scale: { mobile: 1, desktop: 1.1 },
        rotate: 0,
        zIndex: 5,
        opacity: 1,
      };
    } else if (absPosition === 1) {
      return {
        x: {
          mobile: position > 0 ? 100 : -100,
          desktop: position > 0 ? 180 : -180,
        },
        scale: { mobile: 0.85, desktop: 0.9 },
        rotate: 0,
        zIndex: 4,
        opacity: 0.8,
      };
    } else if (absPosition === 2) {
      return {
        x: {
          mobile: position > 0 ? 180 : -180,
          desktop: position > 0 ? 320 : -320,
        },
        scale: { mobile: 0.7, desktop: 0.75 },
        rotate: 0,
        zIndex: 3,
        opacity: 0.6,
      };
    } else {
      return {
        x: {
          mobile: position > 0 ? 240 : -240,
          desktop: position > 0 ? 420 : -420,
        },
        scale: { mobile: 0.5, desktop: 0.6 },
        rotate: 0,
        zIndex: 2,
        opacity: 0.3,
      };
    }
  };

  // Don't render the interactive parts until mounted on client
  if (!isMounted) {
    return (
      <div className="md:h-[700px] h-[400px] relative overflow-hidden flex items-center justify-center p-4 sm:p-8">
        {/* Static background SVGs */}
        <svg
          className="absolute top-0 left-0"
          width="556"
          height="890"
          viewBox="0 0 856 1390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_91_910)">
            <path
              d="M-53.651 573.283C-78.6878 529.965 -114.318 430 -163.022 430C-203.78 430 -196.898 580.691 -125.741 705.648C39.0433 948.823 160.132 960 269.502 960C378.872 960 426 889.839 426 846.521C426 803.203 393.058 741.558 215.164 741.558C37.2727 741.558 -28.6143 616.601 -53.651 573.283Z"
              fill="#FF4A00"
              fillOpacity="0.6"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_91_910"
              x="-618"
              y="0"
              width="1474"
              height="1390"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="215"
                result="effect1_foregroundBlur_91_910"
              />
            </filter>
          </defs>
        </svg>
        <svg
          className="absolute right-0 top-0"
          width="145"
          height="182"
          viewBox="0 0 145 182"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5864 118.054C35.8579 196.387 154.446 186.93 158.781 123.592C163.198 58.8844 99.5073 60.7095 92.207 92.669"
            stroke="#078B00"
            strokeOpacity="0.1"
            strokeWidth="16"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M111.351 131.742C94.0331 143.585 34.4901 128.963 57.7183 63.9243C78.7896 4.92054 152.249 29.3516 154.758 30.3679"
            stroke="#FF5F21"
            strokeOpacity="0.1"
            strokeWidth="16"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M1.14027 79.8307C1.14027 79.8307 -4.41788 25.4103 54.4407 1"
            stroke="#343A40"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M32.9337 36.5047C32.9337 36.5047 13.2312 68.4435 23.518 84.2884C33.784 100.133 60.7661 53.8844 59.0447 37.1891C57.3233 20.4938 42.7642 22.63 32.9337 36.5047Z"
            fill="#FFC107"
            fillOpacity="0.2"
          />
          <path
            d="M97.3265 165.625C108.837 164.471 117.619 158.056 116.941 151.298C116.263 144.54 106.382 139.997 94.8717 141.151C83.3609 142.306 74.5791 148.721 75.2569 155.479C75.9348 162.237 85.8157 166.78 97.3265 165.625Z"
            fill="#FFC107"
            fillOpacity="0.2"
          />
        </svg>

        {/* Loading placeholder */}
        <div className="relative w-full max-w-sm sm:max-w-4xl h-64 sm:h-96 flex items-center justify-center">
          <div className="relative w-48 h-56 sm:w-80 sm:h-96">
            <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  const visibleCards = getVisibleCards();

  return (
    <div
      style={{
        backgroundImage: "url(/slider/slider-bg.png)",
        backgroundSize: "cover",
      }}
      className="md:h-[700px] h-[400px] relative overflow-hidden flex items-center justify-center p-4 sm:p-8"
    >
      <svg
        className="absolute top-0 left-0"
        width="556"
        height="890"
        viewBox="0 0 856 1390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_91_910)">
          <path
            d="M-53.651 573.283C-78.6878 529.965 -114.318 430 -163.022 430C-203.78 430 -196.898 580.691 -125.741 705.648C39.0433 948.823 160.132 960 269.502 960C378.872 960 426 889.839 426 846.521C426 803.203 393.058 741.558 215.164 741.558C37.2727 741.558 -28.6143 616.601 -53.651 573.283Z"
            fill="#FF4A00"
            fillOpacity="0.6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_91_910"
            x="-618"
            y="0"
            width="1474"
            height="1390"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="215"
              result="effect1_foregroundBlur_91_910"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className="absolute right-0 top-0"
        width="145"
        height="182"
        viewBox="0 0 145 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5864 118.054C35.8579 196.387 154.446 186.93 158.781 123.592C163.198 58.8844 99.5073 60.7095 92.207 92.669"
          stroke="#078B00"
          strokeOpacity="0.1"
          strokeWidth="16"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M111.351 131.742C94.0331 143.585 34.4901 128.963 57.7183 63.9243C78.7896 4.92054 152.249 29.3516 154.758 30.3679"
          stroke="#FF5F21"
          strokeOpacity="0.1"
          strokeWidth="16"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M1.14027 79.8307C1.14027 79.8307 -4.41788 25.4103 54.4407 1"
          stroke="#343A40"
          strokeOpacity="0.2"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M32.9337 36.5047C32.9337 36.5047 13.2312 68.4435 23.518 84.2884C33.784 100.133 60.7661 53.8844 59.0447 37.1891C57.3233 20.4938 42.7642 22.63 32.9337 36.5047Z"
          fill="#FFC107"
          fillOpacity="0.2"
        />
        <path
          d="M97.3265 165.625C108.837 164.471 117.619 158.056 116.941 151.298C116.263 144.54 106.382 139.997 94.8717 141.151C83.3609 142.306 74.5791 148.721 75.2569 155.479C75.9348 162.237 85.8157 166.78 97.3265 165.625Z"
          fill="#FFC107"
          fillOpacity="0.2"
        />
      </svg>

      <div className="relative w-full max-w-sm sm:max-w-4xl h-64 sm:h-96 flex items-center justify-center">
        {/* Cards */}
        <div className="relative w-48 h-56 sm:w-80 sm:h-96">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((card) => {
              const cardPosition = getCardPosition(card.position);

              return (
                <motion.div
                  key={card.key}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing touch-pan-x"
                  style={{ zIndex: cardPosition.zIndex }}
                  initial={{
                    x: card.position > 0 ? 300 : -300,
                    scale: 0.8,
                    opacity: 0,
                    rotate: 0,
                  }}
                  animate={{
                    x: isMobile
                      ? cardPosition.x.mobile
                      : cardPosition.x.desktop,
                    scale: isMobile
                      ? cardPosition.scale.mobile
                      : cardPosition.scale.desktop,
                    rotate: cardPosition.rotate,
                    opacity: cardPosition.opacity,
                  }}
                  exit={{
                    x: card.position > 0 ? -300 : 300,
                    scale: 0.8,
                    opacity: 0,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  drag="x"
                  dragConstraints={{ left: -50, right: 50 }}
                  onDragEnd={handleDragEnd}
                  whileDrag={{
                    scale: isMobile
                      ? cardPosition.scale.mobile * 1.05
                      : cardPosition.scale.desktop * 1.05,
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="w-full h-full rounded-2xl sm:rounded-3xl bg-white shadow-lg sm:shadow-xl overflow-hidden border border-white/20"
                  ></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-0 hover:bg-gray-50 z-10 text-gray-700 cursor-pointer h-10 w-10 sm:h-12 sm:w-12 rounded-full"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg border-0 hover:bg-gray-50 z-10 text-gray-700 cursor-pointer h-10 w-10 sm:h-12 sm:w-12 rounded-full"
          onClick={goToNext}
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-orange-500 scale-125"
                  : "bg-white/70 hover:bg-white/90"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
