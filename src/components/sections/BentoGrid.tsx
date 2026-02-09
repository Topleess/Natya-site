import React from 'react';
import { Medal, Mic, Atom, ArrowUpRight, ScrollText, Clock, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const BentoGrid: React.FC = () => {
  const { t } = useLanguage();

  // Unified Card Style
  // CHANGED: replaced fixed h-64 with min-h-[16rem] and h-full for responsiveness.
  // CHANGED: Added flex-grow and proper flex basis to handle variable text length (RU/ES).
  const cardBase = "bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between min-h-[16rem] h-full relative group hover:border-brand-mint/30 transition-all duration-300";

  // Unified Icon Style
  // CHANGED: Removed absolute positioning for icon to prevent overlap with long text.
  // Using flex-end or self-end in the card layout instead.
  const iconBase = "w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 self-end mt-4";

  return (
    <section id="about" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-display font-bold mb-12 text-white uppercase opacity-50 tracking-widest">{t.nav.about}</h2>

        {/* Strictly 4 columns on large screens, 2 on medium, 1 on mobile */}
        {/* Added auto-rows-fr to make cards in same row equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">

          {/* --- ROW 1 --- */}

          {/* Card 1: Gold Medals */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <span className="text-7xl font-display font-bold text-brand-yellow leading-none tracking-tighter">{t.bento.card1_num}</span>
            </div>
            <div className="relative z-10 max-w-[90%]">
              <p className="text-sm font-bold text-white uppercase tracking-wider leading-tight">{t.bento.card1_text}</p>
            </div>
            <Medal className={`${iconBase} text-brand-yellow`} />
          </motion.div>

          {/* Card 2: Top Speaker */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <span className="text-5xl font-display font-bold text-brand-mint leading-none">{t.bento.card2_top}</span>
            </div>
            <div className="relative z-10 max-w-[90%]">
              <p className="text-xs font-bold text-gray-300 uppercase tracking-wider leading-snug">{t.bento.card2_text}</p>
            </div>
            <Mic className={`${iconBase} text-brand-mint`} />
          </motion.div>

          {/* Card 3: Scientific Focus */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <Atom className="w-12 h-12 text-brand-yellow mb-4" />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.bento.card3_title}</p>
              <p className="text-sm font-bold text-white uppercase tracking-wider leading-tight">{t.bento.card3_text}</p>
            </div>
            {/* Decorative background element for variety */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Card 4: Driving Youth (Green Card) */}
          <motion.div whileHover={{ y: -5 }} className="bg-brand-mint rounded-[2rem] p-8 flex flex-col justify-between min-h-[16rem] h-full relative group hover:shadow-[0_0_30px_rgba(0,210,160,0.3)] transition-all duration-300">
            <div>
              <p className="text-xl font-bold text-brand-black uppercase leading-tight tracking-tight max-w-[95%]">
                {t.bento.card4_text}
              </p>
            </div>
            <ArrowUpRight className="w-10 h-10 text-brand-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform self-end mt-4" />
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/30 rounded-full blur-2xl pointer-events-none" />
          </motion.div>


          {/* --- ROW 2 --- */}

          {/* Card 5: Presidential Grant */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div className="mt-2">
              <p className="text-2xl font-display font-bold text-brand-mint uppercase tracking-wider leading-none">{t.bento.row2_1_title}</p>
            </div>
            <div className="relative z-10">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{t.bento.row2_1_text}</p>
            </div>
            <ScrollText className={`${iconBase} text-brand-mint`} />
          </motion.div>

          {/* Card 6: Experience */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <p className="text-6xl font-display font-bold text-brand-yellow leading-none tracking-tighter">{t.bento.row2_2_title}</p>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.bento.row2_2_text}</p>
            </div>
            <Clock className={`${iconBase} text-brand-yellow`} />
          </motion.div>

          {/* Card 7: Mentoring */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div className="flex items-start">
              <p className="text-sm font-bold text-white uppercase tracking-wider leading-relaxed max-w-[90%]">{t.bento.row2_3_text}</p>
            </div>
            <Users className={`${iconBase} text-white`} />
          </motion.div>

          {/* Card 8: Publications */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <p className="text-6xl font-display font-bold text-brand-mint leading-none tracking-tighter">{t.bento.row2_4_title}</p>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.bento.row2_4_text}</p>
            </div>
            <BookOpen className={`${iconBase} text-brand-mint`} />
          </motion.div>

        </div>
      </div>
    </section>
  );
};