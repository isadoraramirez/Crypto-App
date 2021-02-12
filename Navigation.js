import React from 'react';
import { Image } from 'react-native';
import {Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OptionsStack from './src/components/Stack';
import Login from './src/components/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './src/res/colors'
const Tabs = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>

      <Text style={styles.title}></Text>
      <Tabs.Navigator
      tabBarOptions={{
        tintColor: "#fefefe",
        style: {
          backgroundColor: Colors.blackPearl
        }
      }}
      >

        <Tabs.Screen
        name="Opciones"
          component={OptionsStack}
          options={{
            tabBarIcon: ({size,color}) =>(
             <Image 
             style={{ tintColor:color,width:size, height:size}}
             source= {require('./src/assets/bank.png')}
             />
            )
          }}
        />
      </Tabs.Navigator>
     
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color:'black'}
  })

export default Navigation;
