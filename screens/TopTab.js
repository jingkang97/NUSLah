import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Core from './moduleTabs/Core'
import Electives from './moduleTabs/Electives'
import Unrestricted from './moduleTabs/Unrestricted'
import None from './NoPage'
import Icon from 'react-native-vector-icons/Ionicons'
import NotifButton from '../buttons/NotifButton'
import {SearchBar} from 'react-native-elements'
import { Navigation } from '@material-ui/icons';
import Module from './moduleTabs/Module'

import axios from 'axios';




const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    const totalWidth = Dimensions.get("screen").width;

    return ( 
        <Tab.Navigator 
        activeColor="#39A0ED"
        tabBarOptions = {{
            style: {backgroundColor: '#F3F2F2',shadowColor: 'transparent'},
            activeTintColor: '#39A0ED',
            inactiveTintColor: '#A5A5A5',
            labelStyle: { fontSize: 15, textTransform: "sentencecase"},
            indicatorStyle: {width: totalWidth / 4, borderRadius: 50, left:totalWidth/22}
            }}>
            <Tab.Screen name = "Core" component = {Core} 
                options={{
                    tabBarLabel: ({focused}) => (
                        <View style = {{width: 35, lignContent:'center', justifyContent:'center', flex :1}}>
                            <Text style = {focused? {fontWeight:"bold", color: '#39A0ED'}:{color: '#A5A5A5'}}>
                                    Core
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name = "Electives" component = {Electives}
            options={{
                tabBarLabel: ({focused}) => (
                    <View style = {{width: 64, lignContent:'center', justifyContent:'center', flex :1}}>
                        <Text style = {focused? {fontWeight:"bold", color: '#39A0ED'}:{color: '#A5A5A5'}}>
                                Electives
                        </Text>
                    </View>
                )
            }}
            />
            <Tab.Screen name = "Unrestricted" component = {Unrestricted}
            options={{
                tabBarLabel: ({focused}) => (
                    <View style = {{width: 87, lignContent:'center', justifyContent:'center', flex :1}}>
                        <Text style = {focused? {fontWeight:"bold", color: '#39A0ED'}:{color: '#A5A5A5'}}>
                                Unrestricted
                        </Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
     );
}

const MainScreenNavigator = createStackNavigator()

const Test = () =>{
    return(
        <View>
            <Text>HIHIHI</Text>
        </View>
    )
}


const MainScreen = ({navigation}) => {
    const [search,setSearch] = useState()
    const updateSearch = (search) => {
        setSearch(search)
    }
    return ( 
        <MainScreenNavigator.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#F3F2F2",
                    shadowColor: 'transparent'
                }
            }}
        >
            <MainScreenNavigator.Screen name = "Module Review" component = {Tabs}
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
                    <NotifButton />
                    <Icon.Button name = "ios-chatbox-ellipses-outline" size = {25} 
                    color = "black"
                    backgroundColor = "#F3F2F2" onPress = {() => navigation.navigate("Test")}></Icon.Button>
                  </View>
                ),
              }}
            />
            <MainScreenNavigator.Screen name = "Module" component = {Module} 
                options={
                    {title:'',
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                    

                }                    
                }
            />
            {/* <MainScreenNavigator.Screen name = "Test" component = {Test}/> */}
        </MainScreenNavigator.Navigator>
     );
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