import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } 
  from '@react-navigation/drawer';



import Home from '../Home'

const Drawer = createDrawerNavigator();





function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
    
    </Drawer.Navigator>
  );
}

export default function Person() {
  return (
  
   
      <MyDrawer />
     
  );
}
