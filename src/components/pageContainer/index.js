import React from 'react';
import Container from 'muicss/lib/react/container';
import Header from '../header/index';
import './mui.css';
import containerStyles from './pageContainer.module.css';

const PageContainer = (props) => {
  return (
    
    <Container className={containerStyles.wrapper}>
      <Header />
      <Container className={containerStyles.wrapper + ' mui--text-center'}>
        <Container className='mui--appbar-height' />
        <Container>
          <br />
          <br />
          <Container className={'mui--text-display3'}>
            {props.children}
          </Container>
          <br/>
          <br/>
        </Container>
      </Container>
    </Container>
  );
};

export default PageContainer;
