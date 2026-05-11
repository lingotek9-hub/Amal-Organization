import { motion } from 'motion/react';
import { ArrowLeft, Play, Globe, Heart } from 'lucide-react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-screen -mt-20 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
          alt="Humanitarian Background" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary-deep/90 via-primary-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-luxury-gold/20 backdrop-blur-md border border-luxury-gold/30 text-luxury font-ibm text-sm font-medium mb-6">
              مؤسسة أمل الخيرية العالمية
            </span>
            <h1 className="text-5xl md:text-7xl font-tajawal font-bold text-white leading-tight mb-6">
              لنصنع <span className="text-luxury italic">فرقاً</span> <br /> 
              في حياة من يحتاجوننا
            </h1>
            <p className="text-xl text-white/80 font-cairo leading-relaxed mb-10 max-w-2xl">
              رسالتنا هي تمكين المجتمعات وتوفير الدعم الإنساني للأسر الأكثر احتياجاً حول العالم من خلال برامج تنموية وإنسانية مستدامة.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('donate')}
                className="px-10 py-4 rounded-full bg-luxury-gold text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center group"
              >
                تبرع الآن
                <Heart size={20} className="mr-3 group-hover:scale-125 transition-transform" />
              </button>
              
              <button 
                onClick={() => onNavigate('about')}
                className="px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg transition-all duration-300 hover:bg-white/20 flex items-center"
              >
                تعرف علينا
                <ArrowLeft size={20} className="mr-3" />
              </button>
            </div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex items-center space-x-12 space-x-reverse"
          >
            <div className="text-right">
              <p className="text-3xl font-bold text-white">+500K</p>
              <p className="text-white/60 text-sm">مستفيد حول العالم</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-right">
              <p className="text-3xl font-bold text-white">45</p>
              <p className="text-white/60 text-sm">دولة تدعمها مشاريعنا</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-right">
              <p className="text-3xl font-bold text-white">+1200</p>
              <p className="text-white/60 text-sm">متطوع مخلص</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Video Button Overlay (Fake) */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="flex items-center space-x-3 space-x-reverse group"
        >
          <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-colors">
            <Play size={24} fill="currentColor" />
          </div>
          <div className="text-right">
            <p className="text-white font-bold text-sm">شاهد فيلمنا القصير</p>
            <p className="text-white/40 text-xs">رحلة الأمل (2:30 دقيقة)</p>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
