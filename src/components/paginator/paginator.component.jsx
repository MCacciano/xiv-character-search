import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import {
  searchCharacter,
  isLoading
} from '../../redux/search-form/search-form.actions';

import { PaginatorStyled, PageStyled } from './paginator.styles';

class Paginator extends Component {
  state = {
    paginationData: this.props.paginationData,
    activePage: 1
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
            isActive={i === Page ? true : false}
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

    // const innerPages = pagesArr.length > 1 ? pagesArr.slice(1, rightBound) : [];

    // const activePage = pagesArr.filter(page => page.props.page == Page)[0];

    // return pagesArr.length > 1 && pagesArr.slice(Page, Page + 4);
    return pagesArr;
  }

  getProps = () => ({ ...this.props });

  setActivePage = e => {
    // let activePage = parseInt(e.target.textContent);
    // this.setState({ activePage });

    const { PagePrev, PageNext } = this.props.paginationData;

    this.props.isLoading(true);

    let page =
      this.getProps().prev && PagePrev
        ? PagePrev
        : this.getProps().next && PageNext
        ? PageNext
        : 1;

    this.props.searchCharacter(this.props.characterName, '', page);
  };

  render() {
    const { Page, PageTotal } = this.props.paginationData;
    console.log(Page);
    return (
      <PaginatorStyled>
        <PageStyled onClick={this.setActivePage} page={1} endPage>
          1
        </PageStyled>
        <FA
          prev={true}
          icon={['fa', 'angle-left']}
          style={{
            fontSize: '25px',
            cursor: 'pointer',
            margin: '0 .5rem',
            color: '#3a4fad'
          }}
          onClick={this.setActivePage}
        />
        <PageStyled page={Page} isActive>
          {Page}
        </PageStyled>
        <FA
          next={true}
          icon={['fa', 'angle-right']}
          style={{
            fontSize: '25px',
            cursor: 'pointer',
            margin: '0 .5rem',
            color: '#3a4fad'
          }}
          onClick={this.setActivePage}
        />
        {PageTotal > 1 && (
          <PageStyled onClick={this.setActivePage} page={PageTotal} endPage>
            {PageTotal}
          </PageStyled>
        )}
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
