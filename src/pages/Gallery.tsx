import { GalleryGrid } from '@/components/GalleryGrid';
import { Image as ImageIcon } from 'lucide-react';
import heroImage from '@/assets/local.png';
import protestImage from '@/assets/protest-unity.png';
import communityImage from '@/assets/community-meeting.png';

// Define image imports for easy management
const GALLERY_IMAGES = {
  local: heroImage,
  protest: protestImage,
  community: communityImage,
};

export default function Gallery() {
  /**
   * Gallery Items Configuration
   * 
   * Structure:
   * - id: Unique identifier for each gallery item
   * - title: Arabic title for the gallery item
   * - description: Arabic description of the content
   * - image: Reference to the imported image asset
   * - date: Date when the photo/event occurred (for future sorting)
   * 
   * To add new items:
   * 1. Add a new image import at the top: import newImage from '@/assets/...';
   * 2. Add it to GALLERY_IMAGES object
   * 3. Create a new item object with unique id and reference the image
   * 
   * To replace an image:
   * - Simply change the image reference in the item's 'image' property
   * - The GalleryGrid component will automatically update the display
   */
  const galleryItems = [
    {
      id: 1,
      title: 'موقع مشروع الرك الأصفر',
      description: 'المشروع السكني المتعثر كما يبدو اليوم بعد 18 سنة من الانتظار',
      image: GALLERY_IMAGES.local,
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'الوقفة الاحتجاجية الكبرى',
      description: 'آلاف المتضررين من سكان الرك الأصفر يطالبون بحقهم في السكن اللائق',
      image: GALLERY_IMAGES.protest,
      date: '2024-02-20',
    },
    {
      id: 3,
      title: 'اجتماع الفيدرالية',
      description: 'اجتماع تنسيقي لممثلي سكان الرك الأصفر لمناقشة خطوات النضال القادمة',
      image: GALLERY_IMAGES.community,
      date: '2024-03-10',
    },
    {
      id: 4,
      title: 'موقع المشروع - منظر آخر',
      description: 'المباني غير المكتملة التي تنتظرها 5000 أسرة',
      image: GALLERY_IMAGES.local,
      date: '2024-04-05',
    },
    {
      id: 5,
      title: 'التضامن الشعبي',
      description: 'مواطنون يتضامنون مع قضية سكان الرك الأصفر',
      image: GALLERY_IMAGES.protest,
      date: '2024-05-12',
    },
    {
      id: 6,
      title: 'التخطيط والتنظيم',
      description: 'اجتماعات دورية لتنسيق الجهود والمطالب',
      image: GALLERY_IMAGES.community,
      date: '2024-06-08',
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
