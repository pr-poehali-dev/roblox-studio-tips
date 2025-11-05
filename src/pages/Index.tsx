import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useSound } from '@/hooks/useSound';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [selectedTip, setSelectedTip] = useState<any>(null);
  const { playClick, playHover } = useSound();

  // Функция для вибрации и звукового эффекта
  const handleButtonClick = useCallback(() => {
    // Вибрация (работает на мобильных устройствах)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    // Звуковой эффект
    playClick();
  }, [playClick]);

  // Обёртка для кликов по кнопкам
  const handleClick = useCallback((callback?: () => void) => {
    return () => {
      handleButtonClick();
      if (callback) callback();
    };
  }, [handleButtonClick]);

  const tips = [
    {
      category: 'Начинающим',
      icon: 'Rocket',
      items: [
        { 
          title: 'Базовые инструменты', 
          description: 'Изучи панель инструментов: Move, Scale, Rotate - основа работы в Studio',
          details: 'Move (M) - перемещение объектов в пространстве. Scale (R) - изменение размера. Rotate (T) - поворот объектов. Эти три инструмента - основа работы с любыми объектами в Roblox Studio. Освой горячие клавиши - это сэкономит массу времени! Также изучи Select Tool (S) для выбора объектов и Part Insert для создания новых деталей.'
        },
        { 
          title: 'Первый проект', 
          description: 'Начни с простого обби - это поможет освоить базовую механику',
          details: 'Обби (obstacle course) - идеальный старт для новичков. Создай платформы разной высоты, добавь препятствия (движущиеся части, лаву), настрой spawn point и финиш. Это научит тебя работать с деталями, материалами, освещением и базовой физикой. Не пытайся сразу делать сложные механики - начни с простого!'
        },
        { 
          title: 'Explorer и Properties', 
          description: 'Эти две панели - твои лучшие друзья. Изучи их досконально',
          details: 'Explorer показывает иерархию всех объектов в игре (Workspace, ReplicatedStorage, ServerScriptService и т.д.). Properties позволяет редактировать свойства выбранного объекта - размер, цвет, материал, прозрачность и многое другое. Научись быстро находить нужные объекты в Explorer и менять их свойства через Properties - это база эффективной работы.'
        },
        { 
          title: 'Тестирование', 
          description: 'Почаще используй кнопку Play для проверки работы игры',
          details: 'Кнопка Play (F5) запускает локальный тест игры. Тестируй каждое изменение! Проверяй физику, коллизии, скрипты. Используй Play Here для теста с конкретной точки. Stop (Shift+F5) останавливает тест. Регулярное тестирование помогает находить баги на ранних этапах, когда их легко исправить.'
        }
      ]
    },
    {
      category: 'Скриптинг',
      icon: 'Code',
      items: [
        { 
          title: 'Lua основы', 
          description: 'Начни с переменных, функций и условий - база для всего остального',
          details: 'Lua - простой язык программирования в Roblox. Начни с переменных (local health = 100), функций (function heal() ... end), условий (if health < 50 then...). Изучи циклы (for, while), таблицы (arrays). Roblox использует Luau - улучшенную версию Lua с типизацией. Практикуйся на простых скриптах: смена цвета при клике, телепортация, простой диалог.'
        },
        { 
          title: 'RemoteEvents', 
          description: 'Правильная работа клиент-сервер критична для многопользовательских игр',
          details: 'RemoteEvent и RemoteFunction - способ общения между клиентом (LocalScript) и сервером (Script). Клиент не должен доверять серверу! Всегда проверяй данные от клиента на сервере. Храни RemoteEvents в ReplicatedStorage. Используй :FireServer() на клиенте и .OnServerEvent на сервере. Не передавай объекты напрямую - только данные (ID, позиции, числа).'
        },
        { 
          title: 'Modulе Scripts', 
          description: 'Используй модули для организации кода - проект станет понятнее',
          details: 'ModuleScript - многоразовый код, который можно подключать в другие скрипты через require(). Создавай модули для часто используемых функций (система денег, инвентарь, UI). Модуль возвращает таблицу: local module = {} ... return module. Храни модули в ReplicatedStorage (доступ с клиента и сервера) или ServerStorage (только сервер). Это делает код чище и проще в поддержке.'
        },
        { 
          title: 'Debounce', 
          description: 'Обязательно добавляй задержки на кнопки и триггеры',
          details: 'Debounce - защита от спама. Без него игрок может активировать кнопку 100 раз в секунду! Создай переменную local debounce = false, проверяй её перед выполнением кода, ставь в true, жди task.wait(1), возвращай в false. Для touch events используй humanoid check: if hit.Parent:FindFirstChild("Humanoid"). Это предотвратит баги и читерство.'
        }
      ]
    },
    {
      category: 'Дизайн',
      icon: 'Palette',
      items: [
        { 
          title: 'Освещение', 
          description: 'Правильный свет создаёт атмосферу - экспериментируй с Lighting',
          details: 'Lighting задаёт настроение игры! Измени Ambient и OutdoorAmbient для общего тона. ClockTime меняет время суток (14 = день, 0 = ночь). Добавь ColorCorrection для цветовых фильтров. Используй PointLight и SpotLight для локального освещения. Bloom и SunRays добавят киношности. Туман (FogEnd, FogStart) создаст глубину. Тестируй на разных устройствах - освещение может выглядеть по-разному!'
        },
        { 
          title: 'Текстуры и материалы', 
          description: 'Используй разнообразные материалы для реалистичности',
          details: 'Material влияет на вид и физику! Grass для травы, Concrete для бетона, Neon для светящихся элементов. Каждый материал имеет уникальную текстуру и коэффициент трения. Комбинируй материалы для интересных эффектов. SurfaceAppearance позволяет загружать кастомные текстуры (AlbedoMap, NormalMap, RoughnessMap). Используй Decal и Texture для деталей. Не перегружай - оптимизация важна!'
        },
        { 
          title: 'UI/UX', 
          description: 'Интуитивный интерфейс = больше игроков. Делай меню простым и понятным',
          details: 'Хороший UI - незаметный UI! Используй ScreenGui для интерфейса. Frame - контейнер, TextLabel - текст, TextButton - кнопки, ImageLabel - картинки. Размеры задавай в Scale (не Offset) для адаптивности. UICorner скругляет углы, UIStroke добавляет обводку. UIListLayout автоматически расставляет элементы. Тестируй на разных разрешениях! Делай крупные кнопки для мобильных устройств.'
        },
        { 
          title: 'Оптимизация', 
          description: 'Меньше деталей вдали, больше вблизи - используй LOD',
          details: 'LOD (Level of Detail) - разные модели для разных расстояний. Вдали объект может быть простым (мало полигонов), вблизи - детальным. Используй StreamingEnabled для подгрузки мира частями. Избегай тысяч мелких деталей - объединяй их в MeshPart. Отключай CanCollide у декораций. Уменьшай Shadow rendering distance. Используй низкополигональные модели для фона. 60 FPS = счастливые игроки!'
        }
      ]
    },
    {
      category: 'Продвинутое',
      icon: 'Zap',
      items: [
        { 
          title: 'DataStore', 
          description: 'Сохранение прогресса игроков - must have для серьёзных проектов',
          details: 'DataStoreService сохраняет данные между сессиями. GetDataStore("PlayerData") создаёт хранилище. :GetAsync(userId) загружает данные, :SetAsync(userId, data) сохраняет. ВАЖНО: делай auto-save каждые 5 минут и при выходе игрока (game.Players.PlayerRemoving). Используй pcall для обработки ошибок. Не сохраняй слишком часто - есть лимиты! UpdateAsync безопаснее SetAsync для конкурентных изменений.'
        },
        { 
          title: 'Tweening', 
          description: 'Плавные анимации объектов делают игру живой',
          details: 'TweenService создаёт плавную анимацию свойств объектов. local tween = TweenService:Create(part, TweenInfo.new(1), {Position = newPos}), затем tween:Play(). Можно анимировать Position, Size, Color, Transparency и др. EasingStyle меняет характер анимации (Linear, Quad, Bounce). Используй .Completed:Connect() для действий после анимации. Tweening делает двери, платформы, UI плавными и приятными глазу!'
        },
        { 
          title: 'Region3', 
          description: 'Оптимизируй проверку зон через Region3 вместо touched events',
          details: 'Region3 - проверка объектов в зоне без .Touched events (которые жрут FPS). Создай зону: Region3.new(minVector, maxVector). workspace:FindPartsInRegion3() вернёт все части в зоне. Для персонажей используй GetPartBoundsInBox(). Запускай проверку в цикле с task.wait(0.5), а не постоянно. Это в разы эффективнее, чем десятки Touched событий. Идеально для зон урона, триггеров, квестовых областей.'
        },
        { 
          title: 'Профилирование', 
          description: 'Используй MicroProfiler для поиска узких мест в производительности',
          details: 'MicroProfiler (Ctrl+Alt+F6) показывает, что тормозит игру. Зелёный - хорошо, красный - плохо. Смотри на Physics, Rendering, Scripts. Если скрипт долго выполняется - оптимизируй: убери task.wait() из циклов, используй Region3 вместо Touched, кэшируй FindFirstChild. Developer Console (F9) показывает ошибки и предупреждения. Memory - для утечек памяти. Профилируй регулярно, особенно перед релизом!'
        }
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
            <button onMouseEnter={playHover} onClick={handleClick(() => setActiveSection('main'))} className="text-foreground/80 hover:text-primary transition-all duration-200 active:scale-95 hover:scale-105">
              Главная
            </button>
            <button onMouseEnter={playHover} onClick={handleClick(() => setActiveSection('tips'))} className="text-foreground/80 hover:text-primary transition-all duration-200 active:scale-95 hover:scale-105">
              Советы
            </button>
            <button onMouseEnter={playHover} onClick={handleClick(() => setActiveSection('community'))} className="text-foreground/80 hover:text-primary transition-all duration-200 active:scale-95 hover:scale-105">
              Сообщество
            </button>
            <button onMouseEnter={playHover} onClick={handleClick(() => setActiveSection('support'))} className="text-foreground/80 hover:text-primary transition-all duration-200 active:scale-95 hover:scale-105">
              Поддержка
            </button>
            <button onMouseEnter={playHover} onClick={handleClick(() => setActiveSection('contacts'))} className="text-foreground/80 hover:text-primary transition-all duration-200 active:scale-95 hover:scale-105">
              Контакты
            </button>
          </div>
          <Button asChild className="animate-glow hidden md:flex" onMouseEnter={playHover} onClick={handleClick()}>
            <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
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
                  <Button size="lg" className="text-lg animate-glow" asChild onMouseEnter={playHover} onClick={handleClick()}>
                    <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
                      <Icon name="Users" size={20} className="mr-2" />
                      Вступить в VK
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg transition-all duration-200 active:scale-95 hover:scale-105" onMouseEnter={playHover} onClick={handleClick(() => setActiveSection('tips'))}>
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Смотреть советы
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-orange-500/40 blur-3xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 blur-xl opacity-50 animate-glow"></div>
                <img 
                  src="https://cdn.poehali.dev/files/f9f4440e-fc4e-48f1-aadd-8c5318e67412.jpg"
                  alt="Roblox Studio"
                  className="relative shadow-2xl ring-4 ring-orange-500/30 object-cover"
                  style={{ clipPath: 'inset(0 round 12px)' }}
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
                        className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-xl animate-slide-up cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={handleClick(() => setSelectedTip(tip))}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="CheckCircle2" className="text-primary" size={20} />
                            {tip.title}
                          </CardTitle>
                          <CardDescription className="text-base">{tip.description}</CardDescription>
                          <div className="pt-2 flex items-center gap-2 text-primary text-sm">
                            <Icon name="ArrowRight" size={16} />
                            <span>Узнать подробнее</span>
                          </div>
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
                    <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
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

      {activeSection === 'support' && (
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Поддержка <span className="text-primary">проекта</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Помоги развивать сообщество Roblox Studio Golds
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 animate-slide-up">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Моральная поддержка</CardTitle>
                  <CardDescription>Бесплатные способы помочь проекту</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Поделись группой с друзьями</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MessageSquare" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Оставляй комментарии и отзывы</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Users" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Помогай новичкам советами</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
                      <Icon name="Share2" size={18} className="mr-2" />
                      Рассказать друзьям
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Coffee" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Материальная поддержка</CardTitle>
                  <CardDescription>Поддержи создание контента</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Твоя поддержка помогает создавать качественные туториалы, проводить конкурсы и развивать сообщество
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Video" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Больше видео-уроков</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Trophy" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Конкурсы с призами</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Zap" className="text-primary mt-1 flex-shrink-0" size={18} />
                      <span>Эксклюзивный контент</span>
                    </div>
                  </div>
                  <Button className="w-full animate-glow" asChild>
                    <a href="https://vk.com/roblox_studio_packs?w=donut_payment-210646351&levelId=2344" target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      Поддержать VK Donut
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur mt-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="Gift" className="text-primary" size={24} />
                  Что получат спонсоры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: 'Award', title: 'Особый статус', desc: 'VIP роль в группе' },
                    { icon: 'Download', title: 'Ранний доступ', desc: 'К новым материалам' },
                    { icon: 'Sparkles', title: 'Бонус-контент', desc: 'Эксклюзивные скрипты' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon name={item.icon as any} className="text-primary" size={24} />
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
                    <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
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

      <Dialog open={!!selectedTip} onOpenChange={() => setSelectedTip(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Icon name="CheckCircle2" className="text-primary" size={28} />
              {selectedTip?.title}
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              {selectedTip?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="BookOpen" className="text-primary" size={20} />
                Подробная информация
              </h4>
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                {selectedTip?.details}
              </p>
            </div>
            <Button className="w-full" asChild>
              <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Обсудить в группе VK
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
            <a href="https://vk.com/roblox_studio_packs" target="_blank" rel="noopener noreferrer">
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