import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  searchCharacter,
  isLoading
} from '../../redux/search-form/search-form.actions';

import { PaginatorStyled, PageStyled } from './paginator.styles';

class Paginator extends Component {
  state = {
    paginationData: this.props.paginationData,
    activePage: 1,
    isActive: false
  };

  componentDidMount() {
    this.buildPagination();
  }

  buildPagination() {
    const {
      Page,
      PageNext,
      PagePrev,
      PageTotal,
      Results,
      ResultsPerPage,
      ResultsTotal
    } = this.state.paginationData;

    let pagesArr = [];

    if (PageTotal > 1) {
      for (let i = 1; i < PageTotal + 1; i++) {
        pagesArr.push(
          <PageStyled
            key={i}
            page={i}
            onClick={this.setActivePage}
            isActive={this.state.isActive}
          >
            {i}
          </PageStyled>
        );
      }
    } else {
      pagesArr.push(
        <PageStyled key={1} page={1} onClick={this.setActivePage} isActive>
          1
        </PageStyled>
      );
    }

    const rightBound =
      PageTotal >= 6 ? PageTotal - (PageTotal - 5) : PageTotal - 1;

    const innerPages =
      pagesArr.length > 1
        ? pagesArr.slice(this.state.activePage, rightBound)
        : [];

    return innerPages.map(page => page);
  }

  setActivePage = e => {
    console.log(e.target);
    this.setState({ activePage: parseInt(e.target.textContent) });
    this.props.isLoading(true);
    this.props.searchCharacter(
      this.props.characterName,
      '',
      parseInt(e.target.textContent)
    );
  };

  render() {
    console.log(this.state);
    return (
      <PaginatorStyled>
        <PageStyled
          onClick={this.setActivePage}
          isActive={this.state.isActive}
          page={1}
          endPage
        >
          1
        </PageStyled>
        {this.buildPagination()}
        {this.state.paginationData.PageTotal > 1 ? (
          <PageStyled
            onClick={this.setActivePage}
            isActive={this.state.isActive}
            page={this.state.paginationData.PageTotal}
            endPage
          >
            {this.state.paginationData.PageTotal}
          </PageStyled>
        ) : null}
      </PaginatorStyled>
    );
  }
}
const mapStateToProps = ({ search: { characterName, loading } }) => ({
  characterName,
  loading
});
const mapDispatchToProps = dispatch => ({
  searchCharacter: (name, server, page) =>
    dispatch(searchCharacter(name, server, page)),
  isLoading: loading => dispatch(isLoading(loading))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);
