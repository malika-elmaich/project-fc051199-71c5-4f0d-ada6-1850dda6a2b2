import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import siteData from '@/data/siteData.json';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
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
      toast({
        title: 'تم إرسال رسالتك',
        description: 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.',
      });

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">تواصل معنا</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            نحن هنا للاستماع إليك. تواصل معنا للاستفسارات أو الانضمام إلى النضال
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-8 leading-tight">معلومات الاتصال</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-lg">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground text-base">{siteData.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">الهاتف</h3>
                    <p className="text-muted-foreground" dir="ltr">{siteData.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">العنوان</h3>
                    <p className="text-muted-foreground">{siteData.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-hope to-progress p-8 rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-6">تابعنا على وسائل التواصل</h2>
              <div className="flex gap-4">
                <a
                  href={siteData.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="فيسبوك"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href={siteData.contact.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="تويتر"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href={siteData.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="إنستغرام"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4">انضم إلينا</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                هل أنت من المتضررين؟ هل تريد المساهمة في النضال؟ املأ النموذج وسنتواصل معك.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card p-8 rounded-xl border border-border sticky top-20">
              <h2 className="text-3xl font-bold mb-8 leading-tight">أرسل رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="contact-name">الاسم الكامل *</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email">البريد الإلكتروني *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">الموضوع *</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="موضوع الرسالة"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">الرسالة *</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب رسالتك هنا..."
                    className="mt-2 min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="ml-2 w-5 h-5" />
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
