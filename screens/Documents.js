import { Navigation } from '@material-ui/icons';
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Documents = ({navigation}) => {
    return ( 
        <SafeAreaView style = {styles.container}>
            <Text>
                Documents
            </Text> 
            <Button 
            title = "Go to details screen"
            onPress={()=> navigation.navigate("Profile")}
            />
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
 
export default Documents;