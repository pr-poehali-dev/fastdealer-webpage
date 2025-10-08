import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import MobileMenu from "@/components/MobileMenu";

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
    url: "https://t.me/imvesty"
  },
  {
    name: "WhatsApp",
    icon: "MessageCircle",
    url: "https://wa.me/qr/VZWAI4RAH4P2P1"
  },
  {
    name: "VK",
    icon: "Share2",
    url: "https://vk.com/wfawfawa222"
  }
];

const Index = () => {
  const handleContactClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <MobileMenu onContactClick={() => handleContactClick('https://t.me/imvesty')} />
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
            <p className="text-lg md:text-xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed">Наш сервис помогает людям заработать без необходимости трудоустройства, мы являемся посредником самых крупных рекламодателей и компаний, платим за оформление продуктов и выполнение заданий от наших партнёров!</p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-semibold shadow-2xl animate-scale-in"
              onClick={() => handleContactClick('https://t.me/imvesty')}
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

      <section id="categories" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="md:text-5xl text-center mb-16 gradient-green-gold bg-clip-text text-5xl text-[#ffffff] py-2.5 font-bold px-0 mx-[225px]">
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

      <section id="payments" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-green-gold bg-clip-text text-[#ffffff] my-0 py-[3px]">
              Выплаты нашим клиентам
            </h2>
            <p className="text-muted-foreground text-lg py-[26px]">
              Реальные выплаты реальным людям — мы ценим каждого партнёра
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-0 px-0 my-0 mx-0">
            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/d46aadb3-48a8-4b1d-ad84-587d43935654.jpg" 
                  alt="Выплата 1200₽" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/4ab9489d-1723-4f18-8a02-6a12ee9c92ba.jpg" 
                  alt="Выплата 560₽" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/bae7a710-b97c-43ad-86ce-dfa267e75d7a.jpg" 
                  alt="Выплата 5850₽" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/8cf238c6-cfd8-45bd-928e-68b943d026fb.jpg" 
                  alt="Выплата 3000₽" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/74cc36c9-e93e-43d8-97c8-78448b4ef73b.jpg" 
                  alt="Выплата 1550₽" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/868c4fbe-09b0-42a8-ba37-45e5b8a992c9.jpg" 
                  alt="Выплата 3468₽" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
              <Icon name="CheckCircle" className="text-primary" size={20} />
              <p className="text-foreground font-semibold">Все выплаты производятся в течение 24 часов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 gradient-green-gold-soft">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Отзывы наших партнёров
            </h2>
            <p className="text-muted-foreground text-lg">
              Реальные истории успеха людей, которые с нами зарабатывают
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20 hover:border-primary/50 transition-all bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-green-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    А
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Александр</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Работаю с FASTDEALER уже 3 месяца. Выплаты всегда вовремя, поддержка отвечает быстро. Доход растёт каждый месяц, как и обещали!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-green-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    М
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Мария</h4>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                      ))}
                      <Icon name="Star" className="text-yellow-500" size={14} />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Начала с простых заданий, сейчас уже оформляю по 10-15 продуктов в неделю. Отличный дополнительный доход без привязки к офису!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-green-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    Д
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Дмитрий</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Сначала не верил, что всё так просто. Но уже получил 5 выплат, все в течение суток. Рекомендую всем, кто хочет зарабатывать онлайн!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-green-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    Е
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Елена</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Идеально для мам в декрете! Работаю в удобное время, задания простые и понятные. За 2 месяца вознаграждение выросло на 40%."
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-green-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    И
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Игорь</h4>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                      ))}
                      <Icon name="Star" className="text-yellow-500" size={14} />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Совмещаю с основной работой. 2-3 часа в день приносят хороший дополнительный доход. Поддержка всегда на связи, всё честно."
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all bg-card/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-green-gold rounded-full flex items-center justify-center text-white font-bold text-lg">
                    О
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Ольга</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Лучший сервис для заработка! За 4 месяца работы ни одной задержки с выплатами. Вознаграждение действительно растёт каждый месяц!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg mb-6">
              Присоединяйтесь к нашей команде успешных партнёров!
            </p>
            <Button 
              size="lg" 
              className="gradient-green-gold text-white hover:opacity-90 text-lg px-8 py-6 h-auto font-semibold shadow-xl"
              onClick={() => handleContactClick('https://t.me/imvesty')}
            >
              <Icon name="UserPlus" className="mr-2" size={24} />
              Начать зарабатывать
            </Button>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-card border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 gradient-green-gold bg-clip-text text-[#ffffff] mx-[363px]">
              FASTDEALER
            </h3>
            <p className="text-muted-foreground px-0 text-lg font-bold py-2.5">Наши контакты👇</p>
          </div>
          
          <div className="flex justify-center gap-6 py-0 px-0 mx-[291px] my-[37px]">
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