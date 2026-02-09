import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close mobile menu if open
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="font-display font-black text-2xl tracking-tighter text-white z-50 relative cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        AM<span className="text-brand-mint">.</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <button onClick={() => scrollToSection('home')} className="hover:text-brand-mint transition-colors">{t.nav.home}</button>
                        <button onClick={() => scrollToSection('about')} className="hover:text-brand-mint transition-colors">{t.nav.about}</button>
                        <button onClick={() => scrollToSection('projects')} className="hover:text-brand-mint transition-colors">{t.nav.projects}</button>
                        <button onClick={() => scrollToSection('gallery')} className="hover:text-brand-mint transition-colors">{t.nav.gallery}</button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="hidden sm:flex items-center bg-[#1A1A1A] rounded-full p-1 border border-white/10">
                            <button
                                onClick={() => setLanguage('ru')}
                                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${language === 'ru' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                            >
                                RU
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${language === 'en' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('es')}
                                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${language === 'es' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                            >
                                ES
                            </button>
                        </div>

                        <div className="hidden sm:block">
                            <Button variant="primary" className="!px-6 !py-2 !text-xs" onClick={() => scrollToSection('footer')}>
                                {t.nav.contact}
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden z-50 p-2 text-white"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center md:hidden overflow-y-auto"
                    >
                        <div className="min-h-screen w-full flex flex-col justify-center items-center py-20 gap-8 text-center">
                            <button onClick={() => scrollToSection('home')} className="text-2xl font-display font-bold text-white hover:text-brand-mint">{t.nav.home}</button>
                            <button onClick={() => scrollToSection('about')} className="text-2xl font-display font-bold text-white hover:text-brand-mint">{t.nav.about}</button>
                            <button onClick={() => scrollToSection('projects')} className="text-2xl font-display font-bold text-white hover:text-brand-mint">{t.nav.projects}</button>
                            <button onClick={() => scrollToSection('gallery')} className="text-2xl font-display font-bold text-white hover:text-brand-mint">{t.nav.gallery}</button>
                            <button onClick={() => scrollToSection('footer')} className="text-2xl font-display font-bold text-brand-mint">{t.nav.contact}</button>

                            <div className="flex justify-center gap-4 mt-8">
                                <button onClick={() => { setLanguage('ru'); }} className={`text-sm font-bold ${language === 'ru' ? 'text-brand-mint' : 'text-gray-500'}`}>RU</button>
                                <button onClick={() => { setLanguage('en'); }} className={`text-sm font-bold ${language === 'en' ? 'text-brand-mint' : 'text-gray-500'}`}>EN</button>
                                <button onClick={() => { setLanguage('es'); }} className={`text-sm font-bold ${language === 'es' ? 'text-brand-mint' : 'text-gray-500'}`}>ES</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
