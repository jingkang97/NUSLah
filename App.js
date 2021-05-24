import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button} from 'react-native';
import Tabs from './navigation/Tabs'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Documents from "./screens/Documents"
import Favourites from "./screens/Favourites"
import Search from "./screens/Search"
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
            backgroundColor: "#8077FF",
            height: 90,
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontWeight:'bold',
          },
        }}
      >
        <HomeStack.Screen name = "Documents" component = {Documents} 
        options = {{
          title: 'Documents',
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

const HomeScreen = ({navigation}) => {
  return(
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Home Screen
      </Text>
      <Button 
        title = "Go to details screen"
        onPress = {() => navigation.navigate("Details")}
      />
    </View>
  )
}

const Details = () => {
  return(
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Details
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName = "Documents">
        <Drawer.Screen name = "Documents" component = {HomeStackScreen}/>
        <Drawer.Screen name = "Profile" component = {ProfileStackScreen}/>
      </Drawer.Navigator> */}
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "Details" component = {Details} />
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
