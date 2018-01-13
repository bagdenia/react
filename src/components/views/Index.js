import React from 'react';
import Posts from 'components/views/Posts';
import Helmet from 'react-helmet';

const Index = ({ items }) => (
  <div>
    <Posts items={items} />
    <Helmet title='Список постов' />
  </div>
);

Index.propTypes = {
  items: Posts.propTypes.items
};

export default Index;
