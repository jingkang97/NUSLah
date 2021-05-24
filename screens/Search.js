import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

const Search = () => {
    return ( 
        <SafeAreaView styles = {styles.container}>
            <Text>
                Search
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
 
export default Search;