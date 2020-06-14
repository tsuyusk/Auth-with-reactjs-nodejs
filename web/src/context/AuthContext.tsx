import React, { useContext, useState } from 'react';

interface IAuthContext {
  signed: boolean;
  signIn(): void;
  signOff(): void;
}

export const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState(false);
  function signIn() {
    setSigned(true);
  }
  function signOff() {
    setSigned(false);
  }
  return (
    <AuthContext.Provider value={{signed, signIn, signOff}}>
      {children}
    </AuthContext.Provider>
  )
}
