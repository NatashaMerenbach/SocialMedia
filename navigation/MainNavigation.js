import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routs} from './Routs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, View, Text} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const PhotosTabLabel = ({focused}) => (
  <ProfileTabTitle isFocused={focused} title={'Photos'} />
);
const VideosTabLabel = ({focused}) => (
  <ProfileTabTitle isFocused={focused} title={'Videos'} />
);
const SavedTabLabel = ({focused}) => (
  <ProfileTabTitle isFocused={focused} title={'Saved'} />
);

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Photos'}
        options={{tabBarLabel: PhotosTabLabel}}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Videos'}
        options={{tabBarLabel: VideosTabLabel}}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Saved'}
        options={{tabBarLabel: SavedTabLabel}}
        component={ProfileTabContent}
      />
    </ProfileTabs.Navigator>
  );
};

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
