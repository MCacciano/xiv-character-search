import styled, { css } from 'styled-components';

const EndPageCss = css`
  border: thin solid #3a4fad;
  padding: 4px 10px;
  margin: 0 5px;
  transform: scale(0.8);
`;

const ActiveEndPage = css`
  ${EndPageCss}
  color: #ffffff;
  background: #3a4fad;
`;

const InnerPageCss = css`
  border: thin solid #000000;
  padding: 4px 8px;
`;

const ActivePageCss = css`
  color: #ffffff;
  background: #3a4fad;
  transform: scale(1);
  padding: 6px 11px;
`;

const getPageStyles = ({ endPage, isActive }) => {
  if (endPage && isActive) {
    return ActiveEndPage;
  } else if (endPage) {
    return EndPageCss;
  } else if (isActive) {
    return ActivePageCss;
  }
  return InnerPageCss;
};

export const PaginatorStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 10px 0;
`;

export const PageStyled = styled.li`
  cursor: pointer;
  border-radius: 3px;
  margin: 5px;
  ${getPageStyles}

  &:hover {
    transform: scale(10px);
  }
`;
