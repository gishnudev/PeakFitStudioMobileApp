import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import BmiCalScreen from '../screens/BmiCal';
import CalorieCalScreen from '../screens/CalorieCal';
import MacroScreen from '../screens/Macro';
import MicroScreen from '../screens/Micro';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="BmiCal" component={BmiCalScreen} />
        <Stack.Screen name="CalorieCal" component={CalorieCalScreen} />
        <Stack.Screen name="Macro" component={MacroScreen} />
        <Stack.Screen name="Micro" component={MicroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
