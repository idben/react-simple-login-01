import React from 'react';
import {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const undefinedObject = {
  user: null,
  isFetching: false,
  error: false
}

const INITIAL_STATE = (sessionStorage.a33123245 === undefined) ? undefinedObject: {
  user: JSON.parse(sessionStorage.a33123245),
  isFetching: false,
  error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider =({children})=>{

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return(
    <AuthContext.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  )
}