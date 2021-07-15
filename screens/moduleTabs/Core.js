import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import {createStackNavigator} from '@react-navigation/stack';

const modules = createStackNavigator()


const Core = () => {

    const [reviews, setReviews] = useState()
    const {width, height} = Dimensions.get('screen')

    const getData = () => {
        // if testing on physical phone use ngrok http 3000 - need to install ngrok first
        // if testing on laptop simulator can use localhost 
        // axios.get('http://1bdfeb43ac18.ngrok.io')
        axios.get('http://localhost:3000')
        .then(res => {
            // const review = res.data[0].name
            const reviews = res.data
            // console.log(reviews)
            setReviews(reviews)
        })
    }
    useEffect(() => {
        getData()
    },[])

    return ( 
        <View style = {styles.container}>
            {/* flatlist need to use item */}
            <FlatList data = {reviews}
            renderItem={({item})=>(
                <View style = {styles.listItem}>
                    <View>
                    <Text> {item.name}</Text>
                    <Text> {item.email}</Text>
                    </View>

                    <Icon.Button name = "chevron-forward-outline" color = 'black'  backgroundColor= 'transparent'
                        onPress = {() => {() => {console.log('clicked!')}}}
                    />
                </View>
            )}
            >

            </FlatList>
            {/* <Text>Core</Text> */}
        </View>
     );
}



const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#F3F2F2',
        paddingTop: 20
        // margin: 10
    },
    listItem:{
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        borderRadius: 10
    }
})
 
export default Core;