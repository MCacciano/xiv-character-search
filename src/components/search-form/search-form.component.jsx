import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  searchCharacter,
  getServerList,
  isLoading
} from '../../redux/search-form/search-form.actions';

import SearchContainer from '../search-container/search-container.component';
import FormInput from '../form-input/form-input.component';
import FormSelect from '../form-select/form-select.component';
import CustomButton from '../custom-button/custom-button.component';

import { SearchFormStyled } from './search-form.styles';

const SearchForm = ({
  getServerList,
  history,
  isLoading,
  searchCharacter,
  servers
}) => {
  const [formState, setFormState] = useState({
    characterName: '',
    characterServer: ''
  });

  useEffect(() => {
    getServerList();
  }, [getServerList]);

  const onFormSubmit = e => {
    e.preventDefault();
    history.push('/');

    const { characterName, characterServer } = formState;

    isLoading(true);
    searchCharacter(characterName, characterServer);
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    setFormState({ [name]: value });
  };

  return (
    <SearchFormStyled onSubmit={onFormSubmit}>
      <FormSelect
        name="characterServer"
        onChange={onInputChange}
        options={servers}
        useOptions
      />
      <SearchContainer>
        <FormInput
          type="text"
          name="characterName"
          placeholder="Character Name (ex: Cloud)"
          onInputChange={onInputChange}
        />
        <CustomButton type="submit" isSearchButton>
          Search
        </CustomButton>
      </SearchContainer>
    </SearchFormStyled>
  );
};

const mapStateToProps = ({ search: { servers } }) => ({
  servers
});

const mapDispatchToProps = dispatch => ({
  isLoading: loadingFlag => dispatch(isLoading(loadingFlag)),
  getServerList: () => dispatch(getServerList()),
  searchCharacter: (characterName, characterServer) =>
    dispatch(searchCharacter(characterName, characterServer))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchForm)
);
