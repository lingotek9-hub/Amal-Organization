import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FloatingDonateProps {
  onClick: () => void;
}

export default function FloatingDonate({ onClick }: FloatingDonateProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClick}
          className="fixed bottom-8 left-8 z-30 h-16 w-16 bg-luxury-gold text-white rounded-full flex items-center justify-center shadow-2xl transition-shadow hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] group"
        >
          <Heart size={28} className="fill-white group-hover:scale-125 transition-transform" />
          <div className="absolute -top-12 right-0 bg-white text-primary-deep px-4 py-2 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ساهم في العطاء
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
