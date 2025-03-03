import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const contactInfo = [
  {
    id: 1,
    title: 'Полное наименование организации',
    subst: 'Фонд социальной, правовой и финансовой  поддержки ветеранов, пенсионеров, патриотических движений и культурно – исторического наследия  «Серебряное поколение»'
  },
  {
    id: 2,
    title: 'Сокращенное наименование',
    subst: 'Фонд "Серебряное поколение"'
  },
  {
    id: 3,
    title: 'ИНН/КПП',
    subst: '3702198685/370201001'
  },
  {
    id: 4,
    title: 'Номер и дата свидетельства о государственной регистрации некоммерческой организации',
    subst: '№3714010191 от 07.05.2018г.'
  },
  {
    id: 5,
    title: 'ОГРН',
    subst: '1183700000241'
  },
  {
    id: 6,
    title: 'Юридический адрес',
    subst: '153051, Ивановская обл., город Иваново, микрорайон ДСК, дом 5, квартира 169'
  },
  {
    id: 7,
    title: 'Расчетный счет',
    subst: 'р/с 40703810817000000773 в Ивановское отделение №8639 ПАО СБЕРБАНК, БИК 042406608, к/с 30101810000000000608'
  },
  {
    id: 8,
    title: 'Код ОКПО',
    subst: '28428780'
  },
  {
    id: 9,
    title: 'Код ОКВЭД',
    subst: '64.99'
  },
  {
    id: 10,
    title: 'Руководитель',
    subst: 'Директор Лампасов Леонид Кириллович'
  },
  {
    id: 11,
    title: 'Телефон',
    subst: '8 (4932) 32 62 88'
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div>
      <Card.Title className="my-4 text-center">Реквизиты фонда</Card.Title>
      {contactInfo.map((item) => (
        <Row>
          <Col key={item.id} className="my-1">
            <Card.Title>{item.title}</Card.Title>{item.subst}
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ContactInfo;
