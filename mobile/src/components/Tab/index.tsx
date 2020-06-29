
import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import {Feather as Icon, MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Tabs() {

  const navigation = useNavigation();

  

  function navigateToDetail() {
    navigation.navigate('Home');//passando parametros para outra pagina
  }

  function navigateToMenu() {
    navigation.navigate('Menu');
  }

  function navigateToCart() {
    navigation.navigate('Cart');
  }
  function navigateToSign() {
    navigation.navigate('Sign');
  }

  function navigateToPerson() {
    navigation.navigate('Person');
  }

 

 

  return(
    <>
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToDetail}>
        <Icon name="home" size={25} style={[styles.icon, styles.active]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToCart}>
      <Icon name="shopping-cart" size={25}style={[styles.icon, styles.active]}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToSign}>
       <MaterialCommunityIcons name="heart-outline" size={28} style={[styles.icon, styles.active]} />
      </TouchableOpacity>


      <TouchableOpacity onPress={navigateToPerson}>
      <Icon name="user" size={25} style={[styles.icon, styles.active]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToSign}>
      <Icon name="log-out" size={25} style={[styles.icon, styles.active]} />
      </TouchableOpacity>

      
     
     


      

    </View>
    </>
  );
}





