import React from 'react';
import Container from 'muicss/lib/react/container';
import containerStyles from './pageContainer.module.css';

const PageContainer = (props) => {
  return (
    <Container className={containerStyles.wrapper}>{props.children}</Container>
  );
};

export default PageContainer;
