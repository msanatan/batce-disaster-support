import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'muicss/lib/react/divider';
import CountUp from 'react-countup';
import containerStyles from './statCard.module.css';

const StatCard = (props) => {
  return (
    <Col md="3">
      <div className={containerStyles.card + ' mui--z1'}>
        <Row>
          <div className={containerStyles.label}>
            <CountUp
              className={containerStyles.victimCount}
              end={props.count}
              delay={0}
              duration={props.duration}
              useEasing={false}
              />
          </div>
        </Row>
        <Divider />
        <Row>
          <div className='mui--text-dark-secondary mui--text-subhead'>
            <h5>{props.description}</h5>
          </div>
        </Row>
      </div>
    </Col>
  );
};

export default StatCard;
