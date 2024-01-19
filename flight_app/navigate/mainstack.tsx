import React from 'react';
import SignUp from '../screens/SignUp'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="SingUp" 
                component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;