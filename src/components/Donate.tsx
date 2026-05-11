import { motion } from 'motion/react';
import { CreditCard, Wallet, Banknote, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { useState } from 'react';

const amounts = [10, 25, 50, 100, 250, 500];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Donation Form Column */}
          <div className="lg:col-span-7">
            <header className="mb-12">
              <span className="text-luxury font-ibm font-bold tracking-widest text-sm uppercase mb-4 block">كن شريك العطاء</span>
              <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-primary-deep mb-6">تبرعك اليوم يصنع غداً أجمل</h2>
              <p className="text-gray-500 font-cairo leading-relaxed">تبرعك لمؤسسة أمل هو استثمار في التعليم، الصحة، والحياة الكريمة. نضمن وصول مساعدتك لمن يستحقها بأمان تام وشفافية مطلقة.</p>
            </header>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-soft-gray p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-bold font-tajawal text-primary-deep mb-8 flex items-center">
                <Sparkles className="ml-3 text-luxury" />
                اختر مبلغ التبرع
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-4 rounded-2xl font-bold text-xl transition-all duration-300 ${
                      selectedAmount === amount 
                        ? 'bg-primary-deep text-white shadow-[0_10px_20px_rgba(10,38,71,0.2)]' 
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative mb-10">
                <input
                  type="number"
                  placeholder="مبلغ مخصص"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full h-16 px-6 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-luxury-gold focus:outline-none text-xl font-bold text-primary-deep"
                />
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
              </div>

              {/* Impact Indicator */}
              <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl mb-10 flex items-start">
                 <HeartPulse className="text-emerald-500 ml-4 flex-shrink-0" size={28} />
                 <div>
                    <p className="text-emerald-800 font-bold font-tajawal mb-1">أثر تبرعك:</p>
                    <p className="text-emerald-600 text-sm font-cairo leading-relaxed">
                      بمبلغ <span className="font-bold underline">${selectedAmount || customAmount || 0}</span>، يمكنك توفير وجبات غذائية متكاملة لأسرة مكونة من 5 أفراد لمدة شهر كامل.
                    </p>
                 </div>
              </div>

              <div className="space-y-4">
                <p className="font-ibm text-xs text-gray-400 mb-2 uppercase tracking-wide">طريقة الدفع الآمنة</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                   <button className="flex items-center justify-center py-3 bg-white border border-gray-200 rounded-xl hover:border-luxury-gold transition-colors">
                      <CreditCard size={18} className="ml-2" />
                      <span className="text-xs font-bold">بطاقة بنكية</span>
                   </button>
                   <button className="flex items-center justify-center py-3 bg-white border border-gray-200 rounded-xl hover:border-luxury-gold transition-colors">
                      <Wallet size={18} className="ml-2" />
                      <span className="text-xs font-bold">PayPal</span>
                   </button>
                   <button className="flex items-center justify-center py-3 bg-white border border-gray-200 rounded-xl hover:border-luxury-gold transition-colors">
                      <Banknote size={18} className="ml-2" />
                      <span className="text-xs font-bold">حوالة بنكية</span>
                   </button>
                   <button className="flex items-center justify-center py-3 bg-white border border-gray-200 rounded-xl hover:border-luxury-gold transition-colors">
                      <ShieldCheck size={18} className="ml-2 text-emerald-500" />
                      <span className="text-xs font-bold">دفع مشفر</span>
                   </button>
                </div>
              </div>

              <button className="w-full h-16 bg-luxury-gold mt-10 rounded-2xl text-white text-xl font-bold shadow-xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all">
                إتمام التبرع بالبطاقة
              </button>
            </motion.div>
          </div>

          {/* Social Proof Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
               <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
                    alt="Donate Impact" 
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                 />
               </div>
               <div className="absolute top-6 right-6 glass p-4 rounded-2xl flex items-center shadow-lg">
                  <div className="bg-luxury-gold p-2 rounded-xl text-white ml-3">
                     <ShieldCheck size={20} />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-primary-deep">تبرع آمن 100%</p>
                     <p className="text-[10px] text-gray-500">مشفر عبر شهادة SSL</p>
                  </div>
               </div>
            </div>

            <div className="bg-primary-deep p-10 rounded-[2.5rem] text-white">
               <h4 className="text-2xl font-bold font-tajawal mb-6">لماذا تتبرع لمؤسسة أمل؟</h4>
               <ul className="space-y-6">
                  <li className="flex items-start">
                     <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 ml-4 flex-shrink-0" />
                     <p className="text-white/70 font-cairo text-sm underline decoration-white/20 underline-offset-8">تقارير دورية مفصلة عن أثر مساهمتك ترسل لبريدك الإلكتروني.</p>
                  </li>
                  <li className="flex items-start">
                     <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 ml-4 flex-shrink-0" />
                     <p className="text-white/70 font-cairo text-sm underline decoration-white/20 underline-offset-8">إمكانية التبرع بشكل دوري (شهري) لضمان استمرارية الدعم.</p>
                  </li>
                  <li className="flex items-start">
                     <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 ml-4 flex-shrink-0" />
                     <p className="text-white/70 font-cairo text-sm underline decoration-white/20 underline-offset-8">موثقية كاملة من خلال تتبع مباشر لميزانيات المشاريع.</p>
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
