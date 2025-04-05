import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RouteKey} from "../core/typing/enums/navigator.ts";
import { HomeScreen } from "../screens/HomeScreen.tsx";
import { AddTaskScreen } from '../screens/AddTaskScreen.tsx';


const Stack = createNativeStackNavigator();
export const AppNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name={RouteKey.HomeScreen} component={HomeScreen}/>
      <Stack.Screen name={RouteKey.AddTaskScreen} component={AddTaskScreen}/>
    </Stack.Navigator>
  );
}