import request from 'superagent';
import * as types from 'constants/actionTypes/PostsActionTypes';
import { API_ROOT } from 'constants/API'; 

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts(query = '') {
  return (dispatch) => {
    dispatch(requestPosts());
    return request
      .get(`${API_ROOT}/`)
      .end((err, res) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(
          res.body.filter((entry) => entry.text.match(new RegExp(query, 'i')))
        ));
      });
  };
}
