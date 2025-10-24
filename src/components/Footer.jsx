import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/images/gfilogo.png";
import FooterLogo from "../assets/images/footersecondlogo.png";
import textLogo from "../assets/images/gfilogotext.png";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#FFBA18] text-black py-14 px-6 md:px-20 font-geist"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">

        {/* === Left section === */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Global Financial Investments Logo" className="w-10 h-10 object-contain" />
              <img src={textLogo} alt="Logo Text" className="h-6 object-contain" />
            </div>
          </div>

          <p className="text-sm text-black/80 leading-relaxed mb-6 max-w-sm">
            A secure multi-currency wallet that lets you deposit, withdraw, and transfer both fiat and crypto across Africa and global markets.
          </p>

          <p className="text-xs text-black/70">
            © Copyright 2025, All Rights Reserved
          </p>
        </motion.div>

        {/* === Middle links section === */}
        <motion.div
          className="w-full md:w-auto flex flex-col text-sm gap-2 md:gap-3 text-left items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h4 className="font-semibold mb-2 text-lg md:text-base">Quick links</h4>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-2 w-full">
            <Link
              to="/privacy"
              className="text-[#1C2024] hover:underline hover:translate-x-1 transition-transform duration-200"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="text-[#1C2024] hover:underline hover:translate-x-1 transition-transform duration-200"
            >
              Terms of service
            </Link>
            <a
              href="#"
              className="text-[#1C2024] hover:underline hover:translate-x-1 transition-transform duration-200"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-[#1C2024] hover:underline hover:translate-x-1 transition-transform duration-200"
            >
              WhatsApp Community
            </a>
          </div>

          <motion.img
            src={FooterLogo}
            alt="Global Financial Investments Secondary Logo"
            className="w-[150px] h-auto object-contain mt-4 sm:mt-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>

        {/* === Right section (email form) === */}
        <motion.div
          className="w-full md:w-auto flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <motion.div
            className="flex flex-col sm:flex-row items-stretch bg-[#4F3422] rounded-lg overflow-hidden w-full max-w-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <input
              type="email"
              placeholder="Enter email"
              className="flex-grow px-4 py-3 bg-[#4F3422] text-white placeholder:text-gray-300 text-sm focus:outline-none w-full sm:w-auto"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFBA18] text-[#4F3422] px-6 py-3 text-sm font-semibold rounded-none sm:rounded-lg border-2 border-[#4F3422] hover:bg-white hover:text-black transition-all duration-300 mt-3 sm:mt-0"
            >
              Join waitlist
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
