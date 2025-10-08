import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const categories = [
  {
    title: "Дебетовые карты",
    icon: "CreditCard",
    description: "Оформляй дебетовые карты и получай вознаграждение"
  },
  {
    title: "Кредитные карты",
    icon: "Wallet",
    description: "Помогай клиентам получить кредитные карты"
  },
  {
    title: "Инвестиционный счёт",
    icon: "TrendingUp",
    description: "Открывай инвестиционные счета для клиентов"
  },
  {
    title: "Вклады",
    icon: "PiggyBank",
    description: "Оформляй вклады и зарабатывай"
  },
  {
    title: "МФО",
    icon: "Banknote",
    description: "Работай с микрофинансовыми организациями"
  },
  {
    title: "РКО и регбиз",
    icon: "Briefcase",
    description: "Открывай расчётные счета для бизнеса"
  }
];

const contacts = [
  {
    name: "Telegram",
    icon: "Send",
    url: "https://t.me/"
  },
  {
    name: "WhatsApp",
    icon: "MessageCircle",
    url: "https://wa.me/"
  },
  {
    name: "VK",
    icon: "Share2",
    url: "https://vk.com/"
  }
];

const Index = () => {
  const handleContactClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-green-gold opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              FASTDEALER
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-medium">
              Заработок без трудоустройства
            </p>
            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed">
              Наш сервис помогает людям заработать без трудоустройства, мы являемся посредником 
              самых крупных рекламодателей и компаний
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-2xl animate-scale-in"
              onClick={() => handleContactClick('https://t.me/')}
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Оставить заявку на сотрудничество
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white/60" size={32} />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="md:text-5xl text-center mb-16 gradient-green-gold bg-clip-text text-5xl text-[#ffffff] py-2.5 font-bold px-0">
            Категории предложений
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-primary/20 hover:border-primary/50 bg-card/50 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-green-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={category.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 gradient-green-gold-soft">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Как это работает?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 gradient-green-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Оформляете продукты</h3>
              <p className="text-muted-foreground">Выбирайте предложения от крупнейших рекламодателей</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-20 h-20 gradient-green-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Выполняете задания</h3>
              <p className="text-muted-foreground">Простые задачи с понятными инструкциями</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="w-20 h-20 gradient-green-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Получаете вознаграждение</h3>
              <p className="text-muted-foreground">Фиксированные выплаты любым удобным способом</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-card rounded-2xl border border-primary/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-green-gold rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Ежемесячный рост дохода</h3>
                <p className="text-muted-foreground text-lg">
                  Мы учитываем ваш вклад в развитие проекта и ежемесячно повышаем ваше фиксированное вознаграждение!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 gradient-green-gold bg-clip-text text-[#ffffff] mx-[363px]">
              FASTDEALER
            </h3>
            <p className="text-muted-foreground">Наши контакты</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            {contacts.map((contact) => (
              <Button
                key={contact.name}
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                onClick={() => handleContactClick(contact.url)}
              >
                <Icon name={contact.icon} className="mr-2" size={20} />
                {contact.name}
              </Button>
            ))}
          </div>

          <div className="text-center text-muted-foreground text-sm">
            <p>© 2025 FASTDEALER. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;