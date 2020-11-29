import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//The screens that belong navigation when user is not logged in
import DreamDiaryScreen from '../screens/DreamDiaryScreen';

//Creating the stack navigator
const Stack = createStackNavigator();

//Creating and exporting the navigator
export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DreamDiary" headerMode="none">
      <Stack.Screen name="DreamDiary" component={DreamDiaryScreen} />
    </Stack.Navigator>
  );
}
