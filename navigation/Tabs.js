import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Documents from '../screens/Documents'
import Favourites from '../screens/Favourites'
import Search from '../screens/Search' 
import Icon from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return ( 
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name = "Documents" 
                component = {Documents} 
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
                <Tab.Screen 
                name = "Search" 
                component = {Search} 
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name = "search" color = {color} size = {26}/>
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
     );
}
 
export default Tabs;