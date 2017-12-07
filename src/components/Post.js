import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Item } from 'semantic-ui-react';
import BlogItem from 'components/widgets/blog/Item';
import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: []};
  }

  componentDidMount() {
    this.fetchPost(this.props.match.params.id);
  }

  fetchPost(id) {
    request.get(
      `http://localhost:5001/posts/${id}`,
      {},
      (err, res) => {
        const item  = res.body;
        item.meta.likes ? item.meta.likes : item.meta.likes = 0;
        item.meta.name ? item.meta.name : item.meta.name = 'Noname'; 
        this.setState({ post: item });
      }
    );
  }

  render() {
    const item = this.state.post;
    if (item.id) {
      return (
        <Segment>
          <Item.Group>
            <BlogItem 
              meta = { item.meta }
              image = { item.image }
              text = { item.text }
              id = {item.id }
            />
          </Item.Group>
        </Segment>
      );
    }
    else {
      return (
        <div>Not found</div>
      );
    }
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
