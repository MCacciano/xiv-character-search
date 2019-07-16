import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/layout.component';
import Header from './components/header/header.component';
import SearchForm from './components/search-form/search-form.component';
import ResultList from './components/result-list/result-list.component';
import WithSpinner from './components/with-spinner/with-spinner.component';
import CharacterDetail from './components/character-detail/character-detail.component';

const ResultListWithSpinner = WithSpinner(ResultList);

const App = ({ loading }) => (
  <Fragment>
    <Header title="FFXIV Character Search" />
    <Switch>
      <Route path="/character/:name" component={CharacterDetail} />
      <Route
        exact
        path="/"
        render={() => (
          <Layout>
            <SearchForm />
            <ResultListWithSpinner loading={loading} />
          </Layout>
        )}
      />
    </Switch>
  </Fragment>
);

const mapStateToProps = ({ search: { loading } }) => ({
  loading,
});

export default connect(mapStateToProps)(App);
