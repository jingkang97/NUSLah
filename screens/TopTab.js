import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Core from './moduleTabs/Core'
import Electives from './moduleTabs/Electives'
import Unrestricted from './moduleTabs/Unrestricted'
import None from './NoPage'


const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    return ( 
        <Tab.Navigator >
            <Tab.Screen name = "Core" component = {Core}/>
            <Tab.Screen name = "Electives" component = {Electives}/>
            <Tab.Screen name = "Unrestricted" component = {Unrestricted}/>
        </Tab.Navigator>
     );
}

const MainScreenNavigator = createStackNavigator()

const MainScreen = () => {
    return ( 
        <MainScreenNavigator.Navigator>
            <MainScreenNavigator.Screen name = "Module Review" component = {Tabs}/>
        </MainScreenNavigator.Navigator>
     );
}
 


const HomeStackScreen = ({navigation}) => {
    return(
        <HomeStack.Navigator 
          screenOptions={{
            headerStyle:{
              backgroundColor: "#39A0ED",
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            },
          }}
        >
          <HomeStack.Screen name = "Home" component = {None} 
          options = {{
            headerTitle: "NUSLah",
            headerLeft: () => (
              <Icon.Button name="ios-menu" size = {25}
              backgroundColor="#39A0ED" onPress = {() => navigation.openDrawer()}>
              </Icon.Button>
            ),
            headerRight: () => (
              <View style = {{flexDirection: 'row'}}>
                <Icon.Button name = "ios-notifications-outline" size = {25} 
                style = {{marginRight:-12}}
                backgroundColor = "#39A0ED" onPress = {console.log('notif!')}></Icon.Button>
                <Icon.Button name = "ios-chatbox-ellipses-outline" size = {25} 
                backgroundColor = "#39A0ED" onPress = {console.log('message!')}></Icon.Button>
              </View>
            )
          }}/>
        </HomeStack.Navigator>
    )
  }

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
 
export default MainScreen;