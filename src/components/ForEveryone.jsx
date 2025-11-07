import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import studentImg from "../assets/images/studentuser.png";
import remoteImg from "../assets/images/remoteuser.png";
import individualImg from "../assets/images/studentuser.png";
import smeImg from "../assets/images/remoteuser.png";

const UsersSection = () => {
  const slides = [
    {
      label: "Students",
      description:
        "Send and receive money globally with ease. Ideal for students, travelers, and everyday users managing multiple currencies.",
      image: studentImg,
    },
    {
      label: "Remote Workers & Creators",
      description:
        "Get paid in any currency, convert funds instantly, and withdraw to local accounts or crypto wallets.",
      image: remoteImg,
    },
    {
      label: "Individuals & Professionals",
      description:
        "Manage cross-border payments and savings easily, whether for personal finance or client transactions.",
      image: individualImg,
    },
    {
      label: "SMEs",
      description:
        "Pay suppliers, accept foreign payments, and grow your business globally with ease and confidence.",
      image: smeImg,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const interactionTimeout = useRef(null);

  useEffect(() => {
    if (isUserInteracting) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isUserInteracting, slides.length]);

  const handleUserClick = (index) => {
    setActiveIndex(index);
    setIsUserInteracting(true);
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 10000);
  };

  const visibleSlides = [
    slides[activeIndex],
    slides[(activeIndex + 1) % slides.length],
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title & Subtitle */}
        <div className="text-center mb-10">
          <p className="text-[#AB6400] font-medium text-sm tracking-wide uppercase">
            Who Can Use Glovest
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1C2024] mt-2 tracking-tighter">
            Built for Everyone in the Global Financial Network
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-md text-[#838383]">
            Whether you’re sending money home, managing international payments,
            or growing your assets — Glovest makes cross-border finance simple,
            fast, and secure.
          </p>
        </div>

        {/* MOBILE VIEW */}
        <div className="flex flex-col gap-6 md:hidden mb-14">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={slide.image}
                alt={slide.label}
                className="w-full h-56 object-cover"
              />

              <div className="px-5 py-5">
                <span className="inline-block bg-black/5 text-xs px-3 py-1 rounded-full font-medium text-gray-700 mb-3">
                  {slide.label}
                </span>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
        {/* Buttons */}
        <div
            className="
            w-[740px] mx-auto
            border rounded-full flex flex-wrap
            py-2 px-1 justify-center gap-4 mb-14
            "
        >
            {slides.map((slide, index) => (
            <button
                key={index}
                onClick={() => handleUserClick(index)}
                className={`px-5 py-2 text-md rounded-full text-[#838383] transition-all duration-300 ${
                activeIndex === index
                    ? "bg-gray-100 text-[#202020] scale-105"
                    : "bg-transparent hover:border hover:rounded-full text-gray-700 hover:bg-gray-100 scale-100"
                }`}
            >
                {slide.label}
            </button>
            ))}
        </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden h-[500px]">
            <motion.div
                className="flex gap-8 md:gap-10 transition-transform duration-700 ease-in-out"
                animate={{
                x: `-${activeIndex * 50}%`,
                }}
                transition={{
                duration: 0.8,
                ease: "easeInOut",
                }}
            >
                {slides.concat(slides).map((slide, i) => (
                <div
                    key={i}
                    className="min-w-[50%] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg"
                >
                    <img
                    src={slide.image}
                    alt={slide.label}
                    className="w-full h-[480px] object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 bg-black/40 rounded-2xl" />

                    {/* Label */}
                    <span
                    className="
                        absolute top-6 right-6
                        inline-block bg-white/25 backdrop-blur-md
                        text-sm px-4 py-2 rounded-full font-medium text-white
                    "
                    >
                    {slide.label}
                    </span>

                    {/* Description */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-white md:text-md leading-relaxed">
                        {slide.description}
                    </p>
                    </div>
                </div>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;