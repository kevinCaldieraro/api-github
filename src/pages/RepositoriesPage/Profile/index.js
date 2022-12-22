import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './style';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/73244947?v=4" />
      <Login>kevincaldieraro</Login>
      <Name>Kevin Caldieraro</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        20&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;13&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdLocationCity size={20} /> Empresa aqui
      </Data>
      <Data>
        <MdWork size={20} /> Localização aqui
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://google.com" target="blank">
          Google
        </a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
