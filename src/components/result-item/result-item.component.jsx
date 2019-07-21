import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCharacterDetails } from '../../redux/character-detail/character-detail.actions';

import {
  ResultItemStyled,
  ResultTextContainer,
  ResultItemLink
} from './result-item.styles';

const ResultItem = ({
  character,
  getCharacterDetails,
  characterDetails,
  history
}) => {
  const { Avatar, ID, Name, Server } = character;
  const pushCharacterID = async () => {
    // await getCharacterDetails(ID);

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

const mapDispatchToProps = dispatch => ({
  getCharacterDetails: id => dispatch(getCharacterDetails(id))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ResultItem)
);
