import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const Like = ({ id, likes, addLike }) => (
  <div>
    <Icon name = 'like' onClick = { () => addLike(id) } />
    <span>{ likes }</span>
  </div>
);

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number,
  id: PropTypes.number,
  addLike: PropTypes.func
};


export default Like;
