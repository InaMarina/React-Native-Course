import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from '../screens/FirstScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="FirstScreen" headerMode="none">
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
