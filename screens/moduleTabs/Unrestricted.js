import React from 'react';
import { StyleSheet, Text, SafeAreaView, View} from 'react-native';

const Unrestricted = () => {
    return ( 
        <View style = {styles.container}>
            <Text>
                Unrestricted 
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
export default Unrestricted;