import React from 'react';

const initialState = {
  auth: () => {}
};

export const AuthContext = React.createContext(initialState);