import { useEffect, useState } from 'react';
import siteData from '@/data/siteData.json';

export const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const news = siteData.news;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="bg-urgency text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <span className="font-bold text-sm md:text-base whitespace-nowrap bg-white text-urgency px-3 py-1 rounded">
            عاجل
          </span>
          <div className="flex-1 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {news.map((item, index) => (
                <div
                  key={item.id}
                  className="text-sm md:text-base"
                  style={{
                    position: index === 0 ? 'relative' : 'absolute',
                    top: 0,
                    right: `${-index * 100}%`,
                    width: '100%',
                  }}
                >
                  <span className="font-bold">{item.title}</span> - {item.summary}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
