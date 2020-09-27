import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import RankCard from '../components/rankCard'
import RankHeader from '../components/rankHeader';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
          <RankHeader/>
          <View style={{marginTop:windowHeight/15}}>
            <RankCard/>
            <RankCard/>
            <RankCard/>

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
    }
})