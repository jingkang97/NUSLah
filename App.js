import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import Profile from './screens/Profile'


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName = "Forum">
        <Drawer.Screen name = "Forum" component = {MainTabScreen}/>
        {/* <Drawer.Screen name = "Profile" component = {Profile}/> */}
      </Drawer.Navigator> 
      </NavigationContainer>
  );
}

