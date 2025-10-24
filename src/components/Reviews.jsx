import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Finally, I can receive payments from my international clients without the usual delays. The wallet handles both crypto and local currency perfectly – it’s been a game-changer for my freelance work.",
    name: "Tolu A.",
    location: "Nigeria",
    rating: 5,
  },
  {
    id: 2,
    text: "I use the app to pay suppliers in Ghana and Namibia. The transfers are fast, and the exchange rates are fair. It’s simple, secure, and reliable – exactly what small businesses need.",
    name: "Kabelo M.",
    location: "South Africa",
    rating: 5,
  },
  {
    id: 3,
    text: "The staking feature is my favorite part. I can grow my stablecoin balance while still being able to send funds globally. It’s like having banking and investing in one app.",
    name: "Anastasia",
    location: "Russia",
    rating: 5,
  },
  {
    id: 4,
    text: "Finally, I can receive payments from my international clients without the usual delays. The wallet handles both crypto and local currency perfectly – it’s been a game-changer for my freelance work.",
    name: "Tolu A.",
    location: "Nigeria",
    rating: 5,
  },
  {
    id: 5,
    text: "I use the app to pay suppliers in Ghana and Namibia. The transfers are fast, and the exchange rates are fair. It’s simple, secure, and reliable – exactly what small businesses need.",
    name: "Kabelo M.",
    location: "South Africa",
    rating: 5,
  },
  {
    id: 6,
    text: "The staking feature is my favorite part. I can grow my stablecoin balance while still being able to send funds globally. It’s like having banking and investing in one app.",
    name: "Anastasia",
    location: "Russia",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white text-gray-900 font-geist">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm font-semibold text-[#FFB800] uppercase tracking-wide mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tighter">
          Customer Reviews
        </h2>
        <p className="text-gray-500">Hear what our users are saying</p>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {testimonials.map((review) => (
          <motion.div
            key={review.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F9F9F9] rounded-2xl p-8 flex flex-col justify-between min-h-[250px] shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-[#5E5E5E] text-[15px] leading-relaxed mb-6">
              “{review.text}”
            </p>
            <div className="flex items-center justify-between">
              {/* Avatar + Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="text-[#FFB800] text-sm">
                {"★".repeat(review.rating)}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Reviews;
