import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { searchCharacter } from '../../redux/search-form/search-form.actions';

import ResultItem from '../result-item/result-item.component';
import Paginator from '../paginator/paginator.component';

import { ResultListStyled } from './result-list.styles';

const ResultList = ({ searchCharacter, characters, pagination }) => {
  const renderResults = () => {
    return (
      characters &&
      characters.map((character, i) => (
        <ResultItem key={character.ID} character={character} />
      ))
    );
  };

  return (
    <React.Fragment>
      <ResultListStyled>{renderResults()}</ResultListStyled>
      {characters && <Paginator paginationData={pagination} />}
    </React.Fragment>
  );
};

const mapStateToProps = ({ search: { characters, pagination } }) => ({
  characters,
  pagination
});

const mapDispatchToProps = dispatch => ({
  searchCharacter: (name, server, page) =>
    dispatch(searchCharacter(name, server, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultList);
