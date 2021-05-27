import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import { Text, View } from 'react-native';
import ChatButton from '../buttons/ChatButton';
import NotifButton from '../buttons/NotifButton';

const ProfileStack = createStackNavigator();

const ProfileHeader = () => {
    return(
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
                    <NotifButton />
                    <ChatButton />
                </View>
                )
            }}
            />
        </ProfileStack.Navigator>
    )
}

export default ProfileHeader;