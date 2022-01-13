
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

export default class home extends Component {

  constructor(props){
    super(props);

  }
  // handle Navigation to login page

  handleNavigation=()=>{
    this.props.navigation.navigate('loginpage')
  }

  render() {

    return (
      <SafeAreaView>
        <View>
          <Text>Home Page</Text>
          <TouchableOpacity style={styles.login_Button} onPress={this.handleNavigation}>
            <Text style={styles.login_Text}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )

  }
}







const styles = StyleSheet.create({


  signincontainer: {
    backgroundColor: "#ec2f5f",
    paddingTop: 80,
    paddingBottom: 60

  },

  email_Container: {
    alignSelf: 'center',
    marginTop: 20
  },
  signin_Text: {
    color: "white",
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Raleway-Medium'

  },
  signin_to_continue_Text: {
    marginTop: "10%",
    color: "white",
    textAlign: 'center',
    fontSize: 15
  },
  Label_Text: {
    fontSize: 14,
    margin: 5,
    color: "grey",
    opacity: 0.5,
    fontWeight: 'bold'
  },
  mail_Textinput: {
    backgroundColor: 'grey',
    borderRadius: 25,
    paddingLeft: 20,
  },
  login_Button: {
    marginTop: "10%",
    alignSelf: "center",
    backgroundColor: "#ec2f5f",
    padding: 10,
    width: '40%',
    borderRadius: 25,
    fontWeight: "bold",
    alignItems: 'center',
  },
  login_Text: {
    color: "white",
    fontFamily: 'Raleway-Medium'


  }

});