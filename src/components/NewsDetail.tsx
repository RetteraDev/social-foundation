import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface NewsDetailProps {
  news: {
    id: number;
    title: string; // Название проекта
    startDate: string; // Дата начала проекта
    endDate: string; // Дата окончания проекта
    supportAmount: string; // Сумма поддержки
    results: string; // Основные результаты проекта
  };
  onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news, onBack }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
          <strong>Дата начала проекта:</strong> {news.startDate}<br />
          <strong>Дата окончания:</strong> {news.endDate}<br />
          <strong>Сумма полученной поддержки на реализацию проекта:</strong> {news.supportAmount}
        </Card.Text>
        <Card.Text>
          <strong>Основные результаты проекта:</strong><br />
          {news.results}
        </Card.Text>
        <button onClick={onBack}>Вернуться</button>
      </Card.Body>
    </Card>
  );
};

export default NewsDetail;