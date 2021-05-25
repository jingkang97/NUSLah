import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { StyleSheet, Text, SafeAreaView, View, Button, Image, TouchableOpacity, Dimensions, LogBox} from 'react-native';
import Profile from './screens/Profile'



const Drawer = createDrawerNavigator();

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName = "Forum">
        <Drawer.Screen name = "Forum" component = {MainTabScreen}/>
        {/* <Drawer.Screen name = "Profile" component = {Profile}/> */}
      </Drawer.Navigator> 
      
      </NavigationContainer>
  );
}

