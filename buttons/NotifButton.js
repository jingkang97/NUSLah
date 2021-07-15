import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const NotifButton = () => {
    return (
        <Icon.Button name = "ios-notifications-outline" size = {25} 
        style = {{marginRight:-12}} color = "black"
        backgroundColor = "#F3F2F2" onPress = {() => {console.log('notif!')}}></Icon.Button>
    )
}
export default NotifButton;