import React from "react";
import {Image,StyleSheet,Platform,View,Text,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Driver1Notification({route}) {
  // const {name,subTotal,deliveryCharge} =route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcometext}>Hi,Rock Lee</Text>
      <Icon name="location-on" size={25} style={styles.loc} />
      <Text style={styles.notifiicon} size={50}>
        🔔
      </Text>
      <Text style={styles.not}>Notification</Text>
      <View style={styles.card1}>
        <Text style={styles.name}>samudhi</Text>
        
        <Image source={require('../../assets/images/profile1.jpg')}
        style={styles.prof}/>
        <Icon name="location-on" size={25} style={styles.loc2} />
        <TouchableOpacity style={styles.acceptbtn}>
          <Text style={styles.acceptbtntxt}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.denybtn}>
          <Text style={styles.denybtntxt}>Deny</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card1}>
        <Text style={styles.name}>Fernando</Text>
        
        <Image source={require('../../assets/images/profile2.jpg')}
        style={styles.prof}/>
        <Icon name="location-on" size={25} style={styles.loc2} />
        <TouchableOpacity style={styles.acceptbtn}>
          <Text style={styles.acceptbtntxt}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.denybtn}>
          <Text style={styles.denybtntxt}>Deny</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card1}>
        <Text style={styles.name}>Ilyana Rose</Text>
        
        <Image source={require('../../assets/images/profile3.png')}
        style={styles.prof}/>
        <Icon name="location-on" size={25} style={styles.loc2} />
        <TouchableOpacity style={styles.acceptbtn}>
          <Text style={styles.acceptbtntxt}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.denybtn}>
          <Text style={styles.denybtntxt}>Deny</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card2}>
      <Text style={styles.subt}>Sub Total</Text>
      <Text style={styles.delt}>Delivery Charge</Text>
      <View style={styles.line} />
      <Text style={styles.tot}>Total</Text>
      {/* <Text style={styles.subtv}>{subTotal}$</Text>
      <Text style={styles.deltv}>{deliveryCharge}$</Text>
      <Text style={styles.totv}>{parseFloat(subTotal) + parseFloat(deliveryCharge)}$</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding:40,
    marginTop: -14,
  },
  welcometext: {
    marginTop: 25,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "700",
  },
  notifiicon: {
    marginTop: -30,
    marginLeft: 350,
    fontSize: 25,
  },
  loc: {
    marginLeft: 5,
    color: "purple",
  },
  not: {
    fontSize: 35,
    marginTop: 5,
    marginLeft: 10,
    fontWeight: "bold",
  },
  card1: {
    marginLeft: 30,
    width: 345,
    height: 135,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#f3f2ec",
    marginTop:15
  },
  name: {
    fontSize: 28,
    textAlign: "center",
    marginLeft:20,
    marginTop: 10,
    fontWeight: "500",
  },
  acceptbtn:{
    backgroundColor:'#00FF0A',
    padding:5,
    borderRadius:10,
    width:90,
    height:30,
    marginLeft:140,
    marginTop:25
    // marginBottom:5,
    // marginBottom:10
},
  acceptbtntxt:{
  color:"black",
  fontWeight:"500",
  textAlign:'center',
  fontSize:18
  },
  denybtn:{
    backgroundColor:'#55CA5C',
    padding:5,
    borderRadius:10,
    width:90,
    height:30,
    marginLeft:238,
    marginTop:-30
    // marginBottom:5,
    // marginBottom:10
},
 denybtntxt:{
  color:"black",
  fontWeight:"500",
  textAlign:'center',
  fontSize:18
  },
  prof:{
    width:90,
    height:100,
    marginTop:-15,
    marginLeft:10,
    borderRadius:10
  },
  loc2:{
    marginLeft:120,
    marginTop:-85
  },
  card2:{
    marginTop:10,
    marginLeft: 30,
    width: 345,
    height: 110,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#00FF0A"
  },
  subt:{
    fontSize:23,
    marginLeft:10,
    fontWeight:'600'
  },
  delt:{
    fontSize:23,
    marginLeft:10,
    marginTop:5,
    fontWeight:'600'
  },
  tot:{
    fontSize:23,
    marginLeft:10,
    marginTop:10,
    fontWeight:'600'
  },
  subtv:{
    marginLeft:300,
    marginTop:-95,
    fontSize:20
  },
  deltv:{
    marginLeft:300,
    marginTop:8,
    fontSize:20
  },
  totv:{
    marginLeft:300,
    marginTop:19,
    fontSize:20
  },
  line: {
    height: 2,
    width:330,
    backgroundColor: 'black',  // or any color you prefer
    // marginVertical: 10,  // optional: adds space around the line
    marginTop:10,
    marginLeft:8
  },
});
