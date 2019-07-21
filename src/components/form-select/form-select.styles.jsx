import styled from 'styled-components';

export const FormSelectStyled = styled.select`
  height: 40px;
  line-height: 40px;
  min-width: 100px;
  font-size: 1rem;
  color: #777777;

  cursor: pointer;

  &:focus {
    border: none;
    border-bottom: 1px solid rgba(37, 68, 166, 0.4);
    outline: none;
  }

  &:hover {
    border: 1px solid rgba(37, 68, 166, 1);
  }

  option {
    color: inherit;
    padding: 2px;

    &:hover {
      background-color: #2544a6;
    }

    &:nth-of-type(1) {
      color: #000000;
      font-weight: bolder;
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 0.5rem;
  }
`;
