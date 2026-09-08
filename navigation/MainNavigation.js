import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routs} from './Routs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routs.Home} component={Home} />
      <Drawer.Screen name={Routs.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routs.Drawer}>
      <Stack.Screen name={Routs.Drawer} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
