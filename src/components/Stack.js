import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './Screen';
import Balance from './Balance'
import colors from '../res/colors';

const Stack = createStackNavigator();

const OptionsStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.blackPearl
            },
            headerTintColor:colors.white
        }}
        >

        <Stack.Screen name="Stack" component={Screen}/>
        <Stack.Screen name="Balance" component={Balance}/>

        </Stack.Navigator>
    );

}

export default OptionsStack;