import React from 'react';

import { GearItemStyled, GearIconStyled } from './gear-item.styles';

const Gear = ({ item: { Icon, ID } }) => {
  return (
    <GearItemStyled>
      <GearIconStyled src={`https://xivapi.com${Icon}`} alt="icon" />
    </GearItemStyled>
  );
};

export default Gear;
