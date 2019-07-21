import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

import {
  searchCharacter,
  isLoading
} from '../../redux/search-form/search-form.actions';

import { PaginatorStyled, PageStyled } from './paginator.styles';

const Paginator = props => {
  useEffect(() => {
    props.paginationData && buildPagination();
  });

  const buildPagination = () => {
    const { Page, PageTotal } = props.paginationData;

    let pagesArr = [];

    if (PageTotal > 1) {
      for (let i = 1; i < PageTotal + 1; i++) {
        pagesArr.push(
          <PageStyled key={i} page={i} isActive={i === Page ? true : false}>
            {i}
          </PageStyled>
        );
      }
    } else {
      pagesArr.push(
        <PageStyled key={1} page={1} isActive>
          1
        </PageStyled>
      );
    }
    return pagesArr;
  };

  const getPage = page => {
    props.isLoading(true);
    props.searchCharacter(props.characterName, '', page);
  };

  const render = () => {
    const { Page, PageTotal, PagePrev, PageNext } = props.paginationData;
    return (
      <PaginatorStyled>
        <PageStyled onClick={() => getPage(1)} page={1} endPage>
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
          onClick={PagePrev ? () => getPage(PagePrev) : null}
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
          onClick={PageNext ? () => getPage(PageNext) : null}
        />
        {PageTotal > 1 && (
          <PageStyled
            onClick={() => getPage(PageTotal)}
            page={PageTotal}
            endPage
          >
            {PageTotal}
          </PageStyled>
        )}
      </PaginatorStyled>
    );
  };

  return render();
};

const mapDispatchToProps = dispatch => ({
  searchCharacter: (name, server, page) =>
    dispatch(searchCharacter(name, server, page)),
  isLoading: loading => dispatch(isLoading(loading))
});

export default connect(
  null,
  mapDispatchToProps
)(Paginator);
