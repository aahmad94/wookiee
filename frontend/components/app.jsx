import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupContainer from './session/signup_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils.jsx';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path="/login" component={SignupContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);

export default App;
