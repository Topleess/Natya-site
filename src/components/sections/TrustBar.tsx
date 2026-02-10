import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const partners = [
  "/images/partners/partner-1.jpg",
  "/images/partners/partner-2.jpg",
  "/images/partners/partner-3.jpg", // Corrected extension based on list
  "/images/partners/partner-4.jpg",
  "/images/partners/partner-5.jpg",
  "/images/partners/partner-6.jpg",
  "/images/partners/partner-7.jpg",
  "/images/partners/partner-8.jpg",
  "/images/partners/partner-9.jpg",
  "/images/partners/partner-10.png",
  "/images/partners/partner-11.jpg",
  "/images/partners/partner-12.png",
  "/images/partners/partner-13.jpg",
  "/images/partners/partner-14.jpg",
  "/images/partners/partner-15.png",
  "/images/partners/partner-16.jpg",
];

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111] border-y border-white/5 relative z-10 overflow-hidden py-12">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs text-gray-600 uppercase tracking-[0.3em] font-bold font-display">
          {t.partners}
        </p>
      </div>

      <div className="relative flex overflow-hidden mask-gradient-x">
        <motion.div
          className="flex gap-12 lg:gap-20 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
            repeatType: "loop"
          }}
          style={{ width: "max-content" }}
        >
          {/* Double the list for seamless loop */}
          {[...partners, ...partners].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 relative opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img
                src={src}
                alt={`Partner ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#111] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#111] to-transparent z-10" />
      </div>
    </section>
  );
};