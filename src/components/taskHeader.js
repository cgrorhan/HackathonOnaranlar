import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class taskHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  addNewTaskButton=()=>{
    this.props.navigation.navigate('AddNewTaskPage')

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style={{width:windowWidth/12,height:windowHeight/23,marginLeft:'5%'}}
        source={{uri:'https://onaranlarkulubu.com/wp-content/uploads/2020/02/logo_onaranlarkulubu.png'}}
      /> 
        <Text style={{fontSize:24,fontWeight:'bold',color:'#ff9000'}}>TASKS</Text>
        <Icon onPress={this.addNewTaskButton} name='add-circle' color='#ff9000' style={{fontSize:26,marginRight:"5%"}}/>
        
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