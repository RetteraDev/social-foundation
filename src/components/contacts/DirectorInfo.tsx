import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const iconLinks = [
  {
    id: 1,
    icon: 'icons/vk.svg',
    name: 'ВКонтакте',
    url: 'https://vk.com/club78695093'
  }, {
    id: 2,
    icon: 'icons/ok.svg',
    name: 'Одноклассники',
    url: 'https://ok.ru/kulturnydo'
  }, {
    id: 3,
    icon: 'icons/rutube.svg',
    name: 'Rutube',
    url: 'https://rutube.ru/plst/131156/'
  }, {
    id: 4,
    icon: 'icons/youtube.svg',
    name: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PL1pUz22rXW1gJze2hN_-9-s4foDQG9kdL'
  }
];

export const DirectorInfo = () => {
  return (
    <Card className="mb-6 sm:mb-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl sm:text-3xl">Руководство</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4 sm:gap-6">
          {/* Фото директора */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg overflow-hidden border-4 border-gray-100">
              <img
                src="images/director.jpg"
                alt="Директор фонда Леонид Кириллович Лампасов"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Информация о директоре */}
          <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Леонид Кириллович Лампасов
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
              Директор Фонда «Серебряное поколение», председатель Ивановской региональной 
              организации Всероссийской общественной организации ветеранов (пенсионеров) 
              войны, труда, Вооруженных Сил и правоохранительных органов, Почетный гражданин 
              Ивановской области, полковник внутренней службы в отставке, кандидат экономических наук.
            </p>

            {/* Контактная информация */}
            <div className="space-y-1 sm:space-y-2 text-sm text-gray-600">
              <div className="flex justify-start items-center gap-2">
                <span>Служебный телефон: <strong>8 (4932) 32-62-88</strong></span>
              </div>
              
              <div className="flex justify-start items-center gap-2">
                <span>E-mail: <strong>fondsp37@mail.ru</strong></span>
              </div>
              
              <div className="flex justify-start items-center gap-2">
                <span>Веб-сайт: <strong>http://veterani37.ru/</strong></span>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600 mb-2 sm:mb-3">Социальные сети:</p>
              <div className="flex justify-center sm:justify-start gap-5">
                {iconLinks.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                    >
                      <img src={item.icon} alt={item.name}/>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
