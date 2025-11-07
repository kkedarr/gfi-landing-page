import { motion } from "framer-motion";
import brandImage from "../assets/images/herotwoleftimage.png";
import brandLogo from "../assets/images/gfilogo.png"; 
import textLogo from "../assets/images/gfilogotext.png";

const Intro = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <img
            src={brandImage}
            alt="Glovest Mobile Preview"
            className="w-full max-w-[520px] mx-auto rounded-3xl object-contain"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img
              src={brandLogo}
              alt="Global Financial Investments"
              className="w-10 h-10 mr-3 object-contain"
            />
            <img src={textLogo} alt="Logo Text" className="h-4 sm:h-5 md:h-6 object-contain max-w-[70px] sm:max-w-[100px]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-normal text-[#1C2024] mb-5 leading-tight">
            <span className="text-[#1C2024] font-semibold ">Glovest</span>{" "}
            by Global Financial Investment
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 text-base md:text-md leading-relaxed mb-4">
            Glovest brings the power of international finance to your fingertips.
            Backed by <span className="font-semibold text-[#1C2024]">Global Financial Investment</span>,
            our mission is to make cross-border payments faster, smarter, and more connected than ever.
          </p>

          <p className="text-gray-600 text-base md:text-md leading-relaxed">
            Glovest brings the power of international finance to your fingertips.
            Backed by <span className="font-semibold text-[#1C2024]">Global Financial Investment</span>,
            our mission is to make cross-border payments faster, smarter, and more connected than ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
