import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 

const Like = ({ id, likes, addLike }) => {
  const handleClick = (e) => {
    addLike(id)
  }

  return (
    <div>
      <span>Count pop: { likes }</span>
      <button onClick={handleClick}>Like</button>
    </div>
  )
};

Like.defaultProps = {
  likes: 0
};

Like.propTypes = {
  likes: PropTypes.number
};

export default Like;
