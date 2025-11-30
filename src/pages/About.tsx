import { Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">عن مشروع الرك الأصفر</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            قصة نضال طويل من أجل حق أساسي: السكن اللائق
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-12 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">القصة الكاملة</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                في عام 2005، وعدت الدولة سكان منطقة الرك الأصفر في كلميم بتوفير سكن لائق لـ 5000 أسرة. 
                كان الوعد واضحاً: مساكن عصرية، بنية تحتية متكاملة، وحياة كريمة في أجل لا يتجاوز 3 سنوات.
              </p>
              
              <p>
                مرت السنوات، وتحول الوعد إلى حلم بعيد المنال. 18 سنة من الانتظار، 18 سنة من المماطلة، 
                18 سنة من الوعود الكاذبة والتأجيلات المتكررة. الأشغال توقفت عشرات المرات، المسؤولون تغيروا، 
                لكن معاناة 5000 أسرة بقيت كما هي.
              </p>
              
              <p>
                اليوم، بعد كل هذه السنوات، يستمر النضال. تكونت الفيدرالية الجهوية لسكان الرك الأصفر لتنظيم 
                الجهود والمطالب. أصبح صوتنا أعلى، وإرادتنا أقوى، وتصميمنا على نيل حقوقنا لا يلين.
              </p>
              
              <p className="font-bold text-xl text-urgency">
                هذا ليس مجرد نضال من أجل مساكن. هذا نضال من أجل الكرامة الإنسانية، من أجل العدالة الاجتماعية، 
                من أجل حق كل مواطن في حياة لائقة.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-xl border border-border hover-lift">
            <div className="w-16 h-16 bg-hope/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-hope" />
            </div>
            <h3 className="text-xl font-bold mb-4">من نحن</h3>
            <p className="text-muted-foreground leading-relaxed">
              الفيدرالية الجهوية لسكان الرك الأصفر، منظمة نضالية تمثل 5000 أسرة متضررة من التأخير 
              الكبير في إنجاز المشروع السكني.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border hover-lift">
            <div className="w-16 h-16 bg-urgency/10 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-urgency" />
            </div>
            <h3 className="text-xl font-bold mb-4">أهدافنا</h3>
            <p className="text-muted-foreground leading-relaxed">
              الإسراع في إنجاز المشروع، محاسبة المسؤولين عن التأخير، وضمان حصول كل أسرة على سكن لائق 
              يليق بكرامتها.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl border border-border hover-lift">
            <div className="w-16 h-16 bg-progress/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-progress" />
            </div>
            <h3 className="text-xl font-bold mb-4">قيمنا</h3>
            <p className="text-muted-foreground leading-relaxed">
              النضال السلمي، التضامن، الشفافية، والإصرار على نيل الحقوق المشروعة مهما طال الزمن.
            </p>
          </div>
        </div>

        {/* Stakeholders */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">الجهات المتدخلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'وزارة الداخلية', role: 'الإشراف العام على المشروع' },
              { name: 'وزارة التعمير والإسكان', role: 'التخطيط والمتابعة التقنية' },
              { name: 'عمالة كلميم', role: 'التنسيق المحلي والتنفيذ' },
              { name: 'الشركة المكلفة بالإنجاز', role: 'تنفيذ أشغال البناء' },
              { name: 'المجلس الجماعي', role: 'المتابعة والرقابة المحلية' },
              { name: 'الفيدرالية الجهوية', role: 'تمثيل السكان والدفاع عن حقوقهم' },
            ].map((stakeholder, index) => (
              <div key={index} className="bg-muted/50 p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg mb-2">{stakeholder.name}</h4>
                <p className="text-sm text-muted-foreground">{stakeholder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
