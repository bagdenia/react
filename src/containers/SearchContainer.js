import { connect } from 'react-redux';
import Search from 'components/widgets/blog/elements/Search';
import  { fetchPosts } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const mapActionsToProps = (dispatch) => ({
  find: (query) => {
    dispatch(fetchPosts(query));
  }
});

export default connect(stateToProps, mapActionsToProps)(Search);
