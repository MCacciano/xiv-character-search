import styled from 'styled-components';

export const ResultItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid #2544a6;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  text-align: center;
  max-height: 80px;

  &:hover {
    box-shadow: 2px 2px 5px #2544a6;
  }
`;

export const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  width: 100%;
`;

export const ResultItemLink = styled.h3`
  text-decoration: none;
  color: #2544a6;
  font-weight: bolder;
`;
