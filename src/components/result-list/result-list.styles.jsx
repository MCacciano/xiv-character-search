import styled from 'styled-components';

export const ResultListStyled = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, 20%);
  justify-content: space-around;
  grid-gap: 1rem;
  margin: 50px 10px;

  list-style: none;
`;
