import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../pages/Home';
import Cart from '../pages/Cart'


const AppStack = createStackNavigator();

const Routes =() =>{
return(
 
    <AppStack.Navigator
     headerMode="none"
     screenOptions={{
       cardStyle:{
         backgroundColor:"#F0F0F5"
       }
     }}>
      <AppStack.Screen name="Home" component={Home}/>
      <AppStack.Screen name="Cart" component={Cart}/>
  
    
    </AppStack.Navigator>
 
);

};

export default Routes;