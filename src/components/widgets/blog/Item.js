import React from 'react';
import DOM from 'react-dom-factories'; 

import Meta from './elements/Meta';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
import Like from './elements/Like';

const BlogItem = ({meta, image, text, addLike, id}) => (
  DOM.div(
    null,
    React.createElement(
      Meta, 
      meta),
    React.createElement(
      Image, 
      image),
    React.createElement(
      TextBox,
      null,
      text),
    React.createElement(
      Like, 
      { likes: meta.likes, addLike: addLike, id: id } )
  )
);

export default BlogItem;
