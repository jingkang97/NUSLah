import React from 'react';
import Home from "./Home"
import Profile from "./Profile"
import Forum from './Forum'
import Discover from './Discover'
import ModuleReview from './ModuleReview'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ForumStack = createStackNavigator();
const ModuleReviewStack = createStackNavigator();
const DiscoverStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Forum"
      activeColor="#39A0ED"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Forum"
        component={ForumStackScreen}
        options={{
          tabBarLabel: 'Forum',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubbles-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Module Review"
        component={ModuleReviewStackScreen}
        options={{
          tabBarLabel: 'Module Review',
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverStackScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color }) => (
            <Icon name="people-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
)

export default MainTabScreen;





const ForumStackScreen = ({navigation}) => (
    <ForumStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#39A0ED'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ForumStack.Screen name = "Forum" component = {Forum} 
      options={{
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {25}
          backgroundColor = "#39A0ED" onPress = {()=> navigation.openDrawer()}
          ></Icon.Button>
        )
      }}
      />
    </ForumStack.Navigator>
  );

  const ModuleReviewStackScreen = ({navigation}) => (
    <ModuleReviewStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#39A0ED'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ModuleReviewStack.Screen name = "Module Review" component = {ModuleReview} 
      options={{
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {25}
          backgroundColor = "#39A0ED" onPress = {()=> navigation.openDrawer()}
          ></Icon.Button>
        )
      }}
      />
    </ModuleReviewStack.Navigator>
  );

  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#39A0ED'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ProfileStack.Screen name = "Profile" component = {Profile} 
      options={{
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {25}
          backgroundColor = "#39A0ED" onPress = {()=> navigation.openDrawer()}
          ></Icon.Button>
        )
      }}
      />
    </ProfileStack.Navigator>
  );



const DiscoverStackScreen = ({navigation}) => (
    <DiscoverStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#39A0ED'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <DiscoverStack.Screen name = "Discover" component = {Discover} 
      options={{
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {25}
          backgroundColor = "#39A0ED" onPress = {()=> navigation.openDrawer()}
          ></Icon.Button>
        )
      }}
      />
    </DiscoverStack.Navigator>
  );
  
  