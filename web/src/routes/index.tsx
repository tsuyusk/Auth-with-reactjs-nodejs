import React from 'react';

import { useAuth } from "../context/AuthContext";

import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";

const Routes: React.FC = () => {
  const { signed } = useAuth();
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;