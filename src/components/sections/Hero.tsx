import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-12 overflow-hidden bg-[#111]">
      {/* Reference Background Style: Tech Grid & Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,160,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

        {/* Large Soft Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-mint/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-mint/20 bg-brand-mint/5 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,210,160,0.1)]">
              <span className="text-brand-mint font-medium text-sm tracking-wider uppercase">{t.hero.role}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-display font-black leading-[0.9] text-white tracking-tighter mb-6 break-words">
              {t.hero.name_first} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.hero.name_second}</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="primary" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.cta_primary} <ArrowDownCircle className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Image - Styled like reference with abstract shape background */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[500px]"
          >
            {/* Abstract Blob Behind Image */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0 text-brand-mint/20 animate-pulse-slow">
              <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.4,56.3C23.7,63.1,12.1,69.1,-0.9,70.7C-13.9,72.3,-26.6,69.4,-38,62.5C-49.4,55.6,-59.5,44.7,-68.1,32.2C-76.7,19.7,-83.8,5.6,-81.9,-7.4C-80,-20.4,-69.1,-32.3,-57.4,-41.8C-45.7,-51.3,-33.2,-58.4,-20.8,-66.4C-8.4,-74.4,3.9,-83.3,16.8,-83.8C29.7,-84.3,43.2,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>

            {/* Main Image Container */}
            <div className="relative z-10 w-[300px] h-[400px] md:w-[380px] md:h-[480px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-[#1a1a1a] mx-auto rotate-[-2deg] hover:rotate-0 transition-all duration-500">
              <img
                src="https://picsum.photos/id/64/800/1000"
                alt="Anastasia Mashina"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
            </div>

            {/* Decorative Grid Behind */}
            <div className="absolute top-10 -right-4 w-40 h-40 border border-brand-mint/30 rounded-full z-0 opacity-50 dashed-circle" />

          </motion.div>
        </div>
      </div>
    </section>
  );
};