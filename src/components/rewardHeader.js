import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class rewardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{width:windowWidth/12,height:windowHeight/23,marginLeft:'5%'}}
        source={{uri:'https://onaranlarkulubu.com/wp-content/uploads/2020/02/logo_onaranlarkulubu.png'}}
      /> 
        <Text style={{fontSize:24,fontWeight:'bold',color:'#ff9000'}}>REWARDS</Text>
        <View  style={{marginRight:"10%"}}></View>
        
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight/20,
        backgroundColor:'#FFFFFF',
        position: 'absolute',
        top: 0, 
        flex: 1, 
        alignSelf: 'stretch', 
        right: 0, 
        left: 0,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    }
 })