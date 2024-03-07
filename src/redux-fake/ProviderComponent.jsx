import React, { useReducer, createContext } from 'react';
import AppContext from './stateContext';
import reducer from './reducers';
import initialState from './initialState';

function ProviderComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  )
}

export default ProviderComponent;