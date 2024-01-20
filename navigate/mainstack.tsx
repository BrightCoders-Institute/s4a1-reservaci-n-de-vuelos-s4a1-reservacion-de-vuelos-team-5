import React from 'react';
import SignUp from '../screens/SignUp'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import SignUpInput from '../components/SignUpInput';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SingUp" 
                component={SignUp} />
        </Stack.Navigator>
  );
}
export default MyStack;