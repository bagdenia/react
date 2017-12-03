import React from 'react';
import BlogPage from 'components/BlogPage';
import { Switch, Route } from 'react-router-dom';
import Post from 'components/Post';
import { postsPath, rootPath } from 'helpers/routes/index'; 


const routes = () => (
  <Switch>
    <Route exact path= { rootPath() } component={BlogPage}/>
    <Route path= { postsPath() } component={Post}/>
  </Switch>
);

// const routes = [
//   { path: postsPath(),
//     component: Post
//   },
//   { path: rootPath(),
//     component: BlogPage,
//   }
// ];

export default routes;

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

export { RouteWithSubRoutes };
