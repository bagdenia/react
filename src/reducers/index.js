import { combineReducers } from 'redux';
import posts from './Posts';
import post from './Post';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  posts,
  post,
  form: formReducer
});
