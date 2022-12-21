import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, LogoGithub, Title, Form, Input, Button } from './styles';

import gitHubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <LogoGithub src={gitHubLogo} alt="GitHub Logo" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="Insira um usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
