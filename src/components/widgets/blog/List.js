import React from 'react';
import DOM from 'react-dom-factories'; 
import _ from 'lodash';
import BlogItem from './Item';
import { Segment } from 'semantic-ui-react';

const BlogList = ({ items, addLike }) => (
  DOM.ul(
    {},
    _.map(
      items,
      (item) => (
        DOM.div( 
          { key: item.id }, 
          React.createElement(
            Segment,
            null,
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
  )
);

export default BlogList;
 
