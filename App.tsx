import React from 'react';
import SignUpInput from './components/SignUpInput';
import MyStack from './navigate/mainstack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
      
  );
}

export default App;
