import React from 'react';
import MainLayout from 'components/layouts/MainLayout';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath, StaticRouter } from 'react-router-dom';
import { assign } from 'lodash';

import prepareData from 'helpers/prepareData';
import createStore from 'store';
import routes, { RouteWithSubRoutes } from 'routes';

const store = createStore();

export default (req, res) => {
  const state = { params: {}, routes: [], query: {} };

  // бежим по всем роутам и матчим каждый в поисках подходящих
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match)
    {
      state.routes.push(route);
      assign(state.params, match.params);
      assign(state.query, req.query);
    }
    return match;
  });

  prepareData(store, state).then(() => {
    // и после этого рендерим страницу с начальным состоянием
    const initialState = JSON.stringify(store.getState());
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={state}>
          <MainLayout>
            {
              routes.map(
                (route, i) => (
                  <RouteWithSubRoutes key={i} {...route}/>
                )
              )
            }
          </MainLayout>
        </StaticRouter>
      </Provider>
    );
    res.status(200);
    res.render('index', { initialState, content });
  });
};
