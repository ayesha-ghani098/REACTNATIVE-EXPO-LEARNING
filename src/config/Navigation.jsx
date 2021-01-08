import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/screens/Home';
import About from '../../src/screens/About';
import Contact from '../../src/screens/Contact';
import CameraApp from "../screens/Camera";
import PhotoPicker from "../screens/Gallery";
import Map from '../screens/Map';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title:"My home screen",
        headerStyle:{
            backgroundColor:"#fff"
        },
        headerTitle: props => <Image style={{resizeMode:'contain',height:100,width:60}} source={{uri:'https://download.logo.wine/logo/Google/Google-Logo.wine.png'}} />
         }} name="Home" component={Home} />
        <Stack.Screen  name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="CameraApp" component={CameraApp} />
         <Stack.Screen name="PhotoPicker" component={PhotoPicker} />
  <Stack.Screen name="Map" component={Map} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;