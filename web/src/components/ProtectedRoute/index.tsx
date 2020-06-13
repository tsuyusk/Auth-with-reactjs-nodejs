import React from 'react';
import { Route, Redirect, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
  redirectPath: string;
  message: string;
  isAuth: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (
  {message, isAuth , redirectPath, component, ...props}) => {
  return isAuth
    ? <Route {...props} path={redirectPath}/>
    : <Redirect to={{
      pathname: redirectPath,
      state: message
    }} />
}


export default ProtectedRoute;