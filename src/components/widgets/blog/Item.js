import React from 'react';
import PropTypes from 'prop-types';
import Meta from './elements/Meta';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
import Like from './elements/Like';
import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes/index';
import { Card, Image as ImageSem } from 'semantic-ui-react';

const BlogItem = ({meta, image, text, addLike, id}) => (
  <div>
    <Card>
      <Card.Content>
        <Link to  = { postsPath(id)}>{ text }</Link>
      </Card.Content>
      <ImageSem>
        <Image {...image} />
      </ImageSem>
      <Card.Content>
        <Meta {...meta} />
        <TextBox children = { text } />
      </Card.Content>
      <Card.Content extra>
        <Like likes = { meta.likes } addLike = { addLike } id = { id } /> 
      </Card.Content>
    </Card>
  </div>
);

BlogItem.propTypes = {
  meta: PropTypes.object,
  image: PropTypes.object,
  text: PropTypes.string,
  addLike: PropTypes.func,
  id: PropTypes.number
};

BlogItem.defaultProps = {
  text: 'Post address'
};

export default BlogItem;
