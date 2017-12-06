import React from 'react';

// import { items as staticItems } from 'constants/static/items';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import _ from 'lodash';
import { Container } from 'semantic-ui-react';
import request from 'superagent';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.addLike = this.addLike.bind(this);  
  }

  componentDidMount() {
    this.fetchPosts();
  }
  
  
  addLike(id) {
    this.setState((prevState) => {
      const item = _.find(prevState.posts, ['id', id]);
      item.meta.likes += 1;
      return { posts: prevState.posts };
    });
  }

  fetchPosts() {
    request.get(
      'http://localhost:5001/',
      {},
      (err, res) => {
        const items = _.each(res.body, function(e) {
          e.meta.likes ? e.meta.likes : e.meta.likes = 0; 
          e.meta.name ? e.meta.name : e.meta.name = 'Noname'; 
        });
        this.setState({ posts: items });
      }
    );
  }

  render() {
    const posts = this.state.posts;
    const pieColumns = _.map(posts, item => [item.meta.name, 
      item.meta.likes]);
    return (
      <Container>  
        <BlogList items ={ posts } addLike = {this.addLike} />
        <PieChart columns = { pieColumns } />
      </Container>
    );
  }
}

export default BlogPage;
