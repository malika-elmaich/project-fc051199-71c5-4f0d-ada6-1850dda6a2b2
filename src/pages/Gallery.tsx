import { GalleryGrid } from '@/components/GalleryGrid';
import { Image as ImageIcon } from 'lucide-react';
import heroImage from '@/assets/hero-housing.jpg';
import protestImage from '@/assets/protest-unity.jpg';
import communityImage from '@/assets/community-meeting.jpg';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'موقع مشروع الرك الأصفر',
      description: 'المشروع السكني المتعثر كما يبدو اليوم بعد 18 سنة من الانتظار',
      image: heroImage,
    },
    {
      id: 2,
      title: 'الوقفة الاحتجاجية الكبرى',
      description: 'آلاف المتضررين من سكان الرك الأصفر يطالبون بحقهم في السكن اللائق',
      image: protestImage,
    },
    {
      id: 3,
      title: 'اجتماع الفيدرالية',
      description: 'اجتماع تنسيقي لممثلي سكان الرك الأصفر لمناقشة خطوات النضال القادمة',
      image: communityImage,
    },
    {
      id: 4,
      title: 'موقع المشروع - منظر آخر',
      description: 'المباني غير المكتملة التي تنتظرها 5000 أسرة',
      image: heroImage,
    },
    {
      id: 5,
      title: 'التضامن الشعبي',
      description: 'مواطنون يتضامنون مع قضية سكان الرك الأصفر',
      image: protestImage,
    },
    {
      id: 6,
      title: 'التخطيط والتنظيم',
      description: 'اجتماعات دورية لتنسيق الجهود والمطالب',
      image: communityImage,
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <ImageIcon className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">معرض الصور</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            صور توثق رحلة النضال والمطالبة بالحقوق
          </p>
        </div>

        {/* Gallery */}
        <GalleryGrid items={galleryItems} />
      </div>
    </div>
  );
}
