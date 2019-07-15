import styled from 'styled-components';

export const FormInputStyled = styled.input`
  min-width: 300px;
  font-size: 1.1rem;
  height: 40px;
  border: none;
  border-bottom: 1px solid rgba(37, 68, 166, 0.4);

  &:active,
  &:focus {
    border: none;
    border-bottom: 1px solid rgba(37, 68, 166, 0.4);
    outline-color: rgba(37, 68, 166, 1);
  }

  &:hover {
    border-bottom: 1px solid rgba(37, 68, 166, 1);
  }

  &::placeholder {
    padding: 5px;
  }
`;
