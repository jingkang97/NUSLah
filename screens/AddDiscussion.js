import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

const AddDiscussion = () => {
    return ( 
        <SafeAreaView styles = {styles.container}>
            <Text>
                Add your Discussion!
            </Text> 
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
 
export default AddDiscussion;