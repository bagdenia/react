import React from 'react';
import { Route } from 'react-router-dom';
import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';
import About from 'components/views/About';
import Contacts from 'components/views/Contacts';
import { aboutPath, postsPath, rootPath, contactsPath, editPostPath} from 'helpers/routes/index'; 
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import initialLoad from 'helpers/initialLoad';
import EditPostFormContainer from 'containers/EditPostFormContainer';

const routes = [
  {
    path: rootPath(),
    component: PostsContainer,
    loadData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    },
    exact: true
  },
  {
    path: postsPath(),
    component: PostContainer,
    loadData: (store, query, params) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    }
  },
  {
    path: aboutPath(),
    component: About,
  },
  {
    path: contactsPath(),
    component: Contacts,
  },
  {
    path: editPostPath(),
    component: EditPostFormContainer,
    loadData: (store, query, params) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPost(params.id));
    }
  }
];

const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} strict={route.exact} path={route.path} 
    render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    )}/>
);

export default routes;
export { RouteWithSubRoutes };
