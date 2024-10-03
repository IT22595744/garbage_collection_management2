import React, { useState } from 'react';
import { StyleSheet, View,Text, StatusBar,Image, TouchableOpacity,TextInput } from 'react-native';

export default function Inputscreen({navigation}) {
  const [name,setName]=useState('');
  const [subTotal,setSubTotal]=useState('');
  const [deliveryCharge,setDeliveryCharge]=useState('');

  const goToDriver1Screen=()=>{
    navigation.navigate('Driver1',{name,subTotal,deliveryCharge});
  }
  return (
    <View style={styles.container}>
    <Text style={styles.fields}> Name</Text>
    <TextInput style={styles.inputname}
      placeholder='Enter Name'
      placeholderTextColor='grey'
      value={name}
      onChangeText={setName}/>

  <Text style={styles.fields}> Sub Total</Text>
    <TextInput style={styles.inputname}
      placeholder='Enter Name'
      placeholderTextColor='grey'
      value={subTotal}
        onChangeText={setSubTotal}/>

<Text style={styles.fields}>Delivery Charge</Text>
    <TextInput style={styles.inputname}
      placeholder='Enter Name'
      placeholderTextColor='grey'
      value={deliveryCharge}
      onChangeText={setDeliveryCharge}/>
       <TouchableOpacity style={styles.nextbtn} onPress={goToDriver1Screen}>
        <Text style={styles.nextbtntxt}>
           Next
          </Text>
      </TouchableOpacity>
      </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding:40,
    marginTop: -14
  },
  fields:{
    marginTop:30,
    marginLeft:15,
    fontSize:20
  },
  inputname:{
          borderWidth:3,
          borderColor:'#ccc',
          padding:10,
          marginTop:10,
          borderRadius:10,
          fontSize:18,
          width:250,
          marginLeft:15
       },

       nextbtn:{
        backgroundColor:'#55CA5C',
        padding:4,
        borderRadius:10,
        width:100,
        height:30,
        marginLeft:100,
        marginTop:50
        // marginBottom:5,
        // marginBottom:10
    },
    nextbtntxt:{
      color:"white",
      fontWeight:"bold",
      textAlign:'center',
      fontSize:20
  },
  
})


