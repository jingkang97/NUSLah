import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import AddButton from './AddButton';

import ForumHeader from '../header/ForumHeader';
import ModuleReviewHeader from '../header/ModuleReviewHeader';
import DiscoverHeader from '../header/DiscoverHeader';
import ProfileHeader from '../header/ProfileHeader';
import NavigationContainer from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { StylesProvider } from '@material-ui/styles';
import TopTab from './TopTab'
import None from './NoPage'
import { Row } from 'native-base';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (

    <Tab.Navigator
      initialRouteName="Forum"
      activeColor="#39A0ED"
    //   barStyle={{ backgroundColor: '#fff', padding: 10, borderRadius: 30}}
    //   labeled = {false}
    tabBarOptions = {{
        showLabel:false,
        style: {
            // height: 80,
            borderRadius: 30,
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
            padding: 10,
            paddingLeft: 25,
            paddingRight: 25
            
        },
        activeTintColor: '#39A0ED',
        inactiveTintColor: '#DBE2EF',
    }}
    >
      <Tab.Screen
        name="Forum"
        component={ForumStackScreen}
        options={{
          tabBarLabel: 'Forum',
          tabBarIcon: ({ color, focused }) => (
            <View style = {{justifyContent: 'center'}}>
                <View style = {
                    focused ? style.indicatorActive : style.indicatorNotActive
                }>
                </View>
                <Icon name="chatbubbles-outline" color={color} size={25}/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Module Review"
        component={TopTab}
        options={{
        
          tabBarLabel: 'Module Review',
          tabBarIcon: ({ color,focused }) => (
            <View style = {{justifyContent: 'center'}}>
                <View style = {
                    focused ? style.indicatorActive : style.indicatorNotActive
                }>
                </View>
                <Icon name="grid-outline" color={color} size={25}/>
            </View>
          ),
          
        }}
      />

        <Tab.Screen
                name="Action Button"
                component={ModuleReviewStackScreen}
                options={{
                tabBarIcon: ({focused}) => 
                  <View style = {{justifyContent: 'center',left: -30, top: -20}}>
                    <AddButton />
                  </View>
                }}
            />    
      <Tab.Screen
        name="Discover"
        component={DiscoverStackScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <View style = {{justifyContent: 'center'}}>
                <View style = {
                    focused ? style.indicatorActive : style.indicatorNotActive
                }>
                </View>
                <Icon name="people-outline" color={color} size={25}/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style = {{justifyContent: 'center'}}>
                <View style = {
                    focused ? style.indicatorActive : style.indicatorNotActive
                }>
                </View>
                <Icon name="person-outline" color={color} size={25}/>
            </View>
          ),
        }}
      />
    </Tab.Navigator>

    
)

export default MainTabScreen;

  const ForumStackScreen = ({navigation}) => (
    <ForumHeader />
  );

  const ModuleReviewStackScreen = ({navigation}) => (
    <ModuleReviewHeader />
  );

  const ProfileStackScreen = ({navigation}) => (
    <ProfileHeader />
  );

const DiscoverStackScreen = ({navigation}) => (
    <DiscoverHeader />
  );
  

  const style = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    indicatorActive:{
        borderRadius: 30,
        width: 40,
        height: 3,
        backgroundColor: '#39A0ED',
        marginBottom: 10,
        position: 'relative',
        top: -10,
        left: -8
    },
    indicatorNotActive:{
        width: 40,
        height: 3,
        backgroundColor: '#ffffff',
        marginBottom: 10,
        position: 'relative',
        top: -8,
        left: -8
    }
  })