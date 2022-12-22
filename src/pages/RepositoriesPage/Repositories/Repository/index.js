import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './style';

const Repository = () => (
  <Container color="#f37272">
    <Name>Projeto bom</Name>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam amet iusto
      reiciendis laboriosam dolor provident!
    </Description>
    <Footer color="#f37272">
      <Lang>Java</Lang>
      <Link href="https://google.com" target="blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

export default Repository;
