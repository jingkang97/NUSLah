import React, { Component, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {SearchBar} from 'react-native-elements'
import TopTab from './TopTab'
import {NavigationContainer} from '@react-navigation/native';



const Forum = ({navigation}) => {

    const [search,setSearch] = useState()
    const updateSearch = (search) => {
        setSearch(search)
    }

    return ( 
        <SafeAreaView style = {{marginTop: 15, marginLeft: 5, marginRight: 5}}>
            <SearchBar placeholder = "Search"
            onChangeText={updateSearch}
            value = {search} 
            // lightTheme round
            platform="ios"
            // showCancel
            inputStyle = {{fontSize: 15}}
            searchIcon = {{size: 20}}
            // borderRadius = {30}
            // borderWidth = {10}
            inputContainerStyle = {{backgroundColor: 'white', borderRadius: 30, height: 10, borderWidth: 1, borderBottomWidth: 1}}
            containerStyle = {{backgroundColor:'#F3F2F2', borderTopColor:'#F3F2F2', borderBottomColor:'#F3F2F2', marginBottom: 50}}

            />
            <View style = {styles.container}>
            
            <Text>
                Forum
            </Text> 
            </View>
            
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
 
export default Forum;