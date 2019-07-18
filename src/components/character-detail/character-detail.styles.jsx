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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
   '. . portrait portrait . .'
   '. . portrait portrait . .'
   '. . portrait portrait . .'
   '. . portrait portrait . .'
   '. . portrait portrait . .'
   '. . . . . .';
   `;

export const PortraitStyled = styled.img`
  grid-area: portrait;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;