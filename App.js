import React from 'react';
import {StyleSheet,View,Text,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import AddNewTaskPage from './src/pages/addNewTask'
import Menu from './src/pages/menu'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: () => React$Node = () => {


  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown:false}}>
          <Stack.Screen name="AddNewTaskPage" component={AddNewTaskPage} />
          <Stack.Screen name="Menu" component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
 
});

export default App;
