import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, Home as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/Counter';
import { NewsTicker } from '@/components/NewsTicker';
import { useApp } from '@/context/AppContext';
import siteData from '@/data/siteData.json';
import heroImage from '@/assets/hero-housing.jpg';
import protestImage from '@/assets/protest-unity.png';
import communityImage from '@/assets/community-meeting.png';

export default function Home() {
  const { getSignatureCount } = useApp();

  return (
    <div className="min-h-screen">
      {/* News Ticker */}
      <NewsTicker />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="مشروع الرك الأصفر"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
              {siteData.site.slogan}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
              {siteData.site.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Link to="/petition">
                <Button size="lg" className="bg-urgency hover:bg-urgency/90 text-lg">
                  انضم للعريضة الآن
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-foreground">
                  تعرف على القصة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Counter end={siteData.stats.families} label="أسرة متضررة" suffix="+" />
            <Counter end={siteData.stats.years} label="سنة من الانتظار" suffix="+" />
            <Counter end={getSignatureCount()} label="توقيع على العريضة" suffix="+" />
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الأزمة في أرقام</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              قصة معاناة طويلة تحتاج إلى صوتك ودعمك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl text-center hover-lift">
              <div className="w-16 h-16 bg-hope/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-hope" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5000 أسرة</h3>
              <p className="text-muted-foreground">
                تنتظر حقها في السكن اللائق منذ 2005
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl text-center hover-lift">
              <div className="w-16 h-16 bg-urgency/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-urgency" />
              </div>
              <h3 className="text-2xl font-bold mb-2">18 سنة</h3>
              <p className="text-muted-foreground">
                من الوعود الكاذبة والمماطلة المستمرة
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl text-center hover-lift">
              <div className="w-16 h-16 bg-progress/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-progress" />
              </div>
              <h3 className="text-2xl font-bold mb-2">حق إنساني</h3>
              <p className="text-muted-foreground">
                السكن اللائق حق لا منة ولا معروف
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الصور تتكلم</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              لمحات من نضال طويل من أجل الكرامة والعدالة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-80 rounded-xl overflow-hidden hover-lift shadow-lg">
              <img
                src={protestImage}
                alt="وقفة احتجاجية"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">الوقفات الاحتجاجية السلمية</h3>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden hover-lift shadow-lg">
              <img
                src={communityImage}
                alt="اجتماع الفيدرالية"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">اجتماعات التنسيق والتنظيم</h3>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="outline" size="lg">
                شاهد المزيد من الصور
                <ArrowLeft className="mr-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-hope to-progress text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            صوتك يمكن أن يحدث الفرق
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            انضم إلى آلاف المواطنين المتضامنين مع قضية الرك الأصفر. وقع على العريضة اليوم.
          </p>
          <Link to="/petition">
            <Button size="lg" className="bg-white text-hope hover:bg-white/90 text-lg px-8">
              وقع على العريضة
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
