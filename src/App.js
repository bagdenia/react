import React from 'react';
import MainLayout from 'components/layouts/MainLayout';
import ReactDOM from 'react-dom';
import routes, { RouteWithSubRoutes } from 'routes/index';
import { Provider } from 'react-redux';
import store from 'store';
import { matchPath, Router } from 'react-router';
import history from 'helpers/History';
import _ from 'lodash';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';
import { parse } from 'qs';
 
function historyCb(location) {
  const state = { params: {}, routes: [], query: {} };

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match)
    {
      state.routes.push(route);
      _.assign(state.params, match.params);
      _.assign(state.query, parse(location.search.substr(1)));
      prepareData(store, state);
    }
    return match;
  });
}

historyCb(window.location);
history.listen(historyCb);


const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <MainLayout>
        {
          routes.map(
            (route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            )
          )
        }
      </MainLayout>
    </Router>
  </Provider>
);

ReactDOM.render(
  <DevTools store ={store} />,
  document.getElementById('devtools')
);

 
export default App;
