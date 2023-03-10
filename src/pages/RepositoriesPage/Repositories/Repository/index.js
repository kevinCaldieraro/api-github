import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link } from './style';

import { langColors } from '../../../../services/config';

const Repository = ({ repo }) => {
  const color = repo.language && langColors[repo.language.toLowerCase()];

  return (
    <Container color={color}>
      <Name>{repo.name}</Name>
      <Description>{repo.description}</Description>
      <Footer color={color}>
        <Lang>{repo.language || 'Diversas linguagens'}</Lang>
        <Link href={repo.html_url} target="blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
};

Repository.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
