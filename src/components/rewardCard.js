import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Dimensions } from 'react-native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class rewardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#ffbc66', fontWeight:'bold', fontSize:15}}>by A-company</Text>
        <Image style={styles.image} source={require('../image/catFood.png')}></Image>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'grey', marginRight:'6%'}}>1000</Text>
            <Icon style={{paddingTop:'1%',marginTop:'1%'  }} name="hammer" color='#ff9000'/>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:8,
        width:windowWidth/3,
        height:windowHeight/6,
        marginHorizontal:'5%'
    },
    image:{
        width:windowWidth/5,
        height:windowHeight/13
    }
})