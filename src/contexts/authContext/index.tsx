import { createContext, useState, useEffect } from 'react';

import { googleAuthentication } from '../../services/firebase/getGoogleAuthorization';

import { AuthContextProps, AuthProviderContextProps, UserProps } from './type';

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderContextProps) {
  const [user, setUser] = useState<UserProps | undefined>();

  async function signInWithGoogle() {
    const userInfo = await googleAuthentication.Auth();
    setUser(userInfo);
  }

  function handleUnsubcribe() {
    googleAuthentication.CheckUnsubscribe(setUser)
  }

  useEffect(() => {
  handleUnsubcribe();
  
    return () => {
      handleUnsubcribe();
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
};
