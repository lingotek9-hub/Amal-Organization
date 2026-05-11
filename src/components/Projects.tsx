import { motion } from 'motion/react';
import { Utensils, GraduationCap, Stethoscope, HeartHandshake, Zap, ChevronLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'دعم السلة الغذائية',
    desc: 'توزيع حصص غذائية شهرية متكاملة للأسر التي تعاني من انعدام الأمن الغذائي في المناطق المنكوبة.',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-orange-500',
    stats: 'توزيع 50,000 سلة',
  },
  {
    id: 2,
    title: 'مستقبل التعليم',
    desc: 'بناء المدارس، توفير الأدوات الدراسية، وكفالة الطلاب المتميزين لإكمال تعليمهم الجامعي.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop',
    color: 'bg-blue-500',
    stats: '15,000 طالب مكفول',
  },
  {
    id: 3,
    title: 'الرعاية الطبية',
    desc: 'تشغيل العيادات المتنقلة، إجراء العمليات الجراحية المعقدة، وتوفير الأطراف الصناعية لجرحى الحروب.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop',
    color: 'bg-emerald-500',
    stats: '200,000 حالة شفاء',
  },
  {
    id: 4,
    title: 'كفالة الأيتام',
    desc: 'برامج رعاية شاملة للأطفال الأيتام تشمل السكن، التعليم، الدعم النفسي، والأنشطة الترفيهية.',
    icon: HeartHandshake,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-rose-500',
    stats: '8,000 يتيم برعاية أمل',
  },
  {
    id: 5,
    title: 'الاستجابة لطورائ الأزمات',
    desc: 'تدخل سريع في حالات الكوارث الطبيعية والهروب القسري لتوفير الخيام والمساعدات العاجلة.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop',
    color: 'bg-amber-500',
    stats: 'استجابة خلال 24 ساعة',
  },
];

export default function Projects() {
  return (
    <div className="bg-soft-gray min-h-screen py-12">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-tajawal font-bold text-primary-deep mb-4"
          >
            مشاريعنا <span className="text-luxury">الإنسانية</span>
          </motion.h2>
          <p className="text-gray-500 font-cairo max-w-2xl mx-auto">نختار مشاريعنا بعناية لضمان أقصى أثر إيجابي ممكن، نجمع بين الإغاثة العاجلة والتنمية بعيدة المدى.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 right-4 ${p.color} p-3 rounded-2xl text-white shadow-lg`}>
                  <p.icon size={24} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-ibm text-sm font-medium">{p.stats}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-xl font-bold font-tajawal text-primary-deep mb-4">{p.title}</h3>
                <p className="text-gray-500 font-cairo text-sm leading-relaxed mb-6 line-clamp-3">
                  {p.desc}
                </p>
                
                <button className="flex items-center text-primary-deep font-bold text-sm group/btn">
                  إقرأ المزيد عن المشروع
                  <ChevronLeft size={16} className="mr-2 transition-transform group-hover/btn:-translate-x-1" />
                </button>
              </div>

              {/* Decorative Luxury Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Impact Summary Section */}
        <div className="mt-24 p-12 bg-primary-deep rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl -mb-48 -mr-48" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-tajawal font-bold mb-6 italic">لأننا نؤمن أن لكل إنسان الحق في حياة كريمة</h3>
              <p className="text-white/70 font-cairo leading-relaxed mb-8">
                مشاريع مؤسسة أمل ليست مجرد توزيع تبرعات، بل هي استثمار في الكرامة الإنسانية. نحن نراقب كل قرش ونحرص على وصوله للمستفيد الحقيقي بأفضل وسيلة ممكنة.
              </p>
              <div className="flex gap-4">
                 <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                    <p className="text-xs text-white/50 mb-1 font-ibm">صرف ميزانية المشاريع</p>
                    <p className="text-xl font-bold text-luxury">94% للميدان</p>
                 </div>
                 <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                    <p className="text-xs text-white/50 mb-1 font-ibm">تصنيف الموثوقية</p>
                    <p className="text-xl font-bold text-luxury">AAA+</p>
                 </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" 
                alt="Impact" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
