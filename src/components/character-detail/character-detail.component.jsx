import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  CharacterDetailStyled,
  PortraitContainer,
  PortraitStyled,
  GearOverviewContainer
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

  if (characterDetails.Character) {
    const { Portrait, Name } = characterDetails.Character;

    return (
      <CharacterDetailStyled>
        {/* ! this is temporary until pagination gets figured out */}
        <h2 style={{ width: '100%', textAlign: 'center' }}>{Name}</h2>
        <GearOverviewContainer>
          <PortraitStyled src={Portrait} alt="portrait" />
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
