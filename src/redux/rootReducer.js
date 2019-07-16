import { combineReducers } from 'redux';

import searchFormReducer from './search-form/search-form.reducers';
import characterReducer from './character-detail/character-detail.reducers';

const rootReducer = combineReducers({
  search: searchFormReducer,
  characterDetails: characterReducer,
});

export default rootReducer;
