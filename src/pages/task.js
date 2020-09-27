import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskCard from '../components/taskCard'
import TaskHeader from '../components/taskHeader'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class task extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <TaskHeader navigation={this.props.navigation}/>
          <View style={{marginTop:windowHeight/15}}>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </View>
          
      </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
      backgroundColor:'#ffbc66',
      flex:1,
      alignItems:'center',
    }
})
