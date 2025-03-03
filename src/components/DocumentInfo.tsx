import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import foundationChapter from '../docs/foundationChapter.pdf';
import ogrn from '../docs/ogrn.jpg';
import minUst from '../docs/minUst.pdf';

const documentInfo = [
  {
    id: 1,
    title: 'Устав фонда',
    file: foundationChapter,
  },
  {
    id: 2,
    title: 'Свидетельство ОГРН',
    file: ogrn,
  },
  {
    id: 3,
    title: 'Уведомление Минюста РФ о признании Фонда «Серебряное поколение» СОНКО исполнителем общественно полезных услуг',
    file: minUst,
  },
];

const DocumentInfo: React.FC = () => {
  return (
    <Row className="justify-content-center">
      <Card.Title className="my-4 text-center">Документы фонда</Card.Title>
      {documentInfo.map((item) => (
        <Col key={item.id} md={6} lg={4} className="mb-4">
          <a
            href={item.file}
            download={item.title}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none w-100"
          >
            <Button variant="outline-primary" className="w-100 d-flex align-items-center justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-download me-2 flex-shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
              <span>{item.title}</span>
            </Button>
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default DocumentInfo;
