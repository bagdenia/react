import request from 'superagent';
import * as types from 'constants/actionTypes/PostActionTypes';
import { API_ROOT } from 'constants/API'; 

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(`${API_ROOT}/posts/${id}`)
      .end((err, res) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(res.body));
      });
  };
}
