import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';

const Module = ({navigation, route}) => {
    return ( 
        <View>
            <Text>
                
                {route.params.name}
            </Text>
        </View>
     );
}
 
export default Module;