import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Signup from './src/screens/Signup/Index';
import Signin from './src/screens/Signin/Index';
import Home from './src/screens/Home/Index';
import ForgetPassword from './src/screens/ForgetPassword/Index';
import ConfirmEmail from './src/screens/ConfirmReset/Index';

const Stack = createStackNavigator();

function MyStack() {
  if(localStorage.getItem("@Firestore:user") != null){
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    )
    } else {
      return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForegetPassword" component={ForgetPassword} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    ) 
  }
}

export default function App() {
  return (
    <NavigationContainer>
      
      <MyStack />
    </NavigationContainer>
  );
}