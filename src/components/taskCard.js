import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,Linking } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Dimensions } from 'react-native';
import Dialog, { DialogButton, DialogContent, DialogFooter, DialogTitle } from 'react-native-popup-dialog';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class taskCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked:false
    };
  }

  render() {
    
    return (
      <View style={styles.cardContainer}>
          <TouchableOpacity onPress={this.detailPopup}>
            <View style={styles.cardHeader}>
                <View style={styles.onaranPoint}>
                    <Text style={{marginRight:'10%',color:'#8e8e8e'}}>154</Text>
                    <Icon style={{paddingTop:'1%',  }} name="hammer" color='#ff9000'/>
                </View>
                <View style={styles.priority}>
                    <Text style={{color:'#8e8e8e'}} >Priority:</Text>
                    <Text>HIGH</Text>  
                </View>
            </View>

            <View>
                <Text style={{fontSize:18,fontWeight:'bold',marginBottom:'2%'}}>Send benefit rewiew by Friday  </Text>
                <Text numberOfLines={3} style={{fontWeight:'500', fontSize:12, color:'#818C99'}} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
                <Text style={{fontWeight:'500', fontSize:12, color:'#ff9000'}}>Antalya/Konyaaltı</Text>
            </View>
            <Dialog
                visible={this.state.clicked}
                onTouchOutside={() => {
                this.setState({ clicked: false });
                }}
                footer={
                <DialogFooter bordered='false'>
                        <DialogButton onPress={this.cancel} style={styles.cancelButton} text='CANCEL' textStyle={{color:'#ffbc66'}}></DialogButton>
                        <DialogButton style={styles.doneButton} text='TAKE' textStyle={{color:'#FFFFFF'}}></DialogButton>
                </DialogFooter>
                }
            >
            <DialogContent  style={{height:windowHeight/1.7,width:windowWidth/1.2, alignItems:'center'}}>
                <DialogTitle title="Send benefit rewiew by Friday " hasTitleBar='false' style={{backgroundColor:'#00000000'}}/>
                <View style={styles.modalHeader}>
                    <View style={styles.onaranPoint}>
                        <Text style={{marginRight:'10%',color:'#8e8e8e'}}>154</Text>
                        <Icon style={{paddingTop:'1%',  }} name="hammer" color='#ff9000'/>
                    </View>
                    <View style={styles.priority}>
                        <Text style={{color:'#8e8e8e'}} >Priority:</Text>
                        <Text>HIGH</Text>  
                    </View>
                </View>
                <View style={{marginTop:'5%'}}>
                    <Text numberOfLines={3} style={{fontWeight:'500', fontSize:12, color:'#818C99'}} >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
                </View>
                <Image source={require('../image/brokenLamb.jpg')} style={{width:windowWidth/1.5,height:windowHeight/5}}></Image>
                <Text style={{color:'#ffbc66'}}>Antalya/Konyaaltı</Text>

                <Text onPress={()=>Linking.openURL('http://google.com/maps')} style={{color:'blue',fontStyle:'italic'}}>"Click here to see location on map"</Text>
            </DialogContent>
            </Dialog>
            
            
          </TouchableOpacity>
          
    
      </View>
    );
    
  }
  detailPopup=()=>{
    this.setState({ clicked: true });
    console.log('cliecked')
};

cancel=()=>{
    this.setState({clicked:false})
};

}

const styles=StyleSheet.create({
    cardContainer:{
        alignItems:'flex-start',
        justifyContent:'space-between',
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginBottom:10,
        padding:10,
        width:windowWidth/1.1
    },
    cardHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowWidth/1.3,
        paddingBottom:10
        
    },
    onaranPoint:{
        flexDirection:'row',
    },
    priority:{
        flexDirection:'row'
    },
    cancelButton:{
        width:windowWidth/4,
        height:windowHeight/20, 
    },
    doneButton:{
        width:windowWidth/4, 
        height:windowHeight/20,
        backgroundColor:'#ffbc66',
        borderRadius:10,

    },
    modalHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowWidth/1.3,
        paddingBottom:10,
        marginTop:'4%'
    }
    
})