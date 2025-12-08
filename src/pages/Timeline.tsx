import { Calendar } from 'lucide-react';
import siteData from '@/data/siteData.json';

export default function Timeline() {
  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <Calendar className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">الخط الزمني للأحداث</h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            رحلة 18 سنة من الوعود والانتظار
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-hope via-urgency to-progress hidden md:block" />

            {/* Timeline Items */}
            {siteData.timeline.map((event, index) => (
              <div
                key={event.year}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pl-12' : 'md:pl-1/2 md:pr-12'
                }`}
              >
                {/* Year Badge */}
                <div className="absolute right-1/2 top-0 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg z-10 hidden md:flex">
                  {event.year}
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 rounded-xl hover-lift shadow-md">
                  <div className="flex items-start gap-4 md:hidden mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                      {event.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 hidden md:block">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-urgency to-urgency/80 text-white p-8 md:p-12 rounded-xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">الوضع الحالي - 2025</h2>
            <p className="text-lg leading-relaxed mb-6">
              بعد 20 سنة من الانتظار، لا تزال 5000 أسرة تنتظر حقها في السكن اللائق. 
              المشروع لم يكتمل، والوعود لم تتحقق، لكن إرادتنا لم تضعف.
            </p>
            <p className="text-xl font-bold">
              النضال مستمر حتى تحقيق العدالة السكنية الكاملة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
