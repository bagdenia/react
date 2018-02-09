import { connect } from 'react-redux';
import { get } from 'lodash';

import EditPostForm from 'components/views/EditPostForm';

const stateToProps = (state) => ({
  initialValues: {
    id: get(state, 'post.entry.id'),
    text: get(state, 'post.entry.text'),
    author: get(state, 'post.entry.meta.name'),
    createdAt: get(state, 'post.entry.meta.dateCreated'),
  },
  enableReinitialize: true,
});

export default connect(stateToProps)(EditPostForm);
