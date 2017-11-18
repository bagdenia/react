import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './App';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <App />,
  rootEl
);
