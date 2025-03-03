import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import NewsDetail from './NewsDetail';

import news from './News'


const NewsList: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);
  
  const handleNewsClick = (id: number) => {
    setSelectedNews(id);
  };

  return (
    <div>
      <Card.Title className="my-4 text-center">Наши проекты</Card.Title>
      {selectedNews === null ? (
        <Row className="g-4">
          {news.map((item) => (
            <Col key={item.id}>
              <Card onClick={() => handleNewsClick(item.id)} style={{ cursor: 'pointer' }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <small className="text-muted">{item.startDate}-{item.endDate}</small>
                  </Card.Text>
                  {/* <Card.Text>{item.supportAmount}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <NewsDetail
          news={news.find((item) => item.id === selectedNews)!}
          onBack={() => setSelectedNews(null)}
        />
      )}
    </div>
  );
};

export default NewsList;