import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routs} from './Routs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, View, Text} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

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

const Tab1 = () => {
  return (
    <View style={styles.tab}>
      <Text>This is tab 1</Text>
    </View>
  );
};

const Tab2 = () => {
  return (
    <View style={styles.tab}>
      <Text>This is tab 2</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={styles.tab}>
      <Text>This is tab 3</Text>
    </View>
  );
};

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
        name={'Tab1'}
        options={{tabBarLabel: PhotosTabLabel}}
        component={Tab1}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        options={{tabBarLabel: VideosTabLabel}}
        component={Tab2}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        options={{tabBarLabel: SavedTabLabel}}
        component={Tab3}
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
