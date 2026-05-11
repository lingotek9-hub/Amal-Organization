import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'الرئيسية', id: 'home' },
    { label: 'عن المؤسسة', id: 'about' },
    { label: 'مشاريعنا', id: 'projects' },
    { label: 'المعرض', id: 'gallery' },
    { label: 'تواصل معنا', id: 'contact' },
  ];

  const handleNavClick = (id: Page) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Navigation - Right */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                currentPage === item.id 
                  ? 'text-primary-deep' 
                  : isScrolled ? 'text-gray-600 hover:text-primary-deep' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-1 right-0 left-0 h-0.5 bg-luxury-gold rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Logo - Center (for mobile) / Left (for desktop) */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <img 
            src="/logo.png" 
            alt="Amal Charity" 
            className={`h-10 w-auto transition-all duration-500 ${!isScrolled && currentPage === 'home' ? 'brightness-0 invert' : ''}`}
          />
          <span className={`mr-3 font-tajawal text-xl font-bold tracking-tight transition-colors duration-500 ${
            !isScrolled && currentPage === 'home' ? 'text-white' : 'text-primary-deep'
          }`}>
            مؤسسة <span className="text-luxury">أمل</span>
          </span>
        </div>

        {/* Donate Button & Menu Toggle */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <button
            onClick={() => onNavigate('donate')}
            className="hidden md:flex items-center px-6 py-2.5 rounded-full bg-luxury-gold text-white font-medium text-sm transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg active:scale-95 group"
          >
            <Heart size={16} className="ml-2 group-hover:fill-white" />
            تبرع الآن
          </button>

          <button 
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={!isScrolled && currentPage === 'home' ? 'text-white' : 'text-primary-deep'} />
            ) : (
              <Menu className={!isScrolled && currentPage === 'home' ? 'text-white' : 'text-primary-deep'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-right text-lg font-medium ${
                    currentPage === item.id ? 'text-luxury' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('donate')}
                className="w-full py-4 rounded-xl bg-primary-deep text-white font-bold flex items-center justify-center"
              >
                <Heart size={18} className="ml-2 fill-white" />
                تبرع الآن
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
