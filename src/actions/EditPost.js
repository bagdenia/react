import { API_CALL } from 'middleware/API';

import * as types from 'constants/actionTypes/EditPostActionTypes';

export function editPost(post) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${post.id}/edit`,
      method: 'PUT',
      payload: post,
      query: {},
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
