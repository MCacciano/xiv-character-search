import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Header from './components/header/header.component';
import ResultList from './components/result-list/result-list.component';
import WithSpinner from './components/with-spinner/with-spinner.component';
import CharacterDetail from './components/character-detail/character-detail.component';
import Paginator from './components/paginator/paginator.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight, faAngleLeft);

const ResultListWithSpinner = WithSpinner(ResultList);

const App = ({
  characterDetails,
  characters,
  characterName,
  pagination,
  loading
}) => {
  return (
    <Fragment>
      <Header title="FFXIV Character Search" />
      <Switch>
        <Route
          path="/character/:id"
          render={props => (
            <CharacterDetail characterDetails={characterDetails} {...props} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Layout>
              <ResultListWithSpinner
                characters={characters}
                loading={loading}
                characterDetails={characterDetails}
              />
              {pagination ? (
                <Paginator
                  characterName={characterName}
                  loading={loading}
                  paginationData={pagination}
                />
              ) : null}
            </Layout>
          )}
        />
      </Switch>
    </Fragment>
  );
};

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
