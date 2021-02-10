import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OptionsStack from './src/components/Stack';
const App = () => {
  return (
    <NavigationContainer>
      <Text style={styles.title}>Navigation Container</Text>
      <OptionsStack/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color:'black'}
  })

// import {Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native';
// import Logo from './assets/logo.png';

// const App = () => {
//   return (
//      <View style={styles.container}>
//        <Image 
//          source={Logo}
//          style={styles.image}
//          />
//        <Text style={styles.title}>Bienvenido</Text>
//        <Button
//         color="pink"
//         title="Recarga"
//         onPress={() => Alert.alert('Hola BB')}
//       />
//       <TouchableOpacity
//       onPress={() => Alert.alert('GATITO')}
//       >
//         <Text>tocame</Text>
//       </TouchableOpacity>
//      </View>
//   );
// };

// const styles = StyleSheet.create({
//   container:{flex: 1, 
//     justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: "#9932cc",
//   },
//   title: {
//     fontSize: 30,
//     color:'#fff'
//   },
//   image: {
//     height:400, 
//     width:300,},
// })

export default App;
