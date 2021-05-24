import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

const Favourites = () => {
    return ( 
        <SafeAreaView styles = {styles.container}>
            <Text>
                Favourites
            </Text> 
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
 
export default Favourites;