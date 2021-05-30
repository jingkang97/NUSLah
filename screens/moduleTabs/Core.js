import React , {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View, Dimensions} from 'react-native';
import axios from 'axios';



const Core = () => {

    const [reviews, setReviews] = useState()
    const {width, height} = Dimensions.get('screen')

    const getData = () => {
        axios.get('http://localhost:3000')
        .then(res => {
            const review = res.data[0].name
            const reviews = res.data
            // console.log(reviews)
            setReviews(reviews)
        })
    }
    useEffect(() => {
        // getData()
    })

    return ( 
        <View style = {styles.container}>
            <Text>
                Core
                {reviews.map((review,index)=>(
                    <p key = {index}>{review.name}</p>
                ))}
            </Text>
        </View>
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
 
export default Core;