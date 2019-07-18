import {
  SEARCH_CHARACTER,
  GET_SERVER_LIST,
  IS_LOADING
} from './search-form.types';

import xivapi from '../../axios/xivapi';

export const searchCharacter = (
  characterName = '',
  serverName = '',
  page = 1
) => async dispatch => {
  if (!characterName) {
    console.error(
      `Please enter a character name to search (ex: 'Mozzey Magick')`
    );
    return;
  }

  if (serverName.toLowerCase() === 'servers') {
    serverName.replace('servers', '');
  }

  try {
    const res = await xivapi.get(
      `/character/search?name=${characterName}&server=${serverName}&page=${page}`
    );
    const searchResults = res.data;

    dispatch({
      type: SEARCH_CHARACTER,
      payload: {
        searchResults,
        characterName
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const getServerList = () => async dispatch => {
  try {
    const res = await xivapi.get(`/servers`);
    const serverList = res.data;

    dispatch({
      type: GET_SERVER_LIST,
      payload: serverList
    });
  } catch (err) {
    console.error(err);
  }
};

export const isLoading = (loadingFlag = false) => {
  return {
    type: IS_LOADING,
    payload: loadingFlag
  };
};
