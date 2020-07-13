import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import DashboardView from '../views';

const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/dashboard' component={DashboardView} />
        <Redirect to='/dashboard' />
      </Switch>
    </Router>
  );
};

export default AppRouter;
