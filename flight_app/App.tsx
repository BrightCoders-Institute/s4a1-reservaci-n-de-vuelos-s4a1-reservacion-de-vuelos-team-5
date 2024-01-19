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

function App(): React.JSX.Element {
  return (
    <View>
      <MyStack/>
    </View>
      
  );
}

export default App;
