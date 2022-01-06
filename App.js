
import React, { Component } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <SafeAreaView>
        <View>
          <View style={styles.signincontainer}>
            <View style={styles.text_container}>
          <Text style={styles.signin_Text}>Login</Text>
          <Text style={styles.signin_to_continue_Text}>Sign in to continue</Text>
          </View>
          </View>
          <View style={styles.email_Container}>
          <Text style={styles.Label_Text}>PLEASE ENTER YOUR EMAIL</Text>
          <TextInput placeholder="raj@doodleblue.com" style={styles.mail_Textinput}></TextInput>
          <Text style={styles.Label_Text}>PLEASE ENTER YOUR PASSWORD</Text>
          <TextInput placeholder="******" style={styles.mail_Textinput}></TextInput>
          </View>
          <TouchableOpacity style={styles.login_Button}> 
          <Text style={styles.login_Text}>Login</Text>  
          </TouchableOpacity> 
        </View>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({


signincontainer:{
 backgroundColor:"red",
 paddingTop:80,
 paddingBottom:60
 
},

email_Container:{
  alignSelf:'center',
  marginTop:20
},
signin_Text:{
  color:"white",
  textAlign:'center',
  fontSize:30,
  fontFamily:'Raleway-Italic'

},
signin_to_continue_Text:{
  marginTop:"10%",
  color:"white",
  textAlign:'center',
  fontSize:15
},
Label_Text:{
  fontSize:14,
  margin:5,
  color:"grey",
  opacity:0.5,
  fontWeight:'bold'
},
mail_Textinput:{
  backgroundColor:'grey',
  borderRadius:25,
  paddingLeft:20,
},
login_Button:{
  marginTop:"10%",
  alignSelf:"center",
  backgroundColor:"red",
  padding:10,
  width:'40%',
  borderRadius:25,
  fontWeight:"bold",
  alignItems:'center',
},
login_Text:{
  color:"white",
  fontFamily:"Raleway-Italic",
  
}

});