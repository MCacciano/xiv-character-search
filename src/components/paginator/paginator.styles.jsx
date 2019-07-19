import styled, { css } from 'styled-components';

const EndPageCss = css`
  border: thin solid #3a4fad;
  padding: 10px 15px;
`;

const ActiveEndPage = css`
  ${EndPageCss}
  color: #ffffff;
  background: #3a4fad;
`;

const InnerPageCss = css`
  border: thin solid #000000;
  padding: 5px 15px;
`;

const ActivePageCss = css`
  color: #ffffff;
  background: #3a4fad;
  transform: scale(1);
  padding: 10px 15px;
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
  width: 90%;
  height: 10vh;
  margin: 0;
  position: absolute;
  bottom: 0;
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
