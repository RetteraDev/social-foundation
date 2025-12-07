import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/icons/logo.svg"
              alt="Логотип"
              className="h-8 w-8"
            />
            <Link to="/" className="hidden sm:block">
              <span className="text-xl">Фонд «Серебряное поколение»</span>
            </Link>
            <Link to="/" className="sm:hidden">
              <span className="text-lg">Фонд СП</span>
            </Link>
          </div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/projects">Проекты</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/documents">Документы</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/contacts">Контакты</Link>
            </Button>
          </nav>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Мобильное выпадающее меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col gap-2">
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                  Проекты
                </Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/documents" onClick={() => setIsMenuOpen(false)}>
                  Документы
                </Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
                  Контакты
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
