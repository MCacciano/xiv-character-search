import { CHARACTER_DETAIL } from './character-detail.types';

const initialState = {};

const characterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHARACTER_DETAIL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
