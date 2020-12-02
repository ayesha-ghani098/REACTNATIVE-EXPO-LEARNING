import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ImageBackground, Text, View, FlatList, ScrollView, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Home from './src/screens/Home';
import Contact from './src//screens/Contact';
import Navigation from './src/config/Navigation';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];



// REACT NATIVE UI CLASS
export default function App() {
  return (
<Navigation/>
//     <View >



//   map in reactnative
// {[1,2,3,4,5,6,7,8,9,10].map((v,i)=>{
//   return(
//       <View style={styles.card}>
// <Text>Ayesha Ghani</Text>
//       </View>

//   )
// })}




// instead of map
//   <FlatList
//         data={DATA}
//         renderItem={(data)=>{
//          return(
//           <View style={styles.card}>
//           <Text>{data.item.title}</Text>
//                 </View>
//          )
//         }}
//         keyExtractor={item => item.id}
//       />





//       Responsiveness using flex

//       <View style={styles.main1}>
//         <Text>HEADER</Text>
//       </View>
//       <View style={styles.main2}>
//         <View style={styles.boxes}>
//           <View style={styles.item}>
// <Text>item1</Text>
//           </View>
//           <View style={styles.item}>
//           <Text>item1</Text>
//          </View> 
//          <View style={styles.item}>
//          <Text>item1</Text>
//           </View>      
//           <View style={styles.item}>
//           <Text>item1</Text>
// </View> 
// <View style={styles.item}>
// <Text>item1</Text>
// </View> 
// <View style={styles.item}>
// <Text>item1</Text>
// </View> 
//         </View>
//       </View>
//       <View style={styles.main3}>
//       <Text>Footer</Text>
//       </View>




//       using text
//       <Text style={styles.text}>hello world</Text>




//       using image address
//      <Image style={styles.image}
//      source={{uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/2018_Toyota_Corolla_%28ZRE172R%29_Ascent_sedan_%282018-11-02%29_01.jpg"
//   }}/>



//      downloaded image
//      <Image style={styles.image}
//      source={require('./assets/pic-91.jpg')}
// />




//  secureTextEntry={true}  for password
//  default value
//  value="hello"
// <TextInput
// keyboardType={"default"} // keyboard type
// style={styles.input}
// placeholder="Enter value"
// onChangeText={(text)=> console.log(text)}
// />





// 1st way
// <Button
// title={"Click me"}
// onPress={()=>alert("hello world")}
// />





// 2nd way
//  for event same as onPress
// <TouchableOpacity
//  activeOpacity={0.8} 
//  style={styles.btn}>
//  <Text style={styles.btntext}>Click me</Text>
// </TouchableOpacity>
//     </View>
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text:{
//     fontSize: 48,
//     color: 'red'
//   },
//   image:{
// width: 300,
// height: 200,
// resizeMode: 'contain'
//   },
//   input:{
// borderColor: 'gray',
// borderWidth:1,
// width: "80%",
// backgroundColor: 'black',
// color: 'white'
//   },
//   btn:{
//     backgroundColor:'purple',
//     width: "60%",
//     height:50,
//     justifyContent: 'center',
//     alignItems:'center'
//   },
//   btntext:{
//     color: 'white',
//     fontSize:20
//   },
//   main1:{
//     backgroundColor:"green",
//     width:"100%",
//     flex:1
//   },
//   main2:{
//     backgroundColor:"blue",
//     width:"100%",
//     flex:6
//   },
//   main3:{
//     backgroundColor:"yellow",
//     width:"100%",
//     flex:1
//   },
//   boxes:{
//     marginTop: 10,
//     flexDirection: "row",
//     justifyContent:'space-around',
//     flexWrap:'wrap',
//     alignContent: 'center'

//   },
//   item:{
//     backgroundColor:'white',
//     width:200,
//     height:100,
//     marginBottom: 10
//   },
//   card:{
//     backgroundColor:"white",
//     width:"100%",
//     height: 150,
//     justifyContent:'center',
//     alignItems:'center',
//     shadowColor: "#000",
// shadowOffset: {
// 	width: 9,
// 	height: 1,
// },
// shadowOpacity: 1.92,
// shadowRadius: 7.46,
// elevation: 7,
//   }

// });
