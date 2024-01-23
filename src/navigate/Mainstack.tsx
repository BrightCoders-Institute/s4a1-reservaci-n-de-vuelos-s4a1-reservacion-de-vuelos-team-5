import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import FromScreen from '../screens/flight_log_screens/FromScreen';
import ToScreen from '../screens/flight_log_screens/ToScreen';
import SelectDateScreen from '../screens/flight_log_screens/SelectDateScreen';
import HowManyScreen from '../screens/flight_log_screens/HowManyScreen';
import FinalRegister from '../screens/flight_log_screens/FinalRegister';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      {/* 2dst */}
      <Stack.Screen name="FromScreen" component={FromScreen} />
      <Stack.Screen name="ToScreen" component={ToScreen} />
      <Stack.Screen name="SelectDateScreen" component={SelectDateScreen} />
      <Stack.Screen name="HowManyScreen" component={HowManyScreen} />
      <Stack.Screen name="FinalRegister" component={FinalRegister} />
    </Stack.Navigator>
  );
}
export default MyStack;
