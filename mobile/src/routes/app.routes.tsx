import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

//import Dashboard from '../pages/Dashboard'
//import Sign from  '../pages/Sign'
import Home from '../pages/Home'
// MyDrawer from '../pages/Person'
import Detail from '../pages/Detail'
import Points from '../pages/Points'




const AppStack = createStackNavigator();

const AppRoutes:React.FC =()=>(
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
   
    <AppStack.Screen name ="Home" component={Home}/>
    <AppStack.Screen name ="Points" component={Points}/>
    <AppStack.Screen name ="Detail" component={Detail}/>

  </AppStack.Navigator>
)

export default AppRoutes;