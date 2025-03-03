import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import directorImg from '../static/director.jpg'

const DirectorInfo: React.FC = () => {
  return (
    <div>
      <Card.Title className="my-4 text-center">Руководство</Card.Title>
      <Card className="my-4">
      <Row className="g-0">
        <Col xs={12} md={2}>
          <Card.Img
            src={directorImg}
            alt="Директор фонда"
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Леонид Кириллович Лампасов</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>Директор Фонда «Серебряное поколение», председатель  Ивановской региональной организации Всероссийской  общественной  организации   ветеранов (пенсионеров) войны, труда, Вооруженных Сил и правоохранительных органов, Почетный гражданин Ивановской области, полковник внутренней службы в отставке, кандидат экономических наук</Card.Text>
            <Card.Text>
              <small className="text-muted">Служебный телефон: 8(4932) 32-62-88</small>
              <Card.Text>
                <small className="text-muted">E-mail: fondsp37@mail.ru</small>
                <Card.Text>
                  <small className="text-muted">Веб-сайт: http://veterani37.ru/</small>
                </Card.Text>
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </div>
  );
};

export default DirectorInfo;
