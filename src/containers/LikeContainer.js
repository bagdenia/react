import { connect } from 'react-redux';
import Like from 'components/widgets/blog/elements/Like';
import  { fetchPost as addLike } from 'actions/Like';

const stateToProps = (state, ownProps) => ({
  likes: ownProps.likes,
  id: ownProps.id
});

const mapActionsToProps = (dispatch) => ({
  addLike: (id) => {
    dispatch(addLike(id));
  }
});

export default connect(stateToProps, mapActionsToProps)(Like);
