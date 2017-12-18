import React from 'react';

import PropTypes from 'prop-types';
import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import SearchContainer from 'containers/SearchContainer';
import _ from 'lodash';
import { Segment } from 'semantic-ui-react';


class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    const pieColumns = _.map(this.props.items, item => [item.meta.name, 
      item.meta.likes]);
    return (
      <Segment.Group horizontal>  
        <Segment>
          <BlogList items ={ items } />
        </Segment>
        <Segment>
          <SearchContainer />
          <PieChart columns = { pieColumns } />
        </Segment>
      </Segment.Group>
    );
  }
}


Posts.propTypes = {
  items: PropTypes.array,
};

export default Posts;

