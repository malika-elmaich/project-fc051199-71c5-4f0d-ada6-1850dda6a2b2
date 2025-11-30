import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, Mail, Clock, Image, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', path: '/', icon: Home },
    { name: 'عن المشروع', path: '/about', icon: Info },
    { name: 'الخط الزمني', path: '/timeline', icon: Clock },
    { name: 'المعرض', path: '/gallery', icon: Image },
    { name: 'العريضة', path: '/petition', icon: FileText },
    { name: 'اتصل بنا', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hope to-progress flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
              ص
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">صوت الرك الأصفر</span>
              <span className="text-xs text-muted-foreground">كلميم</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant="ghost" className="gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link to="/petition">
              <Button className="mr-2 bg-urgency hover:bg-urgency/90">
                انضم للعريضة
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="القائمة"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <Link to="/petition" onClick={() => setIsOpen(false)} className="block px-4 pt-2">
              <Button className="w-full bg-urgency hover:bg-urgency/90">
                انضم للعريضة
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
