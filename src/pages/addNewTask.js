import React, { Component } from 'react';
import { View, Text,StyleSheet,Picker,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from "react-native-vector-icons/Ionicons";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class addNewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      description:'',
      priority:'',
      longitude:'',
      latitude:'',
      image:'',
      locationConfirm:''

    };
  }
  getCurrentLocation=()=>{
    Geolocation.getCurrentPosition(info => console.log(info));
    this.setState({locationConfirm:'location taken!!'})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Icon onPress={()=>{this.props.navigation.navigate('Menu')}} name='ios-arrow-undo-sharp' style={{fontSize:26,marginLeft:'5%',color:'#ffbc66'}}/>
            <View>

            </View>
        </View>
        <View style={styles.title}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#ffbc66'}}>Title</Text>
          <TextInput
            style={{ height:windowHeight/20,width:windowWidth/1.3,borderRadius:8, borderColor: 'gray', borderWidth: 1, marginTop:'1%',fontSize:10 }}
            onChangeText={text => this.setState({title:text})}
            value={this.state.title}
            placeholder='job title'
          />
        </View>

        <View style={styles.description}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#ffbc66'}}>Description</Text>
          <TextInput
            style={{ height:windowHeight/10,width:windowWidth/1.3,borderRadius:8, borderColor: 'gray', borderWidth: 1, marginTop:'1%',fontSize:10 }}
            onChangeText={text => this.setState({description:text})}
            value={this.state.description}
            multiline={true}
            numberOfLines={6}
            placeholder='Describe what has to be done...'
          />
        </View>

        <View style={styles.description}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#ffbc66'}}>Priority</Text>
          <Picker
            selectedValue={this.state.priority}
            style={{ height:windowHeight/17, width:windowWidth/3,borderColor: 'gray', borderWidth: 1,}}
            onValueChange={(itemValue, itemIndex) => this.setState({priority:itemValue})}
          >
            <Picker.Item label="Important" value="important" />
            <Picker.Item label="High" value="high" />
            <Picker.Item label="Normal" value="normal" />
            <Picker.Item label="Low" value="low" />
          </Picker>
        </View>

        <View style={styles.addressDescription}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#ffbc66'}}>Address</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.getCurrentLocation}
            >
              <Text>GET Location</Text>
            </TouchableOpacity>
            <Text style={{marginTop:'5%',color:'#ffbc66',fontWeight:'bold',fontSize:16}}>{this.state.locationConfirm}</Text>
          </View>
          
        </View>

        <View style={styles.addressDescription}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#ffbc66'}}>Photo</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity
              style={styles.button}  
                        >
              <Text>Take a photo</Text>
            </TouchableOpacity>
            <Text style={{marginTop:'5%',color:'#ffbc66',fontWeight:'bold',fontSize:16}}></Text>
          </View>
        </View>
        
        <View style={{flexDirection:'row'}}>
          <View  onPress={()=>{this.props.navigation.navigate('Menu')}} style={styles.bottomButtons}>
              <Text style={{color:'#ffbc66'}}>CANCEL</Text>
          </View>
          <View style={styles.bottomButtons}>
              <Text style={{color:'#ffbc66'}}>SAVE</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    backgroundColor:'#ffbc66'
  },
  title:{
    flexDirection:'column',
    width:windowWidth/1.1,
    justifyContent:'center',
    backgroundColor:'#FFFFFF',
    padding:10,
    borderRadius:6,
    marginBottom:'2%',
    marginTop:'1%'
  },
  description:{
    flexDirection:'column',
    width:windowWidth/1.1,
    justifyContent:'center',
    backgroundColor:'#FFFFFF',
    padding:10,
    borderRadius:6,
    marginBottom:'2%'
  },
  addressDescription:{
    flexDirection:'column',
    width:windowWidth/1.1,
    justifyContent:'center',
    backgroundColor:'#FFFFFF',
    padding:10,
    borderRadius:6,
    marginBottom:'2%'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop:'3%',
    width:windowWidth/3
  },
  header:{
    width:windowWidth,
    height:windowHeight/20,
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  bottomButtons:{
    width:windowWidth/4,
    height:windowHeight/15,
    borderRadius:8,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:'10%'
  }
})