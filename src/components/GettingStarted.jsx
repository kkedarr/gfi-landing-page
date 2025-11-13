import React from "react";
import { motion } from "framer-motion";
import Step1left from "../assets/images/step1left.png";
import Step1right from "../assets/images/step1right.png";
import Step2left from "../assets/images/step2left.png";
import Step2right from "../assets/images/step2right.png";
import Step3left from "../assets/images/step3left.png";
import Step3right from "../assets/images/step3right.png";

const GettingStarted = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white text-gray-900 font-geist overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tighter">
          Get Started in 3 Easy Steps
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Fast, secure, and designed for everyone.
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="flex flex-col items-center gap-10">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Left: Image + Overlay */}
          <div className="relative w-full md:w-[570px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
            <img
              src={Step1left}
              alt="Step 1 App Screen"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F4EAFE] flex flex-col justify-center px-8 text-center rounded-t-none">
              <h3 className="text-2xl font-bold mb-2 tracking-tighter text-[#3B1E72]">
                1. Sign Up & Verify
              </h3>
              <p className="text-[#3B1E72] text-sm leading-relaxed">
                Create an account using your email or phone number. Complete KYC
                with your ID and a selfie.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="rounded-2xl overflow-hidden w-full md:w-[570px] h-[400px] md:h-[500px] shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={Step1right}
              alt="User step 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Left: Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="rounded-2xl overflow-hidden w-full md:w-[570px] h-[400px] md:h-[500px] shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={Step2left}
              alt="User step 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Image + Overlay */}
          <div className="relative w-full md:w-[570px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
            <img
              src={Step2right}
              alt="Step 2 App Screen"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#E9F9F1] flex flex-col justify-center px-8 text-center rounded-t-none">
              <h3 className="text-2xl font-bold mb-2 tracking-tighter text-[#0B614B]">
                2. Fund Your Wallet
              </h3>
              <p className="text-[#0B614B] text-sm leading-relaxed">
                Add funds via local bank, mobile money, or crypto transfer.
                Instantly convert between fiat and stablecoins.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Left: Image + Overlay */}
          <div className="relative w-full md:w-[570px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
            <img
              src={Step3left}
              alt="Step 3 App Screen"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#FDEAF1] flex flex-col justify-center px-8 text-center rounded-t-none">
              <h3 className="text-2xl font-bold mb-2 tracking-tighter text-[#8A004C]">
                3. Send or Invest
              </h3>
              <p className="text-[#8A004C] text-sm leading-relaxed">
                Send money across borders, or explore staking and investment
                tools to grow your assets.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="rounded-2xl overflow-hidden w-full md:w-[570px] h-[400px] md:h-[500px] shadow hover:shadow-xl transition-all duration-300"
          >
            <img
              src={Step3right}
              alt="User step 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStarted;
