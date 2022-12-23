import React from 'react';

import { Container, Sidebar, Main } from './style';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

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
      language: 'Ruby',
    },
  ];

  const languages = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'Shell', count: 3, color: '#95a5a6' },
    { name: 'PHP', count: 1, color: '#3498db' },
    { name: 'Ruby', count: 4, color: '#e74c3c' },
  ];

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
