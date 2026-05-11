import { motion } from 'motion/react';
import { Mail, Facebook, Twitter, Instagram, Youtube, Heart, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary-deep text-white pt-24 pb-12 overflow-hidden relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img src="/logo.png" alt="Amal Charity" className="h-10 w-auto brightness-0 invert" />
              <span className="mr-3 font-tajawal text-2xl font-bold tracking-tight text-white">مؤسسة <span className="text-luxury">أمل</span></span>
            </div>
            <p className="text-white/60 font-cairo leading-relaxed text-sm">
              نحن مؤسسة عالمية مستقلة تسعى لبناء عالم يسوده العدل والتكافؤ، حيث يمتلك كل طفل وكل أسرة الحق في الحياة والتعليم والكرامة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <button key={idx} className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-luxury-gold hover:text-white transition-all">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
             <h4 className="text-lg font-bold font-tajawal text-luxury border-b-2 border-luxury-gold/20 pb-2 w-fit">عن المؤسسة</h4>
             <nav className="flex flex-col space-y-4">
                {[
                  { label: 'الرئيسية', id: 'home' },
                  { label: 'قصة نجاحنا', id: 'about' },
                  { label: 'برامج العطاء', id: 'projects' },
                  { label: 'معرض الأمل', id: 'gallery' },
                  { label: 'شارك كمتطوع', id: 'contact' }
                ].map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => onNavigate(link.id as Page)}
                    className="text-right text-white/60 hover:text-white text-sm transition-colors flex items-center group"
                  >
                    <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </button>
                ))}
             </nav>
          </div>

          {/* Legal / Policy */}
          <div className="space-y-8">
             <h4 className="text-lg font-bold font-tajawal text-luxury border-b-2 border-luxury-gold/20 pb-2 w-fit">المعلومات القانونية</h4>
             <nav className="flex flex-col space-y-4">
                {[
                  'سياسة الخصوصية',
                  'اتفاقية التبرع',
                  'التقارير السنوية',
                  'شفافية البيانات',
                  'الأسئلة الشائعة'
                ].map((item) => (
                  <button key={item} className="text-right text-white/60 hover:text-white text-sm transition-colors flex items-center">
                    <ExternalLink size={14} className="ml-2 text-white/20" />
                    {item}
                  </button>
                ))}
             </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
             <h4 className="text-lg font-bold font-tajawal text-luxury border-b-2 border-luxury-gold/20 pb-2 w-fit">النشرة الإخبارية</h4>
             <p className="text-white/60 text-sm font-cairo">اشترك لتصلك آخر أخبار مشاريعنا وقصص النجاح المؤثرة.</p>
             <form className="relative group">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-4 text-sm focus:outline-none focus:border-luxury-gold transition-colors"
                />
                <button className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-luxury-gold text-white rounded-xl shadow-lg">
                  <Mail size={18} />
                </button>
             </form>
             <div className="flex items-center space-x-2 space-x-reverse pt-4">
                <div className="h-6 w-10 bg-luxury-gold/20 border border-luxury-gold/30 rounded-md flex items-center justify-center">
                   <Heart size={12} className="text-luxury fill-luxury" />
                </div>
                <p className="text-[10px] text-white/40 font-ibm uppercase tracking-wider italic">بناء الأمل منذ 2014</p>
             </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
          <p>© 2026 مؤسسة أمل الخيرية. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-6 space-x-reverse mt-6 md:mt-0 font-tajawal">
             <button className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">الإمارات العربية المتحدة</button>
             <button className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">عمان</button>
             <button className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">المقر العالمي</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
