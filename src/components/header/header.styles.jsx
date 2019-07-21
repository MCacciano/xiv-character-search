import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 7vh;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-bottom: 1px solid #2544a6;
  /* background-color: #2544a6; */
`;

export const BrandStyled = styled(Link)`
  grid-column: 1 / 2;
  font-weight: bolder;
  font-size: 1.5rem;
  justify-self: center;
  color: #2544a6;
  text-decoration: none;
`;
