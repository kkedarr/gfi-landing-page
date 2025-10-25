import React from "react";
import { motion } from "framer-motion";
import WaitlistPhone from "../assets/images/waitlist-phone.png";

const JoinWaitlist = () => {
  return (
    <motion.section
      className="w-full bg-[#1A1A1A] text-white rounded-2xl sm:rounded-3xl md:rounded-[2rem] 
      px-4 sm:px-8 md:px-16 py-12 sm:py-16 flex flex-col md:flex-row 
      justify-between items-center gap-10 max-w-6xl mx-auto my-16 sm:my-20 overflow-hidden font-geist"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* === Left Side === */}
      <motion.div
        className="flex-1 w-full text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl text-white sm:text-3xl md:text-4xl font-semibold mb-3 tracking-tight leading-snug">
          Join the waitlist today
        </h2>

        <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-md mx-auto md:mx-0">
          You’ll be the first to know when we launch, get access to beta testing,
          and enjoy free transactions.
        </p>

        {/* === Email Input === */}
        <div className="flex flex-col sm:flex-row items-center 
        bg-[#646464] rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm 
        mx-auto md:mx-0 transition-transform duration-300 hover:scale-[1.02]">
          <input
            type="email"
            placeholder="Enter email"
            className="flex-grow w-auto px-4 py-3 bg-[#646464] text-gray-100 placeholder-gray-300 
            text-sm focus:outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A1A1A] text-white w-full sm:w-auto px-6 py-3 
            text-sm font-semibold border-2 border-[#646464] rounded-xl 
            hover:bg-white hover:text-black transition-all duration-300"
          >
            Join waitlist
          </motion.button>
        </div>
      </motion.div>

      {/* === Right Side — Image === */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <motion.img
          src={WaitlistPhone}
          alt="App preview"
          className="w-[200px] sm:w-[260px] md:w-[340px] object-contain"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default JoinWaitlist;
