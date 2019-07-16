import React from 'react';
import { connect } from 'react-redux';

// import { CharacterDetailStyled } from './character-detail.styles';

const CharacterDetail = props => {
  console.log(props);
  return <div>{props.characterDetails.Character.Name}</div>
}

const mapStateToProps = ({ characterDetails }) => ({ characterDetails });

export default connect(mapStateToProps)(CharacterDetail);
