import { API_CALL } from 'middleware/API';

import * as types from 'constants/actionTypes/LikeActionTypes';

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: '/',
      query: { id },
      method: 'POST',
      types: [
        types.FETCH_LIKE_REQUEST,
        types.FETCH_LIKE_SUCCESS,
        types.FETCH_LIKE_ERROR
      ]
    }
  };
}
