import React from 'react';
import MyStack from './src/navigate/Mainstack';
import {GlobalProvider} from './src/context/context';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </GlobalProvider>
  );
}

export default App;
