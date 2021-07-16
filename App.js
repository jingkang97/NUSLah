import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions} from 'react-native';
import Profile from './screens/Profile'
import TopTab from './screens/TopTab'

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Main = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Main.Navigator initialRouteName = "Forum"
    screenOptions={{
      headerShown: false
    }}
    >
        <Main.Screen name = "Forum" component = {MainTabScreen}/>
        {/* <Drawer.Screen name = "Profile" component = {Profile}/> */}
      </Main.Navigator> 
      
      </NavigationContainer>
      </SafeAreaProvider>
  );
}

