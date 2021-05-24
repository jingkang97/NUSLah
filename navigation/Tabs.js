import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Favourites from '../screens/Favourites'
import Icon from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const Tabs = () => {
    
    return ( 
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name = "Home" 
                component = {Home} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name = "documents-outline" color = {color} size = {26}/>
                    ),
                }}
                />
                <Tab.Screen 
                name = "Favourites" 
                component = {Favourites} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name = "bookmark-outline" color = {color} size = {26}/>
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
     );
}
 
export default Tabs;