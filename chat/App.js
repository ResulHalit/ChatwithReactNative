import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen'; //dikkat
import RegisterScreen from '../screen/RegisterScreen'; //dikkat
import ChatScreen from '../screen/ChatScreen';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Chat" component={ChatScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};