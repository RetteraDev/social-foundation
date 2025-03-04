import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';

interface NewsDetailProps {
  news: {
    id: number;
    title: string; // Название проекта
    startDate: string; // Дата начала проекта
    endDate: string; // Дата окончания проекта
    supportAmount: string; // Сумма поддержки
    results: string; // Основные результаты проекта
    urls: Array<string>
  };
  onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news, onBack }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Button onClick={onBack} variant="outline-primary" className="h-100 d-flex align-items-center justify-content-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-download me-2 flex-shrink-0"
            viewBox="0 0 16 16"
          >
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
          <span>Вернуться</span>
        </Button>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
          <strong>Дата начала проекта:</strong> {news.startDate}<br />
          <strong>Дата окончания:</strong> {news.endDate}<br />
          <strong>Сумма полученной поддержки на реализацию проекта:</strong> {news.supportAmount}
        </Card.Text>
        <Card.Text style={{textAlign:'justify'}}>
          <strong>Основные результаты проекта:</strong><br />
          {news.results}
        </Card.Text>
        <Card.Text style={{textAlign:'justify'}}>
          Ссылки на публикации о семинарах:
        </Card.Text>
        <Row>
          {news.urls.map((url) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NewsDetail;