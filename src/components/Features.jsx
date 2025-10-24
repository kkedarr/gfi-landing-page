import React from "react";
import { motion } from "framer-motion";
import SeamlessP2PImage1 from "../assets/images/seamlessptopimage1.png";
import SeamlessP2PImage2 from "../assets/images/seamlessptopimage2.png";
import SeamlessP2PImage3 from "../assets/images/seamlessptopimage3.png";

const Feature = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-20 py-12 sm:py-16 bg-white text-gray-900 overflow-visible">
      <div className="max-w-6xl mx-auto">
        {/* === Header === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-[11px] sm:text-sm font-bold text-yellow-600 uppercase tracking-widest mb-1 sm:mb-2">
            FEATURES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-snug">
            What you can do with the app.
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto md:mx-0">
            Stay in charge of your financial life and focus on what matters most.
          </p>
        </motion.div>

        {/* === International Transfers Section === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="mt-10 bg-[#AB6400] text-white rounded-3xl px-5 sm:px-8 md:px-10 py-10 sm:py-14 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
            {/* Left content */}
            <div className="md:max-w-[55%] text-center md:text-left">
              <span className="inline-block bg-[#C18300] text-white text-[10px] sm:text-xs px-4 sm:px-5 py-1 rounded-full mb-4 sm:mb-6">
                International Transfers
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-snug">
                Move money seamlessly
                <br />
                <span className="text-[#FFD56A]">Across borders</span>
              </h3>

              <p className="text-white/80 mt-3 sm:mt-4 text-[12px] sm:text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                Send money quickly to your loved ones in Africa with support for
                over 15 currencies. Benefit from great rates, clear fees, and the
                reliability of stablecoins for every transfer.
              </p>
            </div>

            {/* Right side - Flags grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-0 md:w-[45%] justify-items-center">
              {[
                "ng",
                "ke",
                "za",
                "gh",
                "tz",
                "mr",
                "zm",
                "cd",
                "ci",
                "rw",
                "sn",
                "sl",
              ].map((code, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="aspect-square w-12 sm:w-14 md:w-16 rounded-full bg-[#F8E9C0]/90 flex items-center justify-center shadow-inner"
                >
                  <div className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={`https://flagcdn.com/w80/${code}.png`}
                      alt={`flag-${code}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://via.placeholder.com/40/ffffff/cccccc?text=+";
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* === Lower Feature Cards === */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Seamless P2P */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="bg-[#FEFBE9] rounded-3xl p-6 sm:p-8 shadow hover:shadow-md transition-all duration-300 text-center md:text-left"
          >
            <span className="inline-block bg-[#FDEB9A] text-gray-800 text-[10px] sm:text-xs px-4 sm:px-5 py-1 rounded-full mb-3 sm:mb-4">
              Seamless P2P
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-900 mb-3">
              Seamless <span className="text-[#A05A00]">P2P</span>
            </h3>

            <p className="text-gray-600 text-[12px] sm:text-sm mb-5 sm:mb-6">
              Perform seamless P2P with verified users.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              {[SeamlessP2PImage1, SeamlessP2PImage2, SeamlessP2PImage3].map(
                (src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`avatar-${i}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-[90px] sm:w-[110px] md:w-[120px] h-[90px] sm:h-[110px] md:h-[120px] rounded-full object-cover shadow-sm"
                  />
                )
              )}
            </div>
          </motion.div>

          {/* Pay Instantly with GFI tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="bg-[#F8F8FF] rounded-3xl p-6 sm:p-8 shadow hover:shadow-md transition-all duration-300 text-center md:text-left"
          >
            <span className="inline-block bg-[#DAD6FF] text-gray-700 text-[10px] sm:text-xs px-4 sm:px-5 py-1 rounded-full mb-3 sm:mb-4">
              @nametag
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Pay instantly with GFI tag
            </h3>

            <p className="text-gray-600 text-[12px] sm:text-sm mb-5 sm:mb-6 max-w-md mx-auto md:mx-0">
              Pay friends and family using your name tag. Simply search or enable
              contact access — all with no cost.
            </p>

            <div className="space-y-3 sm:space-y-4 relative">
              {/* Blue card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#E1E6FF] border-2 border-blue-200 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-sm"
              >
                <p className="text-gray-900 text-sm sm:text-base font-semibold">
                  You sent <span className="text-blue-600">@codeboss</span> $150.99
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600">
                  Grocery shopping
                </p>
              </motion.div>

              {/* Purple card — slanted */}
              <motion.div
                initial={{ rotate: -4 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-[#EBD9FF] border-2 border-pink-200 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-md transform-gpu origin-center"
              >
                <p className="text-gray-900 text-sm sm:text-base font-semibold">
                  You sent <span className="text-purple-600">@roosevelt</span> $200
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600">Data stipend</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
