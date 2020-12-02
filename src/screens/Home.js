import React from 'react';
import { StyleSheet, View, Text,Button} from 'react-native';

function Home(props){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
Home
            </Text>
            <Button
            title="About"
            onPress={() => props.navigation.navigate('About',{
                name: "Ayesha Ghani"
            })}
            />
             <Button
            title="Contact"
            // passing parameter
            onPress={() => props.navigation.navigate('Contact')}
            />
           
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize: 30
    }
})

export default Home;