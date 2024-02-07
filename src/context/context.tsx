import React, {createContext, useState} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}:any ) => {
  const [globalVariable, setGlobalVariable] = useState('');

  return (
    <GlobalContext.Provider value={{GlobalContext}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
