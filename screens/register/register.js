
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


export default class registration_form extends Component{
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
          <Text style={styles.login_Text}>Login Raj</Text>  
          </TouchableOpacity> 
        </View>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({


signincontainer:{
 backgroundColor:"#ec2f5f",
 paddingTop:80,
 paddingBottom:60
 
},



});