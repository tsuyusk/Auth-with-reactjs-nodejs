import React from 'react';

import { useHistory } from "react-router-dom";

const Homepage: React.FC = () => {
  const history = useHistory();

  function handleSignOff() {
    localStorage.removeItem("token");
    history.goBack();
  }
  return (
    <div>
      <h1>You are logged!</h1>
      <div onClick={handleSignOff}>
        <h4 role="button" className="text-primary">Sign off</h4>
      </div>
    </div>
  );
}

export default Homepage;