import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case likeTypes.FETCH_LIKE_REQUEST: 
      return assign({}, state, { isFetching: true });
    case likeTypes.FETCH_LIKE_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.FETCH_LIKE_SUCCESS: {
      return assign({}, state, { 
        entry: action.response 
      });
    }
    default: 
      return state;
  }
}
