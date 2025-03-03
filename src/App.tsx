import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import DirectorInfo from './components/DirectorInfo';
import DocumentInfo from './components/DocumentInfo';
import NewsList from './components/NewsList';

import Card from 'react-bootstrap/Card';

import img from './static/carousel_2.jpg'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="container my-4">
        <Card className="text-white">
          <Card.Img src={img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Мы рады приветствовать Вас на сайте Фонда социальной, правовой и финансовой поддержки ветеранов, пенсионеров, патриотических движений и культурно-исторического наследия «Серебряное поколение»</Card.Title>
            <Card.Text>Мы рассчитываем на Вашу поддержку ветеранов и ветеранского движения в Ивановской области, а также в реализации инициатив нашего Фонда и  Ивановской региональной организации Всероссийской  общественной организации ветеранов (пенсионеров) войны, труда, Вооруженных Сил и правоохранительных органов по направлениям деятельности нашего Фонда</Card.Text>
          </Card.ImgOverlay>
        </Card>

        <DirectorInfo />
        <NewsList />
        <DocumentInfo />
        <ContactInfo />
      </div>
    </div>
  );
};

export default App;
