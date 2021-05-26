import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

const ModuleReview = ({navigation}) => {
    return ( 
        <SafeAreaView style = {styles.container}>
            <Text>
                Module Review
            </Text> 
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
 
export default ModuleReview;