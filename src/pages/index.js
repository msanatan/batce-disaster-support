import React from 'react';
import Header from '../components/header/index';
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import PageContainer from '../components/pageContainer';
import containerStyles from '../components/pageContainer/pageContainer.module.css';

export default () => {
  return (
    <PageContainer>
      <Header/>
      <Container className={containerStyles.wrapper + ' mui--text-center'}>
        <Container className='mui--appbar-height' />
        <Container>
          <br />
          <br />
          <Container className={'mui--text-display3'}>
            Brand.io
          </Container>
          <br/>
          <br/>
          <Button  variant='raised' color='accent'>Donate</Button>
        </Container>
      </Container>
    </PageContainer>
  );
};
