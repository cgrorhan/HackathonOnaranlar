import React, { Component } from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class rankCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
            <View>
                <Image style={styles.image} source={{uri:'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}}/>
            </View>
            <View style={{marginLeft:'10%'}}>
                <Text style={{fontSize:14,fontWeight:'bold'}}>ÇAĞRI ORHAN</Text>
                <Text style={{color:'#B8C1CC', fontSize:12}}>Occupation</Text>
            </View>
        </View>

        <View style={{flexDirection:'row', marginTop:'2%'}}>
            <Text style={{color:'#ffbc66'}}> 490</Text>
            <Icon style={{paddingTop:'1%',  }} name="hammer" color='#ff9000'/>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'space-between',
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginBottom:10,
        padding:10,
        width:windowWidth/1.1,
        flexDirection:'row'
    },
    image:{
        width:windowHeight/16,
        height:windowHeight/16,
        borderRadius:16
    }
})