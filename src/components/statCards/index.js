import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const StatCards = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md="4">Card</Col>
        <Col md="4">Card</Col>
        <Col md="4">Card</Col>
      </Row>
    </Container>
  );
};

export default StatCards;
