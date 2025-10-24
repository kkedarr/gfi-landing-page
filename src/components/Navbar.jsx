import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/gfilogo.png";
import textLogo from "../assets/images/gfilogotext.png";
import earlyaccesssvg from "../assets/images/earlyaccesssvg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to adjust navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFBA18]/90 shadow-md backdrop-blur-xl py-2"
          : "bg-[#FFEBC7] border-b border-gray-200 py-3"
      }`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 w-full overflow-x-hidden">
        {/* Logo Section */}
        <Link to="/">
        <motion.div
          className="flex items-center gap-1 sm:gap-2 cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 150 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 object-contain shrink-0"
          />
          <img
            src={textLogo}
            alt="Logo Text"
            className="h-4 sm:h-5 md:h-6 object-contain max-w-[80px] sm:max-w-[100px]"
          />
        </motion.div>
        </Link>

        {/* Desktop Button Only */}
        <div className="hidden sm:block">
          <motion.button
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#1C2024] text-white px-5 py-2.5 rounded-md font-medium text-sm md:text-base transition-all duration-300 hover:bg-black"
          >
            <span>Get Early Access</span>
            <motion.img
              src={earlyaccesssvg}
              alt="Early Access Icon"
              className="w-5 h-5"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 3,
                duration: 1.2,
                ease: 'easeInOut',
              }}
            />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;


