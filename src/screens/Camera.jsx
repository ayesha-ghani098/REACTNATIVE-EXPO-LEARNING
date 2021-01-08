import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



// --------------------------------------------------//
// Import Camera module from expo camera
// after running command expo install expo-camera
//----------------------------------------------------//
import { Camera } from 'expo-camera';

// --------------------------------------------------//
// Import Media Library from expo 
// after running command expo install expo-media-library
//----------------------------------------------------//
import * as MediaLibrary from 'expo-media-library';

export default function CameraApp() {

// --------------------------------------------------//
// Take permission from user to allow camera
//----------------------------------------------------//
  const [hasPermission, setHasPermission] = useState(null);




// --------------------------------------------------//
// set camera type front or back 
//----------------------------------------------------//
  const [type, setType] = useState(Camera.Constants.Type.back);



// --------------------------------------------------//
// Flash value 
//----------------------------------------------------//  
// const [flash, setFlash] = useState(null);


// --------------------------------------------------//
// Reference
//----------------------------------------------------//  
const camera = useRef(null);


// --------------------------------------------------//
// useeffect functionn to take  permission and set value
//----------------------------------------------------// 
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const { library } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  // --------------------------------------------------//
// take picture function
//----------------------------------------------------// 
const take_photo = async ()=>{
  let photo = await camera.current.takePictureAsync();
console.log("photo",photo);
  // --------------------------------------------------//
// Save picture in gallery
//----------------------------------------------------// 
await MediaLibrary.saveToLibraryAsync(photo.uri);
}


  return (
    // ----Camera Container------//
    <View style={styles.container}>
      <Camera style={styles.camera} ref={camera} flashMode={Camera.Constants.FlashMode.auto} type={type}>
        {/*---Type Button Container---*/}
        <View style={styles.buttonContainer}>
          {/*--Flip Button---*/} 
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
           {/*--Take Photo Button Button---*/} 
             <TouchableOpacity
            style={styles.button}
            onPress={() => 
          take_photo()
            }>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create( {
 container:{
        flex:1,
    },
    camera:{
      flex:1
    },
    buttonContainer:{
flex:1,
backgroundColor:'transparent',
flexDirection:'row',
    },
    button:{
flex:1,
alignSelf:'flex-end',
alignItems:'center',
    },
    text:{
 fontSize: 30,
 color: "white",
    }


}); 