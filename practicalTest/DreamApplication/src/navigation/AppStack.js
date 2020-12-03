import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

//importing navigators
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//The screens that belong navigation when user is not logged in
import DreamDiaryScreen from '../screens/DreamDiaryScreen';
import DreamListScreen from '../screens/DreamListScreen';
import LearnScreen from '../screens/LearnScreen';
import AddDreamModal from '../screens/AddDreamModal';
import InfoScreen from '../screens/InfoScreen';

//Creating instances of navigations
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

//TabNavigator:
function BottomTabStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'DreamDiary') {
            return (
              <Icon
                name={focused ? 'home' : 'home'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'AddDream') {
            return (
              <Icon
                name={focused ? 'plus' : 'plus'}
                size={size}
                color={color}
              />
            );
          }
          return (
            <Icon name={focused ? 'list' : 'list'} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#b55f91',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#020202',
        },
      }}>
      <Tab.Screen name="DreamDiary" component={DreamDiaryScreen} />
      <Tab.Screen name="DreamList" component={DreamListScreen} />
      <Tab.Screen name="AddDream" component={AddDreamModal} />
    </Tab.Navigator>
  );
}

//Stack navigation for screens, these are added to drawer navigation which is the main navigation
function DreamDiaryScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="DreamDiary" headerMode="none">
      <Stack.Screen name="DreamDiary" component={BottomTabStack} />
    </Stack.Navigator>
  );
}

function DreamListScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="DreamList" headerMode="none">
      <Stack.Screen name="DreamList" component={DreamListScreen} />
    </Stack.Navigator>
  );
}
function LearnScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Learn" headerMode="none">
      <Stack.Screen name="Learn" component={LearnScreen} />
    </Stack.Navigator>
  );
}
function InfoScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Info" headerMode="none">
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
}

//This is the main navigation that is exported and used in Routes.js
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#b55f91',
        itemStyle: {marginVertical: 5},
      }}>
      <Drawer.Screen
        name="DreamDiaryScreenStack"
        options={{drawerLabel: 'Uni Kirja'}}
        component={DreamDiaryScreenStack}
      />
      <Drawer.Screen
        name="InfoScreenStack"
        options={{drawerLabel: 'Info'}}
        component={InfoScreenStack}
      />
      <Drawer.Screen
        name="LearnScreenStack"
        options={{drawerLabel: 'Opi unista'}}
        component={LearnScreenStack}
      />

      <Drawer.Screen
        name="DreamListScreenStack"
        options={{drawerLabel: 'Unesi'}}
        component={DreamListScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
