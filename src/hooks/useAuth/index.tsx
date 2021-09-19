import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UserContext is required.')
  }

  const {  
    user,
    signInWithGoogle
  } = context;

  return { 
    user,
    signInWithGoogle
  }
}