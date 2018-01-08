import { assign } from 'lodash/object';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';
import * as types from 'constants/actionTypes/PostsActionTypes';
import update from 'immutability-helper';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};


function addLike(entries, response) {
  if (entries) {
    const postId = entries.findIndex(entry => entry.id == response.id);

    if (postId > -1) {
      const entry = entries[postId];
      const updatedPost = update(entry, {
        meta: {likes: {$set: (response.meta.likes)}}
      });

      const updatedPosts = {
        entries: entries
          .slice(0, postId)
          .concat(updatedPost)
          .concat(entries.slice(postId + 1))
      };
      return updatedPosts.entries;
    }
  }
  return entries;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, { entries: action.response });
    case likeTypes.FETCH_LIKE_REQUEST: 
      return assign({}, state, { isFetching: true });
    case likeTypes.FETCH_LIKE_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.FETCH_LIKE_SUCCESS: {
      return assign({}, state, { 
        entries: addLike(state.entries, action.response) 
      });
    }
    default: 
      return state;
  }
}
