import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user: {logged} } = useContext(AuthContext);
    return (
        <Router>
          <div>
            <Switch>
                <PublicRoute notAuthenticated={ logged } exact path="/login" component={LoginScreen} />
                <PrivateRoute isAuthenticated={ logged } path="/" component={DashboardRoutes} />
            </Switch>
          </div>
        </Router>
      );
}
