import React from 'react';
import BlogPage from 'components/BlogPage';
import { Route } from 'react-router-dom';
import Post from 'components/Post';
import { postsPath } from 'helpers/routes/index'; 

const routes = [
  { path: postsPath(),
    component: Post
  },
  { path: '/',
    component: BlogPage,
  }
];

export default routes;

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

export { RouteWithSubRoutes };
