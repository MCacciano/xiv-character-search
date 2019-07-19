import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Header from './components/header/header.component';
import SearchForm from './components/search-form/search-form.component';
import ResultList from './components/result-list/result-list.component';
import WithSpinner from './components/with-spinner/with-spinner.component';
import CharacterDetail from './components/character-detail/character-detail.component';
import Paginator from './components/paginator/paginator.component';

const ResultListWithSpinner = WithSpinner(ResultList);

class App extends React.Component {
  render() {
    console.log('state', this.state);
    console.log('props', this.props);
    return (
      <Fragment>
        <Header title="FFXIV Character Search" />
        <Switch>
          <Route
            path="/character/:id"
            render={props => (
              <CharacterDetail
                characterDetails={this.props.characterDetails}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Layout>
                <SearchForm servers={this.props.servers} />
                <ResultListWithSpinner
                  characters={this.props.characters}
                  loading={this.props.loading}
                  characterDetails={this.props.characterDetails}
                />
                {this.props.pagination ? (
                  <Paginator
                    characterName={this.props.characterName}
                    loading={this.props.loading}
                    paginationData={this.props.pagination}
                  />
                ) : (
                  <div>loading</div>
                )}
              </Layout>
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  search: { loading, servers, characters, pagination, characterName },
  characterDetails
}) => ({
  loading,
  servers,
  characters,
  pagination,
  characterName,
  characterDetails
});

export default connect(mapStateToProps)(App);
