import React from 'react';

import { items as staticItems } from 'constants/static/items';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import _ from 'lodash';
import { Container } from 'semantic-ui-react';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    const items = _.each(staticItems, function(e) {
      e.meta.likes ? e.meta.likes : e.meta.likes = 0; 
      e.meta.name ? e.meta.name : e.meta.name = 'Noname'; 
    });

    this.state = { posts: items };
    this.addLike = this.addLike.bind(this);  
  }
  
  addLike(id) {
    this.setState((prevState) => {
      const item = _.find(prevState.posts, ['id', id]);
      item.meta.likes += 1;
      return { posts: prevState.posts };
    });
  }
  
  render() {
    const pieColumns = _.map(staticItems, item => [item.meta.name, 
      item.meta.likes]);
    return (
      <Container>  
        <BlogList items ={this.state.posts} addLike = {this.addLike} />
        <PieChart columns = { pieColumns } />
      </Container>
    );
  }
}

export default BlogPage;
