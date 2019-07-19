import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { searchCharacter } from '../../redux/search-form/search-form.actions';

import ResultItem from '../result-item/result-item.component';

import { ResultListStyled } from './result-list.styles';

const ResultList = ({ characters, characterDetails }) => {
  const renderResults = () => {
    return (
      characters &&
      characters.map(character => (
        <ResultItem
          key={character.ID}
          character={character}
          characterDetails={characterDetails}
        />
      ))
    );
  };

  return (
    <React.Fragment>
      <ResultListStyled>{renderResults()}</ResultListStyled>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  searchCharacter: (name, server, page) =>
    dispatch(searchCharacter(name, server, page))
});

export default connect(
  null,
  mapDispatchToProps
)(ResultList);
