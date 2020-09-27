import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import RewardHeader from '../components/rewardHeader'
import RewardCard from '../components/rewardCard'
export default class rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <RewardHeader/>
          <View style={{marginTop:'15%'}}>
            <View style={{flexDirection:'row'}}>
              <RewardCard/>
              <RewardCard/>
            </View>

            <View style={{flexDirection:'row', marginTop:'5%',marginBottom:'5%'}}>
              <RewardCard/>
              <RewardCard/>
            </View>

            <View style={{flexDirection:'row'}}>
              <RewardCard/>
              <RewardCard/>
            </View>
          </View>
          
      </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
      backgroundColor:'#ffbc66',
      flex:1,
      alignItems:'center'
    },
})



