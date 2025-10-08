import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  onContactClick: () => void;
}

const MobileMenu = ({ onContactClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-lg shadow-lg"
        aria-label="Меню"
      >
        <Icon name={isOpen ? "X" : "Menu"} size={24} className="text-primary" />
      </button>

      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <div className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-background z-40 shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('categories')}
                  className="text-lg font-medium text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  Категории
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-lg font-medium text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  Как работает
                </button>
                <button
                  onClick={() => scrollToSection('payments')}
                  className="text-lg font-medium text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  Выплаты
                </button>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="text-lg font-medium text-left py-3 px-4 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  Контакты
                </button>
              </nav>

              <div className="mt-8">
                <Button
                  onClick={() => {
                    onContactClick();
                    setIsOpen(false);
                  }}
                  className="w-full gradient-green-gold text-white font-semibold"
                  size="lg"
                >
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Начать сотрудничество
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;
