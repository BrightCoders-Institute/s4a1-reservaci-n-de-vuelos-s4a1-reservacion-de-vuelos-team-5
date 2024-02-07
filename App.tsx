import React from 'react';
import MyStack from './src/navigate/Mainstack';
import {NavigationContainer} from '@react-navigation/native';
// import {GlobalProvider} from './src/context/context';
import {createContext, useContext, useState} from 'react';

const UserContext = createContext();

function App(): React.JSX.Element {
  const [user, setUser] = useState('hiUser');
  function handleUser(newUser) {
    setUser(newUser);
  }

  return (
    <UserContext.Provider value={{user, handleUser}}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
export {UserContext};
