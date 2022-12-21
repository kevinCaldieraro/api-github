import React from 'react';

import { Container, Header, Avatar, Login, Name } from './style';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/73244947?v=4" />
      <Login>kevincaldieraro</Login>
      <Name>Kevin Caldieraro</Name>
    </Header>
  </Container>
);

export default Profile;
