import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';
import { items } from 'constants/static/items';

const Post = ({ match }) => {
  const item = items[match.params.id - 1];
  return (
    <Item.Group>
      <BlogItem 
        meta = { item.meta }
        image = { item.image }
        text = { item.text }
        id = {item.id }
      />
    </Item.Group>
  );
};

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
