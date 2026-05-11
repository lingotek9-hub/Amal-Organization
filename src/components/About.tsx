import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Users, Globe2, Award } from 'lucide-react';

export default function About() {
  const values = [
    { 
      title: 'الشفافية', 
      desc: 'نؤمن بأهمية الشفافية المطلقة في كافة معاملاتنا المالية وتقاريرنا الميدانية.', 
      icon: ShieldCheck 
    },
    { 
      title: 'الاستدامة', 
      desc: 'نركز على المشاريع التي توفر حلولاً طويلة الأمد للمجتمعات الفقيرة.', 
      icon: Target 
    },
    { 
      title: 'العدالة', 
      desc: 'نقدم المساعدة لكل محتاج دون تمييز بناءً على العرق أو المعتقد أو الجنس.', 
      icon: Users 
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-deep py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-tajawal font-bold mb-4">من نحن</h2>
          <div className="h-1 w-24 bg-luxury-gold mx-auto rounded-full" />
        </div>
      </div>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-tajawal font-bold text-primary-deep mb-6">مؤسسة أمل: عقد من العطاء</h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-cairo">
              تأسست مؤسسة أمل الخيرية عام 2014 بجهود شبابية مخلصة، تهدف إلى إحداث تغيير جذري في واقع المجتمعات الأكثر تضرراً من الحروب والأزمات الاقتصادية. نحن لا نعمل فقط على تقديم المساعدات العينية، بل نسعى لتمكين الفرد ليكون عنصراً فعالاً في مجتمعه.
            </p>
            <p className="text-gray-600 leading-relaxed font-cairo">
              عبر السنين، توسعت شبكة أعمالنا لتشمل أكثر من 45 دولة، مع تركيز خاص على الشرق الأوسط وإفريقيا وجنوب آسيا، مقدمين نموذجاً فريداً في العمل الإنساني الذي يجمع بين التكنولوجيا الحديثة والقيم الإنسانية الراسخة.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" 
                alt="About Amal" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4 space-x-reverse font-tajawal">
                <div className="h-12 w-12 bg-luxury-gold rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary-deep">موثقة عالمياً</p>
                  <p className="text-xs text-light-gray-600">حاصلة على شهادة ISO للتميز</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Card */}
      <section className="bg-soft-gray py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-primary-deep/5 rounded-2xl flex items-center justify-center text-primary-deep mb-8">
                <Target size={32} />
              </div>
              <h4 className="text-2xl font-bold font-tajawal text-primary-deep mb-4">رسالتنا</h4>
              <p className="text-gray-600 font-cairo">تحسين جودة حياة الفقراء والمحرومين، وتعزيز كرامتهم الإنسانية من خلال التنمية المستدامة والتعليم والرعاية الصحية الشاملة.</p>
            </div>
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2">
              <div className="h-16 w-16 bg-accent-green/5 rounded-2xl flex items-center justify-center text-accent-green mb-8">
                <Eye size={32} />
              </div>
              <h4 className="text-2xl font-bold font-tajawal text-primary-deep mb-4">رؤيتنا</h4>
              <p className="text-gray-600 font-cairo">أن نكون المؤسسة الرائدة عالمياً في تقديم الحلول الإنسانية المبتكرة التي تقضي على جذور الفقر والجهل في المجتمعات النامية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h3 className="text-3xl font-tajawal font-bold text-primary-deep mb-16 underline decoration-luxury-gold decoration-4 underline-offset-8">قيمنا الجوهرية</h3>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="h-20 w-20 bg-soft-gray rounded-full flex items-center justify-center text-primary-deep mb-6 mx-auto transition-colors group-hover:bg-luxury-gold group-hover:text-white">
                <v.icon size={36} />
              </div>
              <h5 className="text-xl font-bold font-tajawal mb-4">{v.title}</h5>
              <p className="text-gray-500 font-cairo text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
