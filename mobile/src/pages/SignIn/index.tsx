import React from 'react';
import { View, Button } from 'react-native';
import {useAuth} from '../../constexts/auth'

// import { Container } from './styles';

const SignIn: React.FC = () => {

  

    const {singIn} = useAuth();
   
  function handleSingIn(){
    singIn();
   
  }

 return(


  
  <View 



  style={{flex:1, marginTop:130, alignItems:'center'}}>
    <Button title="SinIn" onPress={handleSingIn}/>
  </View>
);

};
export default SignIn;


