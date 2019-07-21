import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Gear from '../gear-item/gear-item.component';

import {
  CharacterDetailStyled,
  PortraitContainer,
  PortraitStyled,
  GearOverviewContainer,
  GearRow,
  CharacterName
} from './character-detail.styles';
import { getCharacterDetails } from '../../redux/character-detail/character-detail.actions';

const CharacterDetail = ({
  getCharacterDetails,
  characterDetails,
  location: { state }
}) => {
  const { ID } = state;

  useEffect(() => {
    (async () => {
      await getCharacterDetails(ID);
    })();
  }, [ID, getCharacterDetails]);

  const renderGear = column => {
    const { GearSet } = characterDetails.Character;
    const gearArr = [];

    if (column === 'left') {
      Object.keys(GearSet.Gear).forEach((gear, i) => {
        if (i <= 6) {
          gearArr.push(
            <Gear
              key={GearSet.Gear[gear].Item.ID}
              item={GearSet.Gear[gear].Item}
              gearLeft
            />
          );
        }
      });
    }

    if (column === 'right') {
      Object.keys(GearSet.Gear).forEach((gear, i) => {
        if (i > 6) {
          gearArr.push(
            <Gear
              key={GearSet.Gear[gear].Item.ID}
              item={GearSet.Gear[gear].Item}
              gearLeft
            />
          );
        }
      });
    }

    return gearArr;
  };

  if (characterDetails.Character) {
    const { Portrait, Name } = characterDetails.Character;

    return (
      <CharacterDetailStyled>
        <GearOverviewContainer>
          <CharacterName>{Name}</CharacterName>
          <GearRow className="gear-left" style={{ gridArea: 'gear-left' }}>
            {renderGear('left')}
          </GearRow>
          <PortraitContainer>
            <PortraitStyled src={Portrait} alt="portrait" />
          </PortraitContainer>
          <GearRow className="gear-right" style={{ gridArea: 'gear-right' }}>
            {renderGear('right')}
          </GearRow>
        </GearOverviewContainer>
      </CharacterDetailStyled>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapDispatchToProps = dispatch => ({
  getCharacterDetails: id => dispatch(getCharacterDetails(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CharacterDetail);
