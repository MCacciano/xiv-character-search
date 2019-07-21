import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  display: flex;
  margin: 15px;
  flex-grow: 1;

  @media screen and (max-width: 910px) {
    flex-grow: 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
