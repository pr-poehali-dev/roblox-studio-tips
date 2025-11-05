import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const tips = [
    {
      category: 'Начинающим',
      icon: 'Rocket',
      items: [
        { title: 'Базовые инструменты', description: 'Изучи панель инструментов: Move, Scale, Rotate - основа работы в Studio' },
        { title: 'Первый проект', description: 'Начни с простого обби - это поможет освоить базовую механику' },
        { title: 'Explorer и Properties', description: 'Эти две панели - твои лучшие друзья. Изучи их досконально' },
        { title: 'Тестирование', description: 'Почаще используй кнопку Play для проверки работы игры' }
      ]
    },
    {
      category: 'Скриптинг',
      icon: 'Code',
      items: [
        { title: 'Lua основы', description: 'Начни с переменных, функций и условий - база для всего остального' },
        { title: 'RemoteEvents', description: 'Правильная работа клиент-сервер критична для многопользовательских игр' },
        { title: 'Modulе Scripts', description: 'Используй модули для организации кода - проект станет понятнее' },
        { title: 'Debounce', description: 'Обязательно добавляй задержки на кнопки и триггеры' }
      ]
    },
    {
      category: 'Дизайн',
      icon: 'Palette',
      items: [
        { title: 'Освещение', description: 'Правильный свет создаёт атмосферу - экспериментируй с Lighting' },
        { title: 'Текстуры и материалы', description: 'Используй разнообразные материалы для реалистичности' },
        { title: 'UI/UX', description: 'Интуитивный интерфейс = больше игроков. Делай меню простым и понятным' },
        { title: 'Оптимизация', description: 'Меньше деталей вдали, больше вблизи - используй LOD' }
      ]
    },
    {
      category: 'Продвинутое',
      icon: 'Zap',
      items: [
        { title: 'DataStore', description: 'Сохранение прогресса игроков - must have для серьёзных проектов' },
        { title: 'Tweening', description: 'Плавные анимации объектов делают игру живой' },
        { title: 'Region3', description: 'Оптимизируй проверку зон через Region3 вместо touched events' },
        { title: 'Профилирование', description: 'Используй MicroProfiler для поиска узких мест в производительности' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in">
            <Icon name="Gamepad2" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Roblox Studio Golds
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => setActiveSection('main')} className="text-foreground/80 hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => setActiveSection('tips')} className="text-foreground/80 hover:text-primary transition-colors">
              Советы
            </button>
            <button onClick={() => setActiveSection('community')} className="text-foreground/80 hover:text-primary transition-colors">
              Сообщество
            </button>
            <button onClick={() => setActiveSection('contacts')} className="text-foreground/80 hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
          <Button asChild className="animate-glow hidden md:flex">
            <a href="https://vk.com/robloxstudiogolds" target="_blank" rel="noopener noreferrer">
              <Icon name="Users" size={18} className="mr-2" />
              Вступить в группу
            </a>
          </Button>
        </div>
      </nav>

      {activeSection === 'main' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Создавай <span className="text-primary">легендарные</span> игры в Roblox Studio
                </h1>
                <p className="text-xl text-muted-foreground">
                  Присоединяйся к сообществу разработчиков, где делятся лучшими советами, скриптами и идеями для твоих проектов
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="text-lg animate-glow" asChild>
                    <a href="https://vk.com/robloxstudiogolds" target="_blank" rel="noopener noreferrer">
                      <Icon name="Users" size={20} className="mr-2" />
                      Вступить в VK
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" onClick={() => setActiveSection('tips')}>
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Смотреть советы
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/e7accaf2-f395-4f81-a529-ae95ba81dcae/files/7cc85466-508d-47ff-85e1-814d747f09f9.jpg"
                  alt="Roblox Studio"
                  className="relative rounded-2xl shadow-2xl border border-border/50"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-20">
              {[
                { icon: 'Code', title: 'Скриптинг', desc: 'Lua туториалы и готовые скрипты' },
                { icon: 'Lightbulb', title: 'Идеи', desc: 'Вдохновение для новых проектов' },
                { icon: 'Users', title: 'Комьюнити', desc: 'Общение с единомышленниками' }
              ].map((item, i) => (
                <Card key={i} className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'tips' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Советы по <span className="text-primary">Roblox Studio</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Проверенные советы от опытных разработчиков для создания крутых игр
              </p>
            </div>

            <Tabs defaultValue="Начинающим" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                {tips.map((category) => (
                  <TabsTrigger key={category.category} value={category.category} className="gap-2">
                    <Icon name={category.icon as any} size={18} />
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tips.map((category) => (
                <TabsContent key={category.category} value={category.category} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((tip, index) => (
                      <Card 
                        key={index} 
                        className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="CheckCircle2" className="text-primary" size={20} />
                            {tip.title}
                          </CardTitle>
                          <CardDescription className="text-base">{tip.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      )}

      {activeSection === 'community' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Присоединяйся к <span className="text-primary">Roblox Studio Golds</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Наше сообщество ВКонтакте - место где рождаются лучшие игры
              </p>
            </div>

            <div className="grid gap-8">
              <Card className="border-primary/50 bg-card/50 backdrop-blur animate-slide-up">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Users" className="text-primary" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Roblox Studio Golds</CardTitle>
                      <CardDescription>Официальная группа в VK</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: 'BookOpen', text: 'Эксклюзивные туториалы' },
                      { icon: 'Code', text: 'Готовые скрипты и модели' },
                      { icon: 'MessageCircle', text: 'Помощь с проектами' },
                      { icon: 'Trophy', text: 'Конкурсы и челленджи' }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                        <Icon name={feature.icon as any} className="text-primary" size={20} />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button size="lg" className="w-full text-lg animate-glow" asChild>
                    <a href="https://vk.com/robloxstudiogolds" target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={20} className="mr-2" />
                      Открыть группу VK
                    </a>
                  </Button>

                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold text-lg mb-4">Что ты получишь:</h3>
                    <ul className="space-y-3">
                      {[
                        'Доступ к базе знаний с сотнями туториалов',
                        'Общение с опытными разработчиками',
                        'Первыми узнавай о новых возможностях Roblox Studio',
                        'Участие в совместных проектах'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/e7accaf2-f395-4f81-a529-ae95ba81dcae/files/58d7dbec-f05e-4282-b2c1-721c1e991d5d.jpg"
                  alt="Community"
                  className="relative rounded-2xl shadow-2xl border border-border/50 w-full animate-fade-in"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Свяжись с <span className="text-primary">нами</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Есть вопросы или предложения? Мы всегда на связи!
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    Группа ВКонтакте
                  </CardTitle>
                  <CardDescription>Самый быстрый способ связаться с нами</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href="https://vk.com/robloxstudiogolds" target="_blank" rel="noopener noreferrer">
                      <Icon name="Send" size={18} className="mr-2" />
                      Написать в VK
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    Присоединяйся к комьюнити
                  </CardTitle>
                  <CardDescription>Стань частью нашего сообщества разработчиков</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    В нашей группе ты найдёшь единомышленников, получишь помощь с проектами и будешь в курсе всех новостей Roblox Studio
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://vk.com/robloxstudiogolds" target="_blank" rel="noopener noreferrer">
                      <Icon name="UserPlus" size={18} className="mr-2" />
                      Вступить в группу
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Gamepad2" className="text-primary" size={24} />
            <span className="text-xl font-bold">Roblox Studio Golds</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Сообщество разработчиков Roblox Studio
          </p>
          <Button variant="outline" asChild>
            <a href="https://vk.com/robloxstudiogolds" target="_blank" rel="noopener noreferrer">
              <Icon name="ExternalLink" size={16} className="mr-2" />
              vk.com/robloxstudiogolds
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
