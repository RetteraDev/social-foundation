import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Building, FileText, CreditCard, User } from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    title: 'Полное наименование организации',
    content: 'Фонд социальной, правовой и финансовой поддержки ветеранов, пенсионеров, патриотических движений и культурно–исторического наследия «Серебряное поколение»',
    icon: Building
  },
  {
    id: 2,
    title: 'Сокращенное наименование',
    content: 'Фонд "Серебряное поколение"',
    icon: Building
  },
  {
    id: 3,
    title: 'ИНН/КПП',
    content: '3702198685/370201001',
    icon: FileText
  },
  {
    id: 4,
    title: 'Номер и дата свидетельства о государственной регистрации некоммерческой организации',
    content: '№3714010191 от 07.05.2018г.',
    icon: FileText
  },
  {
    id: 5,
    title: 'ОГРН',
    content: '1183700000241',
    icon: FileText
  },
  {
    id: 6,
    title: 'Юридический адрес',
    content: '153051, Ивановская обл., город Иваново, микрорайон ДСК, дом 5, квартира 169',
    icon: MapPin
  },
  {
    id: 7,
    title: 'Расчетный счет',
    content: 'р/с 40703810817000000773 в Ивановское отделение №8639 ПАО СБЕРБАНК, БИК 042406608, к/с 30101810000000000608',
    icon: CreditCard
  },
  {
    id: 8,
    title: 'Код ОКПО',
    content: '28428780',
    icon: FileText
  },
  {
    id: 9,
    title: 'Код ОКВЭД',
    content: '64.99',
    icon: FileText
  },
  {
    id: 10,
    title: 'Руководитель',
    content: 'Директор Лампасов Леонид Кириллович',
    icon: User
  },
  {
    id: 11,
    title: 'Телефон',
    content: '8 (4932) 32-62-88',
    icon: Phone
  }
];

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl">Реквизиты фонда</CardTitle>
          <p className="text-muted-foreground text-sm sm:text-base">
            Контактная информация и банковские реквизиты
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3 sm:space-y-4">
            {contactInfo.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-xs sm:text-sm text-muted-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base break-words leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
