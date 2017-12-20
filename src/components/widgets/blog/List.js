import React from 'react';
import DOM from 'react-dom-factories'; 
import { map } from 'lodash';
import BlogItem from './Item';
import { Item } from 'semantic-ui-react';

const BlogList = ({ items }) => (
  DOM.div(
    {},
    map(
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
              id: item.id 
            })
        )
      )
    )
  )
);

export default BlogList;
 
