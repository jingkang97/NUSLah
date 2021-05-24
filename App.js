import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
import Tabs from './navigation/Tabs'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from "./screens/Home"
import Favourites from "./screens/Favourites"
import Profile from "./screens/Profile"

import Icon from 'react-native-vector-icons/Ionicons'


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const HomeStackScreen = ({navigation}) => {
  return(
      <HomeStack.Navigator 
        screenOptions={{
          headerStyle:{
            backgroundColor: "#39A0ED",
            height: 90,
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          },
        }}
      >
        <HomeStack.Screen name = "Home" component = {Home} 
        options = {{
          title: 'Home',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size = {25}
            backgroundColor="#8077FF" onPress = {() => navigation.openDrawer()}>
            </Icon.Button>
          )
        }}/>
      </HomeStack.Navigator>
  )
}

const ProfileStackScreen = ({navigation}) => {
  return(
    <ProfileStack.Navigator 
    screenOptions={{
      headerStyle:{
        backgroundColor: "#8077FF",
        height: 90,
      },
      headerTintColor: '#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    }}
    >
    <ProfileStack.Screen name = "Profile" component = {Profile} />
  </ProfileStack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName = "Documents">
        <Drawer.Screen name = "Documents" component = {HomeStackScreen}/>
        <Drawer.Screen name = "Profile" component = {ProfileStackScreen}/>
      </Drawer.Navigator> */}
      <Stack.Navigator screenOptions = {{
          headerStyle: {
            backgroundColor: '#39A0ED'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Profile" component = {Profile} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
