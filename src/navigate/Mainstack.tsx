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
import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="FromScreen">
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Sign Up',
          headerTitleStyle: styles.title,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerTitleStyle: styles.title}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login', headerTitleStyle: styles.title}}
      />
      {/* 2dst */}
      <Stack.Screen
        name="FromScreen"
        component={FromScreen}
        options={{title: 'From Screen', headerTitleStyle: styles.title}}
      />
      <Stack.Screen
        name="ToScreen"
        component={ToScreen}
        options={{title: 'To Screen', headerTitleStyle: styles.title}}
      />
      <Stack.Screen
        name="SelectDateScreen"
        component={SelectDateScreen}
        options={{title: 'To Screen', headerTitleStyle: styles.title}}
      />
      <Stack.Screen
        name="HowManyScreen"
        component={HowManyScreen}
        options={{title: 'Select Date Screen', headerTitleStyle: styles.title}}
      />
      <Stack.Screen
        name="FinalRegister"
        component={FinalRegister}
        options={{title: 'Final Register', headerTitleStyle: styles.title}}
      />
    </Stack.Navigator>
  );
}
export default MyStack;

const styles = StyleSheet.create({
  title: {
    color: '#2C45FE',
    fontWeight: '900',
    fontSize: 25,
  },
});
