import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Forum from '../screens/Forum';
import { Text, View } from 'react-native';
import ChatButton from '../buttons/ChatButton';
import NotifButton from '../buttons/NotifButton';

const ForumStack = createStackNavigator();

const ForumHeader = () => {
    return(
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
                  <NotifButton />
                  <ChatButton />
                </View>
              )
            }}
            />
          </ForumStack.Navigator>
    )
}

export default ForumHeader;