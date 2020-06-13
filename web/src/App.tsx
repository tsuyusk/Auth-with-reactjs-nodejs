import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from './Routes';
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
      <Router>
        <Routes />
      </Router>
    </>
  )
}

export default App;