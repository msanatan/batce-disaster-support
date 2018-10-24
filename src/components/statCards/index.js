import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import StatCard from '../statCard/index';
import containerStyles from './statCards.module.css';

const StatCards = () => {
  return (
    <Container className={containerStyles.cardContainer} fluid={true}>
      <Row>
        <StatCard
          count={20}
          duration={1}
          description={'BAHSE students are victims of severe flooding'}
          />
        <StatCard
          count={6}
          duration={1}
          description={'TCE students are victims of severe flooding'}
          />
      </Row>
      <Row>
        <StatCard
          count={3}
          duration={1}
          description={'BATCE 6th Form students are victims of severe flooding'}
          />
        <StatCard
          count={6}
          duration={1}
          description={'Teachers and staff are victims of severe flooding'}
          />
      </Row>
    </Container>
  );
};

export default StatCards;
