import styled from 'styled-components';

export const ResultListStyled = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: space-around;
  grid-gap: 1rem;
  margin: 0;
  max-height: 80vh;
  overflow-y: auto;

  list-style: none;
`;
