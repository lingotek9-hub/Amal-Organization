import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Contact from './components/Contact';
import FloatingDonate from './components/FloatingDonate';

export type Page = 'home' | 'about' | 'projects' | 'gallery' | 'donate' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate premium loading effect
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Hero onNavigate={setCurrentPage} />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'gallery': return <Gallery />;
      case 'donate': return <Donate />;
      case 'contact': return <Contact />;
      default: return <Hero onNavigate={setCurrentPage} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-primary-deep flex flex-col items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="mb-8"
        >
          <img src="/logo.png" alt="Logo" className="h-24 w-auto brightness-0 invert opacity-80" />
        </motion.div>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
             initial={{ x: '-100%' }}
             animate={{ x: '100%' }}
             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             className="w-full h-full bg-luxury-gold"
          />
        </div>
        <p className="mt-4 text-white/60 font-tajawal tracking-widest text-sm uppercase">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-gray flex flex-col font-cairo">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-20 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full min-h-[calc(100vh-160px)]"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentPage} />
      <FloatingDonate onClick={() => setCurrentPage('donate')} />
    </div>
  );
}
