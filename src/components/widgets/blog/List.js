import React from 'react';
import DOM from 'react-dom-factories'; 
import _ from 'lodash';
import BlogItem from './Item';
import { Item } from 'semantic-ui-react';

const BlogList = ({ items, addLike }) => (
  DOM.div(
    {},
    _.map(
      items,
      (item) => (
        React.createElement(Item.Group,
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
 
