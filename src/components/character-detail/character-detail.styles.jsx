import styled from 'styled-components';

export const CharacterDetailStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  height: 93vh;
  /* width: 100%; */
  grid-template-areas:
    '. . . . . .'
    '. gear gear gear gear .'
    '. gear gear gear gear .'
    '. gear gear gear gear .'
    '. gear gear gear gear .'
    '. gear gear gear gear .'
    '. . . . . .';
`;

export const GearOverviewContainer = styled.div`
  grid-area: gear;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    '. gear-left portrait portrait gear-right .'
    '. gear-left portrait portrait gear-right .'
    '. gear-left portrait portrait gear-right .'
    '. gear-left portrait portrait gear-right .'
    '. gear-left portrait portrait gear-right .'
    '. gear-left portrait portrait gear-right .'
    '. gear-left . . gear-right .';
`;

export const CharacterName = styled.h1`
  grid-area: portrait;
  grid-row: 1 / 2;
`;

export const PortraitContainer = styled.div`
  grid-area: portrait;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 350px;
  max-width: 255px;
  background: #24292e;
  border-radius: 5px;
`;

export const PortraitStyled = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 2px;
`;

export const GearRow = styled.div`
  grid-area: ${props => (props.gearLeft ? 'gear-left' : 'gear-right')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
`;
