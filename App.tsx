import React from 'react';
import MyStack from './src/navigate/Mainstack';
import {NavigationContainer} from '@react-navigation/native';
// import {GlobalProvider} from './src/context/context';
import {createContext, useState} from 'react';

const UserContext = createContext();

function App(): React.JSX.Element {
  const [user, setUser] = useState('initialUSER');
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
