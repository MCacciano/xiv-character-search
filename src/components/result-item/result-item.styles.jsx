import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultItemStyled = styled.li`
  display: grid;
  grid-template-columns: max-content 1fr;
  border: 1px solid #2544a6;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  text-align: center;

  &:hover {
    box-shadow: 2px 2px 5px #2544a6;
  }
`;

export const ResultTextContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultItemLink = styled.h3`
  text-decoration: none;
  color: #2544a6;
  font-weight: bolder;
`;
