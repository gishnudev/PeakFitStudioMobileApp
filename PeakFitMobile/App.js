import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import NextScreen from "./src/screens/NextScreen";
import BmiCalScreen from './src/screens/BmiCal';
import CalorieCalScreen from './src/screens/CalorieCal';
import MacroScreen from './src/screens/Macro';
import MicroScreen from './src/screens/Micro';
import GoalSetScreen from './src/screens/GoalSet'
import LoginScreen from './src/screens/Login'
import Sign from "./src/screens/Sign";
import ProfileScreen from "./src/screens/Profile";
import PricingScreen from './src/screens/PricingScreen'
import PaymentScreen from "./src/screens/handlePayment";
import EditProfile from "./src/screens/EditProfile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="BmiCal" component={BmiCalScreen} />
        <Stack.Screen name="CalorieCal" component={CalorieCalScreen} />
        <Stack.Screen name="Macro" component={MacroScreen} />
        <Stack.Screen name="Micro" component={MicroScreen} />
        <Stack.Screen name="GoalSet" component={GoalSetScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Pricing" component={PricingScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
