import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Login from '../screens/Login';

import FromScreen from '../screens/flight_log_screens/1_FromScreen';
import ToScreen from '../screens/flight_log_screens/2_ToScreen';
import SelectDateScreen from '../screens/flight_log_screens/3_SelectDateScreen';
import HowManyScreen from '../screens/flight_log_screens/4_HowManyScreen';
import FinalRegister from '../screens/flight_log_screens/5_FinalRegister';

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      {/* 2dst */}
      <Stack.Screen
        name="FromScreen"
        component={FromScreen}
        options={{title: 'From Screen'}}
      />
      <Stack.Screen
        name="ToScreen"
        component={ToScreen}
        options={{title: 'To Screen'}}
      />
      <Stack.Screen
        name="SelectDateScreen"
        component={SelectDateScreen}
        options={{title: 'To Screen'}}
      />
      <Stack.Screen
        name="HowManyScreen"
        component={HowManyScreen}
        options={{title: 'Select Date Screen'}}
      />
      <Stack.Screen
        name="FinalRegister"
        component={FinalRegister}
        options={{title: 'Final Register'}}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
