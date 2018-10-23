import React from 'react';
import Container from 'muicss/lib/react/container';
import Header from '../header/index';
import containerStyles from './pageContainer.module.css';

const PageContainer = (props) => {
  return (
    
    <Container className={containerStyles.wrapper}>
      <Header />
      {props.children}
    </Container>
  );
};

export default PageContainer;
