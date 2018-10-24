import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'muicss/lib/react/divider';
import CountUp from 'react-countup';
import containerStyles from './statCards.module.css';

const StatCards = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
            <Row>
              <div className={containerStyles.label}>
                <CountUp
                  className={containerStyles.victimCount}
                  end={20}
                  delay={0}
                  duration={1}
                  useEasing={false}
                  />
              </div>
            </Row>
            <Divider />
            <Row>
              <div className='mui--text-dark-secondary mui--text-subhead'>
                <p>Victims of severe flooding are BAHSE students</p>
              </div>
            </Row>
          </div>
        </Col>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
              <Row>
                <div className={containerStyles.label}>
                <CountUp
                  className={containerStyles.victimCount}
                  end={6}
                  delay={0}
                  duration={1}
                  useEasing={false}
                  />
                </div>
              </Row>
              <Divider />
              <Row>
              <div className='mui--text-dark-secondary mui--text-subhead'>
                <p>Victims of severe flooding are TCE students</p>
              </div>
            </Row>
            </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
              <Row>
                <div className={containerStyles.label}>
                <CountUp
                  className={containerStyles.victimCount}
                  end={3}
                  delay={0}
                  duration={1}
                  useEasing={false}
                  />
                </div>
              </Row>
              <Divider />
              <Row>
              <div className='mui--text-dark-secondary mui--text-subhead'>
                <p>Victims of severe flooding are BATCE 6th Form students</p>
              </div>
            </Row>
            </div>
        </Col>
        <Col md="6">
          <div className={containerStyles.card + ' mui--z1'}>
              <Row>
                <div className={containerStyles.label}>
                <CountUp
                  className={containerStyles.victimCount}
                  end={6}
                  delay={0}
                  duration={1}
                  useEasing={false}
                  />
                </div>
              </Row>
              <Divider />
              <Row>
              <div className='mui--text-dark-secondary mui--text-subhead'>
                <p>Victims of severe flooding are staff</p>
              </div>
            </Row>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StatCards;
