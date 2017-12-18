import { assign } from 'lodash/object';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';
import * as types from 'constants/actionTypes/PostsActionTypes';
import update from 'immutability-helper';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};


function addLike(entries, id) {
  if (entries) {
    const postId = entries.findIndex(entry => entry.id == id);
    let updatedPosts;

    if (postId > -1) {
      const entry = entries[postId];
      const updatedPost = update(entry, {
        meta: {likes: {$set: (entry.meta.likes + 1)}}
      });

      updatedPosts = {
        entries: entries
          .slice(0, postId)
          .concat(updatedPost)
          .concat(entries.slice(postId + 1))
      };
    }
    return updatedPosts.entries;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case likeTypes.ADD_LIKE: {
      const id = action.id;
      const entries = state.entries;
      return assign({}, initialState, { entries: addLike(entries, id) });
    }

    default: 
      return state;
  }
}
