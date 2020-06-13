import React, { useState } from 'react';
import { Switch , Route, Redirect } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import TokenProtectedRoute from "./components/ProtectedRoute";

const Routes: React.FC = () => {
  const [hasToken, setHasToken] = useState(false);
  function handleAuth() {
    setHasToken(true);
  }
  return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login handleAuth={handleAuth} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <TokenProtectedRoute
          isAuth={hasToken}
          path="/homepage"
          redirectPath="/register"
          message="You need to register to be able to go to homepage."
        >
          <Homepage />
        </TokenProtectedRoute>
      </Switch>
  )
}

export default Routes;