import React from "react";
import Header from "../components/header/index";
import Container from "muicss/lib/react/container";
import Button from "muicss/lib/react/button";
import Row from "muicss/lib/react/row";

export default () => {
  return (
    <Container fluid={true}>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Button  variant="raised" color="accent">Donate</Button>
      </Row>
    </Container>
  );
};
