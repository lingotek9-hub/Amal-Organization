import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Maximize2, X, Filter } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'education', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop', title: 'مدرسة الأمل' },
  { id: 2, category: 'food', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', title: 'توزيع حصص غذائية' },
  { id: 3, category: 'medical', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop', title: 'عيادة ميدانية' },
  { id: 4, category: 'orphans', url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop', title: 'بسمة يتيم' },
  { id: 5, category: 'education', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop', title: 'حصة تعليمية' },
  { id: 6, category: 'food', url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop', title: 'إفطار صائم' },
  { id: 7, category: 'medical', url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop', title: 'رعاية تخصصية' },
  { id: 8, category: 'community', url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop', title: 'عمل تطوعي' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-primary-deep mb-4">معرض <span className="text-luxury">العطاء</span></h2>
          <p className="text-gray-500 font-cairo max-w-2xl mx-auto">لمحات من الميدان توثق أثر تبرعاتكم وابتسامات المستفيدين.</p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
           {[ 
             { label: 'الكل', id: 'all' },
             { label: 'تعليم', id: 'education' },
             { label: 'إغاثة غذائية', id: 'food' },
             { label: 'رعاية طبية', id: 'medical' },
             { label: 'أيتام', id: 'orphans' }
           ].map((tab) => (
             <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-2 rounded-full font-tajawal font-medium transition-all ${
                  filter === tab.id 
                    ? 'bg-luxury-gold text-white shadow-lg' 
                    : 'bg-soft-gray text-gray-500 hover:bg-gray-200'
                }`}
             >
               {tab.label}
             </button>
           ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl"
                onClick={() => setSelectedImage(item.url)}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                   <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 text-white">
                      <Maximize2 size={20} />
                   </div>
                   <p className="text-white font-tajawal font-bold text-center">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage} 
                alt="Selected" 
                className="max-w-full max-h-full rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
