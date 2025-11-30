import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export const GalleryGrid = ({ items }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift shadow-md"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
