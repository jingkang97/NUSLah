import React from 'react';
import Home from "./Home"
import Profile from "./Profile"
import Forum from './Forum'
import Discover from './Discover'
import ModuleReview from './ModuleReview'
import { StyleSheet, Text, SafeAreaView, View, Button, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'


import Icon from 'react-native-vector-icons/Ionicons'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { StylesProvider } from '@material-ui/styles';


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ForumStack = createStackNavigator();
const ModuleReviewStack = createStackNavigator();
const DiscoverStack = createStackNavigator();

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
        component={ModuleReviewStackScreen}
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
                component={HomeStackScreen}
                options={{
                tabBarIcon: ({ focused }) => (
                    <TouchableOpacity style = {{
                        ...style.shadow
                    }}>
                        <View style = {{
                            left: -6,
                            top: -30,
                            width: 60,
                            height: 60,
                            backgroundColor: '#39A0ED',
                            borderRadius: '50%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image source = {require('../assets/add-outline.png')}
                    // resizeMode="contain"
                    style={{
                        width: 40,
                        height: 40,
                        tintColor:'#fff',
                        
                    }}
                    />
                        </View>
                    </TouchableOpacity>  
                ),
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
        backgroundColor: '#39A0ED'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ForumStack.Screen name = "Forum" component = {Forum} 
      options={{
        headerTitle: "NUSLah",
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
        headerTitle: "NUSLah",
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
        headerTitle: "NUSLah",
        headerLeft: () => (
            <View>
                {/* <Text>NUSLah</Text> */}
                <Icon.Button name = "ios-menu" size = {25}
                    backgroundColor = "#39A0ED" onPress = {()=> navigation.openDrawer()}
                ></Icon.Button>
            </View> 
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
        headerTitle: "NUSLah",
        headerLeft: () => (
          <Icon.Button name = "ios-menu" size = {25}
          backgroundColor = "#39A0ED" onPress = {()=> navigation.openDrawer()}
          ></Icon.Button>
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
          <HomeStack.Screen name = "Home" component = {Home} 
          options = {{
            headerTitle: "NUSLah",
            headerLeft: () => (
              <Icon.Button name="ios-menu" size = {25}
              backgroundColor="#39A0ED" onPress = {() => navigation.openDrawer()}>
              </Icon.Button>
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