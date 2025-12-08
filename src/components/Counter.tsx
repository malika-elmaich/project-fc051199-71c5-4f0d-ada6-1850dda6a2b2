import { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

export const Counter = ({ end, duration = 2000, label, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-count-up leading-tight">
        {count.toLocaleString('ar-MA')}
        {suffix}
      </div>
      <div className="text-base md:text-lg text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};
