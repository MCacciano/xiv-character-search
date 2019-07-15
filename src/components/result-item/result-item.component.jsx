import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
  ResultItemStyled,
  ResultTextContainer,
  ResultItemLink,
} from './result-item.styles';

const ResultItem = ({ character }) => {
  const { Avatar, ID, Name, Server } = character;

  return (
    <ResultItemStyled>
      <Link
        to={{ path: '/', state: { characterID: ID } }}
        style={{ display: 'inline-flex' }}
      >
        <img src={Avatar} alt="Avatar" />
      </Link>
      <ResultTextContainer>
        <ResultItemLink to="/">{Name}</ResultItemLink>
        <p style={{ marginTop: '20px' }}>{Server}</p>
      </ResultTextContainer>
    </ResultItemStyled>
  );
};

export default withRouter(ResultItem);
