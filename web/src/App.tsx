import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyle';

const App: React.FC = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App;