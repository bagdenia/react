import React from 'react';
import MainLayout from 'components/layouts/MainLayout';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import routes from 'routes/index';
 
const App = () => (
  <Router>
    <MainLayout>
      <Route component={routes} />
    </MainLayout>
  </Router>
);

 
export default App;
