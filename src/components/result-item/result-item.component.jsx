import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  ResultItemStyled,
  ResultTextContainer,
  ResultItemLink
} from './result-item.styles';

const ResultItem = ({ character, history }) => {
  const { Avatar, ID, Name, Server } = character;
  const pushCharacterID = async () => {
    history.push({
      pathname: `/character/${ID}`,
      state: { ID }
    });
  };

  return (
    <ResultItemStyled onClick={pushCharacterID}>
      <img style={{ maxHeight: '80px' }} src={Avatar} alt="Avatar" />
      <ResultTextContainer>
        <ResultItemLink to="/">{Name}</ResultItemLink>
        <p>{Server}</p>
      </ResultTextContainer>
    </ResultItemStyled>
  );
};

export default withRouter(ResultItem);
