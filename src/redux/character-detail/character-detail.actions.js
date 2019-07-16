import { CHARACTER_DETAIL } from './character-detail.types';
import xivapi from '../../axios/xivapi';

export const getCharacterDetails = id => async dispatch => {
  try {
    const res = await xivapi.get(`/character/${id}?extended=1`);

    dispatch({
      type: CHARACTER_DETAIL,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
