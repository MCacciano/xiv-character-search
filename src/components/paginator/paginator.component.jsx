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
    isActive: false
  };

  componentDidMount() {
    this.props.paginationData && this.buildPagination();
  }

  componentWillUnmount() {}

  buildPagination() {
    const {
      Page,
      PageNext,
      PagePrev,
      PageTotal,
      Results,
      ResultsPerPage,
      ResultsTotal
    } = this.props.paginationData;

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

    const innerPages = pagesArr.length > 1 ? pagesArr.slice(1, rightBound) : [];

    const activePage = pagesArr.filter(page => page.props.page == Page)[0];

    // pagesArr.forEach((page, i) => {
    //   if (page.props.page === Page) {
    //     pagesArr.splice(
    //       i,
    //       1,
    //       <PageStyled key={i} page={i} onClick={this.setActivePage} isActive />
    //     );
    //   }
    // });

    return innerPages;
  }

  setActivePage = e => {
    console.log(e.target.props);
    this.props.isLoading(true);
    this.props.searchCharacter(
      this.props.characterName,
      '',
      e.target.textContent
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
        {this.props.paginationData.PageTotal > 1 ? (
          <PageStyled
            onClick={this.setActivePage}
            isActive={this.state.isActive}
            page={this.props.paginationData.PageTotal}
            endPage
          >
            {this.props.paginationData.PageTotal}
          </PageStyled>
        ) : null}
      </PaginatorStyled>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchCharacter: (name, server, page) =>
    dispatch(searchCharacter(name, server, page)),
  isLoading: loading => dispatch(isLoading(loading))
});

export default connect(
  null,
  mapDispatchToProps
)(Paginator);
