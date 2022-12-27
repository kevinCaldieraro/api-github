import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

import Repository from './Repository';

const Repositories = ({ repositories, currentLanguage }) => {
  const repos = repositories
    .filter(
      (repo) =>
        currentLanguage === undefined || repo.language === currentLanguage
    )
    .map((repo) => <Repository key={repo.id} repo={repo} />);

  return <Container>{repos}</Container>;
};

Repositories.defaultProps = {
  currentLanguage: undefined,
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
};

export default Repositories;
