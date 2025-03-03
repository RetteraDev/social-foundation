import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import img from '../static/carousel_2.jpg'


const Banner: React.FC = () => {
  return (
    <Card>
        <Card.Body>
            <Card.Title style={{textAlign:'justify'}}>Мы рады приветствовать Вас на сайте Фонда социальной, правовой и финансовой поддержки ветеранов, пенсионеров, патриотических движений и культурно-исторического наследия «Серебряное поколение»</Card.Title>
            <Card.Text style={{textAlign:'justify'}}>Мы рассчитываем на Вашу поддержку ветеранов и ветеранского движения в Ивановской области, а также в реализации инициатив нашего Фонда и Ивановской региональной организации Всероссийской общественной организации ветеранов (пенсионеров) войны, труда, Вооруженных Сил и правоохранительных органов по направлениям деятельности нашего Фонда</Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={img} />
    </Card>
    
  );
};

export default Banner;
