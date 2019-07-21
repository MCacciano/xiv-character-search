import styled, { css } from 'styled-components';

const searchButtonStyles = css`
  background: #2544a6;
  color: #ffffff;
`;

const baseButtonStyles = css`
  color: #ffffff;
  background: #24292e;
`;

const getButtonStyles = props => {
  if (props.isSearchButton) {
    return searchButtonStyles;
  }

  return baseButtonStyles;
};

export const CustomButtonStyled = styled.button`
  min-width: 100px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  ${getButtonStyles}

  @media screen and (max-width: 580px) {
    margin-top: 0.5rem;
    margin-left: 0;
  }
`;
