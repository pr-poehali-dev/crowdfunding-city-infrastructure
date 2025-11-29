import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'Велодорожки в центре города',
      description: 'Создание безопасной сети велодорожек протяжённостью 15 км в историческом центре',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
      raised: 2450000,
      goal: 3500000,
      backers: 342,
      daysLeft: 18,
      category: 'Транспорт',
      organization: 'Зелёный Город'
    },
    {
      id: 2,
      title: 'Парк с детскими площадками',
      description: 'Благоустройство парковой зоны площадью 2 га с экологичными детскими площадками',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80',
      raised: 1850000,
      goal: 2200000,
      backers: 287,
      daysLeft: 25,
      category: 'Экология',
      organization: 'Экопарки'
    },
    {
      id: 3,
      title: 'Энергоэффективное освещение',
      description: 'Замена уличного освещения на солнечные батареи в спальных районах',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      raised: 980000,
      goal: 1500000,
      backers: 156,
      daysLeft: 32,
      category: 'Энергетика',
      organization: 'Чистая Энергия'
    }
  ];

  const subscriptionPlans = [
    {
      name: 'Базовый',
      price: '0₽',
      period: 'навсегда',
      features: [
        'Просмотр всех проектов',
        'Поддержка проектов',
        'Email уведомления',
        'История вкладов'
      ],
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Активист',
      price: '299₽',
      period: 'в месяц',
      features: [
        'Все возможности Базового',
        'Ранний доступ к проектам',
        'Эксклюзивные обновления',
        'Скидка 5% на взносы',
        'Бейдж "Активист"',
        'Приоритетная поддержка'
      ],
      color: 'bg-green-100 border-green-400',
      popular: true
    },
    {
      name: 'Меценат',
      price: '999₽',
      period: 'в месяц',
      features: [
        'Все возможности Активиста',
        'Участие в выборе проектов',
        'Личная консультация',
        'Скидка 10% на взносы',
        'Именной бейдж',
        'Приглашения на мероприятия',
        'Годовой отчёт с вашим вкладом',
        'VIP поддержка'
      ],
      color: 'bg-green-200 border-green-600'
    }
  ];

  const faqs = [
    {
      question: 'Как работает платформа краудфандинга?',
      answer: 'Организации размещают проекты по улучшению городской инфраструктуры. Жители города могут поддержать проекты финансово. Когда собрана нужная сумма, проект реализуется под контролем местной администрации.'
    },
    {
      question: 'Безопасны ли платежи?',
      answer: 'Да, все платежи проходят через защищённые платёжные системы. Мы используем шифрование данных и соответствуем стандартам PCI DSS. Ваши финансовые данные никогда не хранятся на наших серверах.'
    },
    {
      question: 'Что происходит, если проект не собирает средства?',
      answer: 'Если за отведённое время проект не собрал необходимую сумму, все средства возвращаются спонсорам на их счета в течение 5-7 рабочих дней.'
    },
    {
      question: 'Как стать организацией на платформе?',
      answer: 'Заполните заявку в разделе "Для организаций". После проверки документов и целей проекта вы получите доступ к личному кабинету для размещения проектов.'
    },
    {
      question: 'Взимается ли комиссия?',
      answer: 'Платформа берёт комиссию 5% от собранной суммы для покрытия операционных расходов. Все комиссии прозрачно указаны при оформлении поддержки.'
    },
    {
      question: 'Могу ли я отслеживать реализацию проекта?',
      answer: 'Да, организации публикуют регулярные обновления о ходе работ. Все спонсоры получают уведомления о важных этапах реализации проекта.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                <Icon name="Sprout" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-900">CrowdOn</h1>
                <p className="text-xs text-green-600">Краудфандинг для города</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'projects', 'about', 'subscription', 'faq', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-green-700' : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'projects' && 'Проекты'}
                  {section === 'about' && 'О платформе'}
                  {section === 'subscription' && 'Подписка'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                Вместе создаём будущее
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-green-900 mb-6 animate-fade-in">
                Улучшаем город вместе
              </h2>
              <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto animate-fade-in">
                Поддержите проекты по развитию городской инфраструктуры. Каждый вклад делает наш город лучше, 
                экологичнее и комфортнее для жизни.
              </p>
              <div className="flex gap-4 justify-center animate-scale-in">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => setActiveSection('projects')}>
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Смотреть проекты
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  <Icon name="Building2" size={20} className="mr-2" />
                  Для организаций
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-green-200 hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Leaf" className="text-green-600" size={24} />
                    </div>
                    <CardTitle className="text-green-900">Экологично</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700">
                      Все проекты направлены на создание экологичной и устойчивой городской среды
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Shield" className="text-green-600" size={24} />
                    </div>
                    <CardTitle className="text-green-900">Прозрачно</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700">
                      Полная отчётность по каждому проекту и контроль использования средств
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:shadow-lg transition-shadow animate-fade-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Icon name="Users" className="text-green-600" size={24} />
                    </div>
                    <CardTitle className="text-green-900">Вместе</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700">
                      Каждый житель может внести свой вклад в развитие родного города
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-green-900 mb-4">Активные проекты</h3>
                <p className="text-green-700 max-w-2xl mx-auto">
                  Выберите проект и станьте частью позитивных изменений в нашем городе
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={project.id} className="border-green-200 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          {project.category}
                        </Badge>
                        <span className="text-sm text-green-600">{project.daysLeft} дней</span>
                      </div>
                      <CardTitle className="text-green-900">{project.title}</CardTitle>
                      <CardDescription className="text-green-700">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold text-green-900">
                            {project.raised.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className="text-green-600">
                            из {project.goal.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                        <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-green-700">
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          <span>{project.backers} спонсоров</span>
                        </div>
                      </div>
                      <p className="text-xs text-green-600 mt-2">{project.organization}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Icon name="Heart" size={18} className="mr-2" />
                        Поддержать проект
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'projects' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Все проекты</h2>
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="transport">Транспорт</TabsTrigger>
                <TabsTrigger value="ecology">Экология</TabsTrigger>
                <TabsTrigger value="energy">Энергия</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.id} className="border-green-200 hover:shadow-xl transition-all hover:-translate-y-1" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-green-600">{project.daysLeft} дней</span>
                    </div>
                    <CardTitle className="text-green-900">{project.title}</CardTitle>
                    <CardDescription className="text-green-700">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-green-900">
                          {project.raised.toLocaleString('ru-RU')} ₽
                        </span>
                        <span className="text-green-600">
                          из {project.goal.toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                      <Progress value={(project.raised / project.goal) * 100} className="h-2" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-green-700">
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={16} />
                        <span>{project.backers} спонсоров</span>
                      </div>
                    </div>
                    <p className="text-xs text-green-600 mt-2">{project.organization}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Icon name="Heart" size={18} className="mr-2" />
                      Поддержать проект
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">О платформе</h2>
            <Card className="border-green-200">
              <CardContent className="pt-6">
                <div className="space-y-6 text-green-700">
                  <p className="text-lg">
                    <strong className="text-green-900">ГородВместе</strong> — это платформа краудфандинга, которая объединяет жителей 
                    и организации для создания лучшей городской среды.
                  </p>
                  <p>
                    Мы верим, что каждый житель должен иметь возможность влиять на развитие своего города. 
                    Наша платформа позволяет организациям представлять проекты по улучшению инфраструктуры, 
                    а жителям — напрямую поддерживать те инициативы, которые им близки.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 py-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Target" className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Наша миссия</h4>
                        <p className="text-sm">Создать экологичный и комфортный город через активное участие жителей</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Eye" className="text-green-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Наше видение</h4>
                        <p className="text-sm">Город, где каждый житель является соавтором позитивных изменений</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-4">Как это работает</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">1</div>
                        <p className="pt-1">Организация размещает проект с детальным описанием и бюджетом</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">2</div>
                        <p className="pt-1">Жители изучают проект и поддерживают его финансово</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">3</div>
                        <p className="pt-1">При достижении цели проект реализуется с полной отчётностью</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">4</div>
                        <p className="pt-1">Все спонсоры получают обновления о ходе работ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'subscription' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-900 mb-4">Уровни подписки</h2>
              <p className="text-green-700 max-w-2xl mx-auto">
                Выберите подходящий уровень участия и получите дополнительные возможности
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan, index) => (
                <Card key={plan.name} className={`${plan.color} relative hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-green-900">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-green-900">{plan.price}</span>
                      <span className="text-green-700 block text-sm mt-1">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-green-800">
                          <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                    >
                      {plan.name === 'Базовый' ? 'Начать бесплатно' : 'Оформить подписку'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'faq' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Частые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-green-200 rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold text-green-900 hover:text-green-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-green-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Свяжитесь с нами</CardTitle>
                  <CardDescription className="text-green-700">
                    Мы всегда готовы ответить на ваши вопросы
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-green-600">Email</p>
                      <p className="font-medium text-green-900">info@gorodvmeste.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="Phone" className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-green-600">Телефон</p>
                      <p className="font-medium text-green-900">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-green-600">Адрес</p>
                      <p className="font-medium text-green-900">г. Москва, ул. Экологическая, д. 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Напишите нам</CardTitle>
                  <CardDescription className="text-green-700">
                    Заполните форму и мы свяжемся с вами
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-green-900 block mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-900 block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-900 block mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-green-900 text-white py-12 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Sprout" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ГородВместе</h3>
                  <p className="text-xs text-green-300">Краудфандинг</p>
                </div>
              </div>
              <p className="text-sm text-green-300">
                Создаём лучший город вместе с вами
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-green-300">
                <li><button onClick={() => setActiveSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => setActiveSection('projects')} className="hover:text-white transition-colors">Проекты</button></li>
                <li><button onClick={() => setActiveSection('about')} className="hover:text-white transition-colors">О платформе</button></li>
                <li><button onClick={() => setActiveSection('subscription')} className="hover:text-white transition-colors">Подписка</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-green-300">
                <li><button onClick={() => setActiveSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => setActiveSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-300">
            <p>© 2024 ГородВместе. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;