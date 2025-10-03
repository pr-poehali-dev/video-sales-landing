import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const courses = [
    {
      title: "Введение в курс",
      lessons: 5,
      duration: "45 минут",
      icon: "BookOpen"
    },
    {
      title: "Основы практики",
      lessons: 8,
      duration: "2 часа",
      icon: "Lightbulb"
    },
    {
      title: "Продвинутые техники",
      lessons: 12,
      duration: "3.5 часа",
      icon: "Rocket"
    },
    {
      title: "Работа с проектами",
      lessons: 10,
      duration: "4 часа",
      icon: "Briefcase"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Дизайнер",
      text: "Курс полностью изменил мой подход к работе. Материал структурирован идеально, а видео очень качественные!",
      rating: 5
    },
    {
      name: "Михаил Соколов",
      role: "Разработчик",
      text: "Отличное соотношение теории и практики. Преподаватель объясняет сложные вещи простым языком.",
      rating: 5
    },
    {
      name: "Елена Морозова",
      role: "Маркетолог",
      text: "Уже через неделю применила знания в работе. Результаты превзошли все ожидания!",
      rating: 5
    }
  ];

  const pricing = [
    {
      name: "Базовый",
      price: "5 000",
      features: [
        "Доступ к 25 урокам",
        "6 месяцев доступа",
        "Сертификат о прохождении",
        "Поддержка в чате"
      ],
      popular: false
    },
    {
      name: "Профессиональный",
      price: "10 000",
      features: [
        "Доступ ко всем урокам",
        "Безлимитный доступ",
        "Персональный сертификат",
        "Приоритетная поддержка",
        "Бонусные материалы",
        "Групповые созвоны"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "15 000",
      features: [
        "Всё из Профессионального",
        "Личный наставник",
        "1-на-1 консультации",
        "Проверка домашних заданий",
        "Доступ к закрытому сообществу"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Как долго у меня будет доступ к курсу?",
      answer: "Это зависит от выбранного тарифа. Базовый тариф предоставляет доступ на 6 месяцев, Профессиональный и Премиум - безлимитный доступ."
    },
    {
      question: "Нужны ли предварительные знания?",
      answer: "Нет, курс построен от простого к сложному. Мы начинаем с основ и постепенно переходим к продвинутым техникам."
    },
    {
      question: "Получу ли я сертификат?",
      answer: "Да, после успешного прохождения курса вы получите сертификат о прохождении, который можно добавить в портфолио."
    },
    {
      question: "Можно ли задавать вопросы преподавателю?",
      answer: "Конечно! Все тарифы включают поддержку. На тарифах Профессиональный и Премиум также доступны групповые созвоны и личные консультации."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center gradient-coral-teal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="md:text-7xl font-bold mb-6 leading-tight text-[#000000] text-6xl">
                Мультфильмы. Инструкция по эксплуатации
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#000000]">Практические видеоуроки от экспертов отрасли. Курс по созданию мультфильмов</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-lg rounded-full" onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}>
                  Смотреть программу
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold">5000+</div>
                  <div className="text-white/80">Студентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-white/80">Уроков</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">4.9</div>
                  <div className="text-white/80">Рейтинг</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-24 h-24 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-2xl"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} className="text-primary" size={40} />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="text-white font-semibold text-lg">Вводный урок - Обзор курса</div>
                  <div className="text-white/80 text-sm">Продолжительность: 12:34</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-gradient-to-b from-white to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Программа курса
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Структурированная программа с пошаговым изучением материала
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl gradient-coral-teal flex items-center justify-center mb-4">
                    <Icon name={course.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    {course.lessons} уроков • {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-accent/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Отзывы учеников
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 5000 студентов уже изменили свою жизнь
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full gradient-coral-teal flex items-center justify-center text-white text-2xl font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Выберите тариф
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкие условия для любого уровня подготовки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                  plan.popular ? 'border-primary border-4 shadow-xl' : 'border-2'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 gradient-coral-teal text-white font-bold rounded-full text-sm">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full text-lg py-6 ${
                      plan.popular 
                        ? 'gradient-coral-teal text-white hover:opacity-90' 
                        : 'border-2'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-b from-accent/20 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Частые вопросы
              </h2>
              <p className="text-xl text-muted-foreground">
                Ответы на самые популярные вопросы
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 rounded-2xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 gradient-coral-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Остались вопросы?
              </h2>
              <p className="text-xl text-black">
                Напишите нам, и мы свяжемся с вами в течение 24 часов
              </p>
            </div>

            <Card className="shadow-2xl border-0 animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      className="h-12 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com" 
                      className="h-12 text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, чем мы можем помочь..." 
                      rows={5}
                      className="text-base resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-coral-teal text-black font-semibold text-lg py-6"
                  >
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">VideoСourse</h3>
              <p className="text-white/70">
                Образовательная платформа для профессионального роста
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-white/70">
                <li>Дизайн</li>
                <li>Программирование</li>
                <li>Маркетинг</li>
                <li>Бизнес</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/70">
                <li>Помощь</li>
                <li>Документация</li>
                <li>Контакты</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Youtube" className="text-white/70 hover:text-white cursor-pointer" size={24} />
                <Icon name="Twitter" className="text-white/70 hover:text-white cursor-pointer" size={24} />
                <Icon name="Instagram" className="text-white/70 hover:text-white cursor-pointer" size={24} />
                <Icon name="Linkedin" className="text-white/70 hover:text-white cursor-pointer" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2024 VideoCourse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;