import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-primary/20 hover:border-primary/50 transition-all cursor-pointer">
      <CardContent className="p-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left gap-4"
        >
          <h3 className="text-lg md:text-xl font-bold text-foreground">{question}</h3>
          <Icon
            name={isOpen ? 'ChevronUp' : 'ChevronDown'}
            className={`text-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            size={24}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'Сколько можно заработать?',
      answer: 'Ограничений в заработке нет, оформляй на себя, приводи друзей и получай бонусы, находи новых партнёров и оформляй продукты на них, получай двойную выгоду! С нашей командой работать легко и быстро!'
    },
    {
      question: 'Как долго ждать выплату?',
      answer: 'Новички ждут две недели с момента оформления и выполнения заданий, со второго месяца ожидание выплаты сокращается до одной недели!'
    },
    {
      question: 'Есть ли график?',
      answer: 'НЕТ! Работай, как и во сколько тебе удобнее.'
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
