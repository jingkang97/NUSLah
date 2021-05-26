import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const ChatButton = () => {
    return (
        <Icon.Button name = "ios-chatbox-ellipses-outline" size = {25} 
        color = "black"
        backgroundColor = "#F3F2F2" onPress = {console.log('message!')}></Icon.Button>
    )
}

export default ChatButton;