import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//The screens that belong navigation when user is not logged in
import FirstScreen from '../screens/FirstScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

//Creating the stack navigator
const Stack = createStackNavigator();

//Creating and exporting the navigator
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="FirstScreen" headerMode="none">
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
