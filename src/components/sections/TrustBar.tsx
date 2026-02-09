import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Leaf,
  Globe,
  Users,
  Star,
  Rocket,
  GraduationCap,
  Briefcase,
  Building2,
  Flag,
  BookOpen,
  Footprints,
  Send
} from 'lucide-react';

const partners = [
  { name: "ROSMOLODEZH", color: "#00D2A0", icon: Flag },
  { name: "ZNANIE SOCIETY", color: "#3366CC", icon: BookOpen },
  { name: "RANEPA", color: "#D92121", icon: Building2 },
  { name: "TVOY KHOD", color: "#7050E5", icon: Footprints },
  { name: "ECOSYSTEM", color: "#76C908", icon: Leaf },
  { name: "MY UNI", color: "#9D4EDD", icon: GraduationCap },
  { name: "YA PROFI", color: "#F2994A", icon: Rocket },
  { name: "PRO MENTOR", color: "#2F80ED", icon: Send },
  { name: "ROSCONGRESS", color: "#EB2D2E", icon: Globe },
  { name: "YA V DELE", color: "#00B5AD", icon: Briefcase },
  { name: "COLLECTORS CLUB", color: "#E53935", icon: Star },
  { name: "STUDENT LEADERS", color: "#FDCB58", icon: Users },
];

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111] border-y border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <p className="text-center text-xs text-gray-600 uppercase tracking-[0.3em] mb-12 font-bold font-display">
          {t.partners}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 cursor-default"
            >
              <div
                className="relative h-16 w-full flex items-center justify-center transition-all duration-300"
              >
                <partner.icon
                  strokeWidth={1.5}
                  className="h-10 w-10 md:h-12 md:w-12 object-contain text-gray-700 group-hover:text-white transition-all duration-300"
                />
              </div>

              <style>{`
                .group:hover svg {
                  color: ${partner.color} !important;
                  filter: drop-shadow(0 0 10px ${partner.color});
                  transform: scale(1.1);
                }
              `}</style>

              <span className="mt-4 text-[10px] font-bold tracking-widest text-gray-700 uppercase group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};