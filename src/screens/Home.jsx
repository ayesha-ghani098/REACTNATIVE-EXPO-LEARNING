import React from 'react';
import { StyleSheet, View, Text,Button} from 'react-native';

function Home(props){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Button style={styles.btn}
          title="About"
          onPress={() =>
            props.navigation.navigate("About", {
              name: "Ayesha Ghani",
            })
          }
        />
        <Button style={styles.btn}
          title="Contact"
          // passing parameter
          onPress={() => props.navigation.navigate("Contact")}
        />
        <Button style={styles.btn}
          title="Camera"
          // passing parameter
          onPress={() => props.navigation.navigate("CameraApp")}
        />
            <Button style={styles.btn}
          title="Open Gallery"
          // passing parameter
          onPress={() => props.navigation.navigate("PhotoPicker")}
        />
            <Button style={styles.btn}
          title="Show Map"
          // passing parameter
          onPress={() => props.navigation.navigate("Map")}
        />
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize: 60
    },
    // btn:{
    //   backgroundColor:'black',
    //   color:'black'
    // }
})

export default Home;