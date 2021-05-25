import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Animated, LogBox} from 'react-native'
import {FontAwesome5, Feather} from '@expo/vector-icons'
import Icons from 'react-native-vector-icons/Ionicons'
import OctIcons from 'react-native-vector-icons/Octicons'


// create-outline


export default class AddButton extends React.Component {
    buttonSize = new Animated.Value(1)
    mode = new Animated.Value(0)

    handlePress = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize,{
                toValue: 0.95,
                duration: 90,
                useNativeDriver: false
            }),
            Animated.timing(this.buttonSize,{
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(this.mode,{
                toValue: this.mode._value === 1 ? 0 : 1,
                duration: 100,
                useNativeDriver: false
            })
        ]).start();
    }

    render() {
        const sizeStyle = {
            transform: [{scale: this.buttonSize}]
        }
        const rotation = this.mode.interpolate({
            inputRange: [0,1],
            outputRange: ["0deg", "45deg"]
        })

        const reviewX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [9,-50]
        })

        const reviewY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [10,-50]
        })

        const reviewTextX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-9,-70]
        })

        const reviewTextY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [25,-80]
        })

        const discussX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [9,50]
        })

        const discussY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [10,-50]
        })

        const discussTextX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-8,45]
        })

        const discussTextWidth = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [50,90]
        })

        const discussTextY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [20,-80]
        })

        return (
        <View style = {{position: "absolute", alignItems:"center"}}>
            <Animated.View style = {{position: "absolute", width: discussTextWidth, left: discussTextX, top: discussTextY}}>
                <View style = {style.discussText}>
                    <Text style = {{fontSize: 10}}>Add Discussion</Text>
                </View>
            </Animated.View>
            <Animated.View style = {{position: "absolute", left: discussX, top: discussY}}>
                
                <View style = {style.secondaryButton}>
                    <Icons name = "create-outline" size={30} color = "#39A0ED"/>
                </View>
            </Animated.View>
            <Animated.View style = {{position: "absolute", left: reviewTextX, top: reviewTextY}}>
                <View style = {style.reviewText}>
                    <Text style = {{fontSize: 10}}>Add Review</Text>
                </View>
            </Animated.View>
            <Animated.View style = {{position: "absolute", left: reviewX, top: reviewY}}>
                <View style = {style.secondaryButton}>
                    <OctIcons name = "checklist" size={30} color = "#39A0ED"/>
                </View>
            </Animated.View>
            <Animated.View style = {[style.button,sizeStyle]}>
                <TouchableHighlight onPress = {this.handlePress} underlayColor = "#39A0ED" style = {{height: 70, width: 70, borderRadius: '50%'}}>
                    <Animated.View style = {{transform: [{rotate: rotation}]}}>
                        {console.log()}
                        <View style = {{height: 70, width: 70, alignItems: 'center',justifyContent: "center", borderRadius: '50%'}}>
                            <FontAwesome5 name = "plus" size = {25} color = "#FFF"/>
                        </View>
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
        // top: -30,
        left: -10,
        shadowColor: "#39A0ED",
        shadowRadius: 5,
        shadowOffset: {height: 5, width: 5},
        shadowOpacity: 0.6,
    },
    secondaryButton: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50, 
        borderRadius: 50, 
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: {height: 6},
        shadowOpacity: 0.2,

    },
    reviewText: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 20, 
        borderRadius: 20, 
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: {height: 6},
        shadowOpacity: 0.2,
    },
    discussText: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // width: 90,
        height: 20, 
        borderRadius: 20, 
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: {height: 6},
        shadowOpacity: 0.2,

    }
    
  })