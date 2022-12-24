import React from 'react';

import { Container, Sidebar, Main } from './style';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const user = {
    login: 'kevinCaldieraro',
    name: 'Kevin Caldieraro',
    avatar_url: 'https://avatars.githubusercontent.com/u/73244947?v=4',
    followers: 19,
    following: 13,
    company: null,
    blog: 'https://www.linkedin.com/in/kevin-caldieraro-667393240/',
    location: 'RS/Brasil',
  };

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://google.com',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://google.com',
      language: 'JavaScript',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://google.com',
      language: 'PHP',
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://google.com',
      language: 'PHP',
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://google.com',
      language: 'Ruby',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://google.com',
      language: null,
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};
export default RepositoriesPage;
