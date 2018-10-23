import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'muicss/lib/react/divider';
import containerStyles from './statCards.module.css';

const StatCards = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
            <Row>
              <div className={containerStyles.label}>
                <p className={containerStyles.victimCount}>20</p>
              </div>
            </Row>
            <Divider />
          </div>
        </Col>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
              <Row>
                <div className={containerStyles.label}>
                  <p className={containerStyles.victimCount}>6</p>
                </div>
              </Row>
              <Divider />
            </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
              <Row>
                <div className={containerStyles.label}>
                  <p className={containerStyles.victimCount}>3</p>
                </div>
              </Row>
              <Divider />
            </div>
        </Col>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
              <Row>
                <div className={containerStyles.label}>
                  <p className={containerStyles.victimCount}>6</p>
                </div>
              </Row>
              <Divider />
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StatCards;
