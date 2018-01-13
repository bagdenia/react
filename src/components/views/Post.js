import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';
import Helmet from 'react-helmet';

const Post = ({ item }) => ( 
  <Segment>
    <Item.Group>
      { item && <BlogItem 
        meta = { item.meta }
        image = { item.image }
        text = { item.text }
        id = {item.id }
      /> }
      { item && <Helmet title={item.text} /> }
    </Item.Group>

  </Segment>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
