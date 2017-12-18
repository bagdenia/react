import * as types from 'constants/actionTypes/LikeActionTypes';

const addLike = (id) => ({
  type: types.ADD_LIKE,
  id
});

export default addLike;

