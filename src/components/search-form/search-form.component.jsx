import React, { Component } from 'react';

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

class SearchForm extends Component {
  state = {
    characterName: '',
    characterServer: ''
  };

  componentDidMount() {
    // populate the server options from api
    this.props.getServerList();
  }

  onFormSubmit = e => {
    e.preventDefault();

    const { characterName, characterServer } = this.state;

    this.props.isLoading(true);
    this.props.searchCharacter(characterName, characterServer);
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.onFormSubmit}>
        <FormSelect
          name="characterServer"
          onChange={this.onInputChange}
          options={this.props.servers}
          useOptions
        />
        <SearchContainer>
          <FormInput
            type="text"
            name="characterName"
            placeholder="Character Name (ex: Cloud Strife)"
            onInputChange={this.onInputChange}
          />
          <CustomButton type="submit" isSearchButton>
            Search
          </CustomButton>
        </SearchContainer>
      </SearchFormStyled>
    );
  }
}

const mapStateToProps = ({ search: { servers } }) => ({
  servers
});

const mapDispatchToProps = dispatch => ({
  isLoading: loadingFlag => dispatch(isLoading(loadingFlag)),
  getServerList: () => dispatch(getServerList()),
  searchCharacter: (characterName, characterServer) =>
    dispatch(searchCharacter(characterName, characterServer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
