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

    return pagesArr;
  }

  getPage = page => {
    this.props.isLoading(true);

    this.props.searchCharacter(this.props.characterName, '', page);
  };

  render() {
    const { Page, PageTotal, PagePrev, PageNext } = this.props.paginationData;
    console.log(Page);
    return (
      <PaginatorStyled>
        <PageStyled onClick={() => this.getPage(1)} page={1} endPage>
          1
        </PageStyled>
        <FA
          icon={['fa', 'angle-left']}
          style={{
            fontSize: '25px',
            cursor: 'pointer',
            margin: '0 .5rem',
            color: '#3a4fad'
          }}
          onClick={PagePrev ? () => this.getPage(PagePrev) : null}
        />
        {PagePrev ? <PageStyled page={PagePrev}>{PagePrev}</PageStyled> : null}
        <PageStyled page={Page} isActive>
          {Page}
        </PageStyled>
        {PageNext ? <PageStyled page={PageNext}>{PageNext}</PageStyled> : null}
        <FA
          icon={['fa', 'angle-right']}
          style={{
            fontSize: '25px',
            cursor: 'pointer',
            margin: '0 .5rem',
            color: '#3a4fad'
          }}
          onClick={PageNext ? () => this.getPage(PageNext) : null}
        />
        {PageTotal > 1 && (
          <PageStyled
            onClick={() => this.getPage(PageTotal)}
            page={PageTotal}
            endPage
          >
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
