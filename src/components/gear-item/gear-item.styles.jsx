import styled from 'styled-components';

export const GearItemStyled = styled.div`
  grid-area: ${props => (props.gearLeft ? 'gear-left' : 'gear-right')};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background: #24292e;
  border-radius: 5px;
`;

export const GearIconStyled = styled.img``;
