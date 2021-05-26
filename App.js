import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions} from 'react-native';
import Profile from './screens/Profile'

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName = "Forum">
        <Drawer.Screen name = "Forum" component = {MainTabScreen}/>
        {/* <Drawer.Screen name = "Profile" component = {Profile}/> */}
      </Drawer.Navigator> 
      
      </NavigationContainer>
      </SafeAreaProvider>
  );
}

