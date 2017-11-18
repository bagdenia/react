import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories'; 
import _ from 'lodash';
import BlogItem from './Item';

const BlogList = ( { items, addLike } ) => (
  DOM.ul(
    {},
    _.map(
      items,
      (item) => (
        DOM.li( 
          { key: item.id }, 
          React.createElement(
            BlogItem, 
            { 
            meta: item.meta,
            image: item.image,
            text: item.text,
            addLike,
            id: item.id 
          })
        )
      )
    )
  )
);

export default BlogList;
 
