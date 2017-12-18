import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';
import _ from 'lodash';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

function addLike(entry) {
  if (entry) {
    entry.meta.likes += 1;
    return entry;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case likeTypes.ADD_LIKE: {
      const entry = _.cloneDeep(state.entry);
      return assign({}, initialState, { entry: addLike(entry) });
    }
    default: 
      return state;
  }
}
