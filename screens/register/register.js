
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import Images from '../../constants/images/image';
import Colors from '../../constants/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class register extends Component{

  constructor(props){
    super(props);
    this.state={
      name:'',
    };
    
  }

  render(){
    return(
      <SafeAreaView>
        <View>
          <View style={styles.logoContainer}>
          <Image source={Images.LOGIN_IMAGE}
          style={{height:110,width:80,alignSelf:'center',marginTop:20}}
          />  
          <View style={styles.spaceX_Container}>
            <Text style={styles.spaceX_Text}>Space</Text>
            <Text style={styles.x_Text}>X</Text>
          </View>
          </View>
          <View>
          <Text style={styles.register_Text}>Register</Text>
          <View style={styles.textinput_Container}>
            <Icon name="user" size={20} style={styles.icon_style} />
          <TextInput placeholder="Name" style={styles.textinput_style}></TextInput>
          </View>
          <View style={styles.textinput_Container}>
          <Icon name="phone" size={20} color="#b4b3b8" style={styles.icon_style} style={styles.mobNumber_icon}/>
          <TextInput placeholder="Mobile number" style={styles.textinput_style}></TextInput>
          </View>
          <View style={styles.passwordInput_Container}>
          <View style={styles.passwordInner_Container}> 
          <Icon name="lock" size={20} style={styles.icon_style} />
          <TextInput placeholder="Set your password" style={styles.textinput_style}></TextInput>
          </View>
          <Icon name="eye" size={20} color="#b4b3b8" style={styles.icon_style} style={styles.eye_icon_style}/>
          </View>
          <View style={styles.passwordInput_Container}>
          <View style={styles.passwordInner_Container}>
          <Icon name="lock" size={20} style={styles.icon_style} />
          <TextInput placeholder="Confirm your password" style={styles.textinput_style}></TextInput>
          </View>
          <Icon name="eye" size={20} color="#0098fd" style={styles.icon_style} style={styles.eye_icon_style}/>
            </View>
          </View>
          <TouchableOpacity style={styles.submitBgstyle}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.terms}>By register, you agree to our Terms,Data Policy and Cookies Policy</Text>
        <View style={styles.loginButton_Container}>
          <Text>Have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.login_style}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({

  // Container Block

  logoContainer:{
    
    backgroundColor:'#528298',
    width:"100%",
    height:"35%"
  },
  spaceX_Container:{
    flexDirection:"row",
    alignSelf:"center",
    
  },
  loginButton_Container:{
    flexDirection:"row",
    justifyContent:"center"
  },
  textinput_Container:{
    flexDirection:"row",
    backgroundColor:"#d5d5d7",
    width:"90%",
    alignSelf:"center",
    borderRadius:18,
    marginTop:10

  },
  passwordInput_Container:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#d5d5d7",
    width:"90%",
    marginTop:10,
    alignSelf:"center",
    borderRadius:18,
    
  },
  passwordInner_Container:{
    flexDirection:"row"
  },

  //

  spaceX_Text:{
    fontFamily:'Acme-Regular',
    fontSize:30,
    color:'white',
    fontWeight:"900"
  },
  x_Text:{

    fontFamily:'Acme-Regular',
    fontSize:30,
    color:'yellow',
    fontWeight:"900"
  },
  register_Text:{

    fontFamily:'Acme-Regular',
    fontSize:25,
    color:'#528298',
    fontWeight:"900",
    textAlign:'center',
    marginTop:10
  },
  textinput_style:{
    marginLeft:10
    
  },
  icon_style:{
    color:"#b4b3b8",
    marginTop:10,
    marginLeft:10
  },
  eye_icon_style:{
    marginTop:13,
    marginRight:10
  },
  mobNumber_icon:{
    marginTop:15,
    marginLeft:10
  },
submit:{
    borderRadius:15,
    color:"white",
    padding:10,
    textAlign:"center"
},
submitBgstyle:{
  marginTop:20,
    alignSelf:"center",
    backgroundColor:"#528298",
    width:"30%",
    alignSelf:"center",
    borderRadius:20,
    
},
terms:{
  color:"#c7c7c7",
  textAlign:"center",
  marginTop:10
},
login_style:{
  color:"#ffc51c",
  textDecorationLine:"underline"
}

});