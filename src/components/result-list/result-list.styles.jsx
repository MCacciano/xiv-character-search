import styled from 'styled-components';

export const ResultListStyled = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, 225px);
  justify-content: space-around;
  grid-gap: 5px;
  margin: 0 50px;
  height: 100%;
  overflow-y: auto;
  list-style: none;

  @media screen and (max-width: 910px) {
    height: 95%;
  }

  @media screen and (max-width: 600px) {
    height: 80%;
  }
`;
