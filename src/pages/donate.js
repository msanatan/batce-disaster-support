import React from 'react';
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';
import PageContainer from '../components/pageContainer';
import containerStyles from '../components/pageContainer/pageContainer.module.css';

export default () => {
  return (
    <PageContainer>
      <Container className={containerStyles.wrapper + ' mui--text-center'}>
        <Container className='mui--appbar-height' />
        <Container>
          <br />
          <br />
          <Container className={'mui--text-display3'}>
            Donate
          </Container>
          <br/>
          <br/>
          <Button  variant='raised' color='accent'>Donate</Button>
        </Container>
      </Container>
    </PageContainer>
  );
};
