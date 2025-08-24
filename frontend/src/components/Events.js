import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Events({ events }) {
  return (
    <section id="events" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Upcoming Events</h2>
        <Row>
          {events && events.length > 0 ? (
            events.map(event => (
              <Col md={4} key={event.id} className="mb-4">
                <Card className="shadow-sm h-100">
                  {event.event_image && (
                    <Card.Img variant="top" src={event.event_image} alt={event.title} />
                  )}
                  <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <small className="text-muted">
                      {new Date(event.date).toLocaleDateString()}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No upcoming events</p>
          )}
        </Row>
      </Container>
    </section>
  );
}
