import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, MessageSquare, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-soft-gray min-h-screen py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-12"
            >
              <div>
                <span className="text-luxury font-bold tracking-widest text-sm uppercase mb-4 block underline decoration-luxury-gold/30 underline-offset-4">تواصل مباشر</span>
                <h2 className="text-4xl font-tajawal font-bold text-primary-deep mb-6">نحن هنا للإجابة على جميع استفساراتكم</h2>
                <p className="text-gray-500 font-cairo leading-relaxed">فريقنا الإداري متاح على مدار الساعة للإجابة على أسئلة المتبرعين، المتطوعين، والجهات المهتمة بالشراكة الإنسانية.</p>
              </div>

              <div className="grid gap-8">
                <div className="flex items-start">
                   <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary-deep shadow-sm ml-6">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <p className="font-tajawal font-bold text-primary-deep">المقر الرئيسي</p>
                      <p className="text-gray-500 text-sm font-cairo mt-1">برج خليفة، الطابق 45، دبي، الإمارات العربية المتحدة</p>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary-deep shadow-sm ml-6">
                      <Phone size={24} />
                   </div>
                   <div>
                      <p className="font-tajawal font-bold text-primary-deep">الهاتف المجاني</p>
                      <p className="text-gray-500 text-sm font-cairo mt-1" dir="ltr">+971 800 AMAL (2625)</p>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-primary-deep shadow-sm ml-6">
                      <Mail size={24} />
                   </div>
                   <div>
                      <p className="font-tajawal font-bold text-primary-deep">البريد الإلكتروني</p>
                      <p className="text-gray-500 text-sm font-cairo mt-1">info@amalcharity.org</p>
                   </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="font-tajawal font-bold text-primary-deep mb-6">تابعونا على منصات التواصل</p>
                <div className="flex space-x-4 space-x-reverse">
                   {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                      <button key={i} className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-luxury hover:border-luxury transition-all">
                         <Icon size={20} />
                      </button>
                   ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full -mr-16 -mt-16" />
               <h3 className="text-2xl font-bold font-tajawal text-primary-deep mb-8">أرسل رسالة سريعة</h3>
               
               <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 mr-2">الاسم الكامل</label>
                      <input type="text" className="w-full p-4 bg-soft-gray border border-transparent rounded-2xl focus:bg-white focus:border-luxury-gold focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 mr-2">البريد الإلكتروني</label>
                      <input type="email" className="w-full p-4 bg-soft-gray border border-transparent rounded-2xl focus:bg-white focus:border-luxury-gold focus:outline-none transition-all" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 mr-2">الموضوع</label>
                    <select className="w-full p-4 bg-soft-gray border border-transparent rounded-2xl focus:bg-white focus:border-luxury-gold focus:outline-none transition-all appearance-none cursor-pointer">
                       <option>استفسار عن تبرع</option>
                       <option>تطوع</option>
                       <option>شراكة إنسانية</option>
                       <option>بلاغ عن حالة إنسانية</option>
                       <option>أخرى</option>
                    </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 mr-2">الرسالة</label>
                    <textarea rows={5} className="w-full p-4 bg-soft-gray border border-transparent rounded-2xl focus:bg-white focus:border-luxury-gold focus:outline-none transition-all resize-none"></textarea>
                 </div>

                 <button className="w-full py-5 rounded-2xl bg-primary-deep text-white font-bold text-lg flex items-center justify-center hover:bg-primary-light transition-all shadow-lg active:scale-95">
                    إرسال الرسالة
                    <Send size={20} className="mr-3" />
                 </button>

                 <div className="flex items-center justify-center space-x-2 space-x-reverse mt-6">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <p className="text-xs text-gray-400 font-cairo">نرد عادةً خلال أقل من 12 ساعة عمل.</p>
                 </div>
               </form>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-20 h-96 rounded-[3rem] overflow-hidden shadow-inner bg-gray-200 relative">
             <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop)' }}></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass p-6 rounded-3xl shadow-2xl flex flex-col items-center">
                   <div className="h-16 w-16 bg-primary-deep rounded-full flex items-center justify-center text-luxury mb-4 shadow-lg border-4 border-white">
                      <MapPin size={32} />
                   </div>
                   <p className="font-tajawal font-bold text-primary-deep">خريطة المقر الرئيسي</p>
                   <p className="text-xs text-gray-500 font-cairo">متوفرة للعرض التفاعلي في المتصفح الكامل</p>
                   <button className="mt-4 px-6 py-2 bg-primary-deep text-white rounded-full text-xs font-bold">فتح في خرائط جوجل</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
