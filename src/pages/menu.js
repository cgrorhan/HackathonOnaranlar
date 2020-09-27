import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import Rank from './rank';
import Task from './task';
import Rewards from './rewards';



const Tab = createBottomTabNavigator();

export default class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <Tab.Navigator initialRouteName="Task" activeColor="red" inactiveColor="#3e2465">
        <Tab.Screen name="Rank" component={Rank} options={{tabBarIcon:()=>(<Icon name='ribbon-sharp' style={{fontSize:26, color:'#ffbc66'}}/>)}}/>
        <Tab.Screen name="Task" component={Task} options={{tabBarIcon:()=>(<Icon name='hardware-chip-sharp' style={{fontSize:26, color:'#ffbc66'}}/>)}}/>
        <Tab.Screen name="Rewards" component={Rewards} options={{tabBarIcon:()=>(<Icon name='ios-basket' style={{fontSize:26, color:'#ffbc66'}}/>)}} />
     </Tab.Navigator>
    );
  }
}
