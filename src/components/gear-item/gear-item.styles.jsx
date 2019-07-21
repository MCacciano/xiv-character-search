import styled, { css } from 'styled-components';

const GearLeftCss = css`
  grid-area: gear-left;
`;

const GearRightCss = css`
  grid-area: gear-right;
`;

const GearCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background: #24292e;
  border-radius: 5px;
`;

const getGearStyles = ({ gearLeft, gearRight }) => {
  if (gearLeft) {
    return GearLeftCss;
  } else if (gearRight) {
    return GearRightCss;
  }
  return GearCss;
};

export const GearItemStyled = styled.div`
  ${getGearStyles}
`;

export const GearIconStyled = styled.img``;
