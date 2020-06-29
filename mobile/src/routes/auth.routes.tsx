import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

//import SignIn from '../pages/SignIn'
import Sign from '../pages/Sign'




const AuthStack = createStackNavigator();

const AuthRoutes:React.FC =()=>(
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
         <AuthStack.Screen name ="Sign" component={Sign}/>

  </AuthStack.Navigator>
)

export default AuthRoutes;