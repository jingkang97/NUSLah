import React from 'react';
import Home from "./Home"
import Profile from "./Profile"
import Forum from './Forum'
import Discover from './Discover'
import ModuleReview from './ModuleReview'
import { StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import AddButton from './AddButton';
import NavigationContainer from '@react-navigation/native'


import Message from './Message'

import Icon from 'react-native-vector-icons/Ionicons'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { StylesProvider } from '@material-ui/styles';
import TopTab from './TopTab'
import None from './NoPage'
import { Row } from 'native-base';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ForumStack = createStackNavigator();
const ModuleReviewStack = createStackNavigator();
const DiscoverStack = createStackNavigator();
const MessageStack = createStackNavigator();


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
    <ForumStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#F3F2F2',
        shadowColor: 'transparent',
        // height: 110
      },
      headerTintColor: '#F3F2F2',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <MessageStack.Screen name = "MessageStack" component = {Message}/>

      <ForumStack.Screen name = "Forum" component = {Forum} 
      options={{
        headerTitle: "NUSLah",
        headerStatusBarHeight: 60,
        headerTintColor: 'transparent',
        headerLeft: () => (
          // <Icon.Button name = "ios-menu" size = {30} color = "black"
          // backgroundColor = "#F3F2F2" onPress = {()=> navigation.openDrawer()}/>
          <View style = {{flexDirection: "row", paddingLeft: 10, height: 50, left: 10}}>
            <Text style = {{fontSize : 30, fontWeight: '500'}}>NUS</Text><Text style = {{fontSize : 30, color: '#39A0ED',fontWeight: '500'}}>Lah</Text>
          </View>
        ),
        headerRight: () => (
          <View style = {{flexDirection: 'row'}}>
            <Icon.Button name = "ios-notifications-outline" size = {25} 
            style = {{marginRight:-12}} color = "black"
            backgroundColor = "#F3F2F2" onPress = {console.log('notif!')}></Icon.Button>
            <Icon.Button name = "ios-chatbox-ellipses-outline" size = {25} 
            color = "black"
            backgroundColor = "#F3F2F2" onPress = {() => navigation.navigate("MessageStack")}></Icon.Button>
          </View>
        )
      }}
      />

    </ForumStack.Navigator>
  );

  const ModuleReviewStackScreen = ({navigation}) => (
    <ModuleReviewStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#F3F2F2',
        shadowColor: 'transparent',
      },
      headerTintColor: '#F3F2F2',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ModuleReviewStack.Screen name = "Module Review" component = {ModuleReview} 
      options={{
        headerTitle: "NUSLah",
        headerStatusBarHeight: 60,
        headerTintColor: 'transparent',
        headerLeft: () => (
          // <Icon.Button name = "ios-menu" size = {30} color = "black"
          // backgroundColor = "#F3F2F2" onPress = {()=> navigation.openDrawer()}/>
          <React.Fragment>
          <View style = {{flexDirection: "row", paddingLeft: 10, height: 50, left: 10}}>
            <Text style = {{fontSize : 30, fontWeight: '500'}}>NUS</Text><Text style = {{fontSize : 30, color: '#39A0ED',fontWeight: '500'}}>Lah</Text>
          </View>
          </React.Fragment>

        ),
        headerRight: () => (
          <View style = {{flexDirection: 'row'}}>
            <Icon.Button name = "ios-notifications-outline" size = {25} 
            style = {{marginRight:-12}} color = "black"
            backgroundColor = "#F3F2F2" onPress = {console.log('notif!')}></Icon.Button>
            <Icon.Button name = "ios-chatbox-ellipses-outline" size = {25} 
            color = "black"
            backgroundColor = "#F3F2F2" onPress = {console.log('message!')}></Icon.Button>
          </View>
        )
      }}
      ></ModuleReviewStack.Screen>
      
    </ModuleReviewStack.Navigator>
  );

  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#F3F2F2',
        shadowColor: 'transparent',
      },
      headerTintColor: '#F3F2F2',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ProfileStack.Screen name = "Profile" component = {Profile} 
      options={{
        headerTitle: "NUSLah",
        headerStatusBarHeight: 60,
        headerTintColor: 'transparent',
        headerLeft: () => (
          // <Icon.Button name = "ios-menu" size = {30} color = "black"
          // backgroundColor = "#F3F2F2" onPress = {()=> navigation.openDrawer()}/>
          <View style = {{flexDirection: "row", paddingLeft: 10, height: 50, left: 10}}>
            <Text style = {{fontSize : 30, fontWeight: '500'}}>NUS</Text><Text style = {{fontSize : 30, color: '#39A0ED',fontWeight: '500'}}>Lah</Text>
          </View>
        ),
        headerRight: () => (
          <View style = {{flexDirection: 'row'}}>
            <Icon.Button name = "ios-notifications-outline" size = {25} 
            style = {{marginRight:-12}} color = "black"
            backgroundColor = "#F3F2F2" onPress = {console.log('notif!')}></Icon.Button>
            <Icon.Button name = "ios-chatbox-ellipses-outline" size = {25} 
            color = "black"
            backgroundColor = "#F3F2F2" onPress = {console.log('message!')}></Icon.Button>
          </View>
        )
      }}
      />
    </ProfileStack.Navigator>
  );



const DiscoverStackScreen = ({navigation}) => (
    <DiscoverStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#F3F2F2',
        shadowColor: 'transparent',
      },
      headerTintColor: '#F3F2F2',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <DiscoverStack.Screen name = "Discover" component = {Discover} 
      options={{
        headerTitle: "NUSLah",
        headerStatusBarHeight: 60,
        headerTintColor: 'transparent',
        headerLeft: () => (
          // <Icon.Button name = "ios-menu" size = {30} color = "black"
          // backgroundColor = "#F3F2F2" onPress = {()=> navigation.openDrawer()}/>
          <View style = {{flexDirection: "row", paddingLeft: 10, height: 50, left: 10}}>
            <Text style = {{fontSize : 30, fontWeight: '500'}}>NUS</Text><Text style = {{fontSize : 30, color: '#39A0ED',fontWeight: '500'}}>Lah</Text>
          </View>
        ),
        headerRight: () => (
          <View style = {{flexDirection: 'row'}}>
            <Icon.Button name = "ios-notifications-outline" size = {25} 
            style = {{marginRight:-12}} color = "black"
            backgroundColor = "#F3F2F2" onPress = {console.log('notif!')}></Icon.Button>
            <Icon.Button name = "ios-chatbox-ellipses-outline" size = {25} 
            color = "black"
            backgroundColor = "#F3F2F2" onPress = {console.log('message!')}></Icon.Button>
          </View>
        )
      }}
      />
    </DiscoverStack.Navigator>
  );
  
  
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