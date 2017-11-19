import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({ id, likes, addLike }) => {
  const handleClick = () => {
    addLike(id);
  };

  return (
    <div>
      <span>Count pop: { likes }</span>
      <Button primary size ='mini' onClick={handleClick}>Like</Button>
    </div>
  );
};

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number
};

export default Like;
