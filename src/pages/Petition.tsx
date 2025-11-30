import { useState } from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useApp } from '@/context/AppContext';
import { useToast } from '@/hooks/use-toast';
import { Counter } from '@/components/Counter';
import siteData from '@/data/siteData.json';

export default function Petition() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addSignature, getSignatureCount } = useApp();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !city.trim()) {
      toast({
        title: 'خطأ',
        description: 'الرجاء ملء جميع الحقول',
        variant: 'destructive',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: 'خطأ',
        description: 'الرجاء إدخال بريد إلكتروني صحيح',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      addSignature({ name: name.trim(), email: email.trim(), city: city.trim() });
      
      toast({
        title: 'شكراً لك!',
        description: 'تم تسجيل توقيعك بنجاح',
      });

      setName('');
      setEmail('');
      setCity('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block p-3 bg-urgency/10 rounded-full mb-6">
            <FileText className="w-12 h-12 text-urgency" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">العريضة الوطنية</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            وقع على عريضة المطالبة بالعدالة السكنية لسكان الرك الأصفر
          </p>
        </div>

        {/* Counter */}
        <div className="max-w-md mx-auto mb-12">
          <div className="glass-card p-8 rounded-xl text-center">
            <Counter end={getSignatureCount()} label="مواطن وقع على العريضة" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Petition Content */}
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-bold mb-4">نص العريضة</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                {siteData.petition.content}
              </div>
            </div>

            <div className="bg-gradient-to-br from-hope to-progress p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">مطالبنا الخمسة</h3>
              <ul className="space-y-3">
                {siteData.petition.demands.map((demand, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{demand}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Signature Form */}
          <div>
            <div className="bg-card p-8 rounded-xl border border-border sticky top-20">
              <h2 className="text-2xl font-bold mb-6">وقع على العريضة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="city">المدينة *</Label>
                  <Input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="المدينة التي تقيم فيها"
                    className="mt-2"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-urgency hover:bg-urgency/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري التسجيل...' : 'وقع على العريضة'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  بالتوقيع، أنت تساهم في الضغط من أجل حل عادل وسريع لقضية سكان الرك الأصفر
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
