import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Animated} from 'react-native'
import {FontAwesome5, Feather} from '@expo/vector-icons'


export default class AddButton extends React.Component {
    buttonSize = new Animated.Value(1)
    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize,{
                toValue: 0.95,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(this.buttonSize,{
                toValue: 1,
                useNativeDriver: true
            })
        ]).start();
    }

    render() {
        const sizeStyle = {
            transform: [{scale: this.buttonSize}]
        }
        return (
        <View style = {{position: "absolute", alignItems:"center"}}>
            <Animated.View style = {[style.button, sizeStyle]}>
                <TouchableHighlight onPress = {this.handlePress} underlayColor = "#39A0ED">
                    <Animated.View>
                        <FontAwesome5 name = "plus" size = {24} color = "#FFF"/>
                    </Animated.View>
                </TouchableHighlight>
            </Animated.View>
        </View>
        )
    }
}

//<Image source = {require('../assets/add-outline.png')}



const style = StyleSheet.create({
    button: {
        backgroundColor: "#39A0ED",
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        top: -30,
        shadowColor: "#39A0ED",
        shadowRadius: 5,
        shadowOffset: {height: 10},
        shadowOpacity: 0.3,
    },
    
  })