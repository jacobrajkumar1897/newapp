
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import home from './screens/home/home'
import loginpage from './screens/login/loginpage'
import register from './screens/register/register'

const Stack = createNativeStackNavigator();
const HIDE_HEAD = {
  headerShown: false
}

export default class App extends Component{ 
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="register" 
          screenOptions={HIDE_HEAD}> 
          <Stack.Screen  
            name ="home"
            component={home}
          />
          <Stack.Screen 
            name ="loginpage"
            component={loginpage}
          />
          <Stack.Screen 
            name ="register"
            component={register}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
