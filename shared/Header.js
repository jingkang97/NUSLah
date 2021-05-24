import React from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Header = () => {
    return ( 
        <SafeAreaView styles = {styles.header}>
            {/* icon for menu */}
            <View>
                <Text style = {styles.headerText}>
                </Text>
            </View>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    header: {
        // width: '100%',
        height: 200,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 30,
        color: "#000000",
        letterSpacing: 1
    }
})


export default Header;

