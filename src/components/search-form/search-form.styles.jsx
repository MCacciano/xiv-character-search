import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  grid-column: 2 / -1;
  justify-self: flex-start;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-items: center;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 580px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
