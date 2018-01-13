import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';

const Post = ({ item }) => ( 
  <Segment>
    <Item.Group>
      { item && <BlogItem 
        meta = { item.meta }
        image = { item.image }
        text = { item.text }
        id = {item.id }
      /> }
    </Item.Group>
  </Segment>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
