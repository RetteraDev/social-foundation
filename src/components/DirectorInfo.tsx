import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import directorImg from '../static/director.jpg'

import vk from '../static/icons/vk.svg'
import ok from '../static/icons/ok.svg'
import rutube from '../static/icons/rutube.svg'
import youtube from '../static/icons/youtube.svg'


const iconLinks = [
  {
    id: 1,
    icon: vk,
    url: 'https://vk.com/club78695093'
  }, {
    id: 2,
    icon: ok,
    url: 'https://ok.ru/kulturnydo'
  }, {
    id: 3,
    icon: rutube,
    url: 'https://rutube.ru/plst/131156/'
  }, {
    id: 4,
    icon: youtube,
    url: 'https://www.youtube.com/playlist?list=PL1pUz22rXW1gJze2hN_-9-s4foDQG9kdL'
  }
]

const DirectorInfo: React.FC = () => {
  return (
    <div>
      <Card.Title className="my-4 text-center">Руководство</Card.Title>
      <div className="my-4">
      <Row>
        <Col xs={12} md={2}>
          <Card.Img
            src={directorImg}
            alt="Директор фонда"
          />
        </Col>
        <Col className="">
          <Card.Body>
            <Card.Title>Леонид Кириллович Лампасов</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>Директор Фонда «Серебряное поколение», председатель  Ивановской региональной организации Всероссийской  общественной  организации   ветеранов (пенсионеров) войны, труда, Вооруженных Сил и правоохранительных органов, Почетный гражданин Ивановской области, полковник внутренней службы в отставке, кандидат экономических наук</Card.Text>
            <Card.Text>
              <small className="text-muted">Служебный телефон: 8(4932) 32-62-88</small><br/>
              <small className="text-muted">E-mail: fondsp37@mail.ru</small><br/>
              <small className="text-muted">Веб-сайт: http://veterani37.ru/</small><br/>
              <small className="text-muted">Социальные сети:</small>
              <Row xs="auto" className="mt-2">
                {iconLinks.map((item) => (
                  <Col xs="auto">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Card.Img src={item.icon} style={{ height: '30px', width: '30px' }}></Card.Img>
                    </a>
                  </Col>
                ))}
              </Row>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </div>
    <br/>
    </div>
  );
};

export default DirectorInfo;
