import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Pastor({ pastor }) {
  if (!pastor) return null;

  return (
    <section id="pastor" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Pastor</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm">
              {pastor.image && (
                <Card.Img variant="top" src={pastor.image} alt={pastor.name} />
              )}
              <Card.Body>
                <Card.Title>{pastor.name}</Card.Title>
                <Card.Text>{pastor.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
