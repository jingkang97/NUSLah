import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Module from './Module'

const Stack = createStackNavigator()

const ModuleStack = () => {
    return(
        // <NavigationContainer independent={true}>
            <Stack.Navigator 
            // mode="modal"
            screenOptions={{
                headerShown: false
            }} 
  initialRouteName="Modules">
                <Stack.Screen name="Modules" component={Core}/>
                <Stack.Screen 
                
                name="Module" component={Module}/>
                
            </Stack.Navigator>
        // </NavigationContainer>
    )
}



const Core = ({navigation}) => {

    const [reviews, setReviews] = useState()
    const {width, height} = Dimensions.get('screen')
    
    const getData = () => {
        // if testing on physical phone use ngrok http 3000 - need to install ngrok first
        // if testing on laptop simulator can use localhost 
        // axios.get('http://1bdfeb43ac18.ngrok.io')
        axios.get('http://localhost:5000/modules')
        .then(res => {
            // console.log(res.data[0].title)
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
            
            <FlatList 
            keyExtractor={item=>item.id}
            data={reviews}
                renderItem={({item})=>(
                    
                    <View key={item.id} style = {styles.listItem}>
                    <View>
                    <Text style={{fontWeight: 'bold', marginBottom: 10}}>{item.moduleCode} {item.title}</Text>
                    <Text>{item.moduleCredit} MCs <Text style={{ fontSize: '20', fontWeight:'bold'}}>·</Text> {item.sem1 && item.sem2 ? <Text>Offered in Sem 1 and 2</Text> : (item.sem1 ? <Text>Offered in Sem 1</Text> : (item.sem2 ? <Text>Offered in Sem 2</Text>:null))}</Text>
                    </View>

                    <Icon.Button name = "chevron-forward-outline" color = 'black'  backgroundColor= 'transparent'
                        // onPress = {()=>{console.log('module!')}}
                        onPress = {()=>navigation.push('Module',{name: item.title})}

                    />
                </View>
                )}
            />
            
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
        padding: 5,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        backgroundColor: "#FFF",
        width: "90%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        borderRadius: 10
    }
})
 
export default ModuleStack;