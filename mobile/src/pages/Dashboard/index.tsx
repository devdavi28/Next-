import React, {useContext} from 'react';
import { View, Button , Text} from 'react-native';
import {useAuth} from '../../constexts/auth'

// import { Container } from './styles';

const Dashboard: React.FC = () => {

    const {signOut, user} = useAuth();

   function handleSingOut(){
   signOut();

    
  }


 return(
  <View 
  style={{flex:1, marginTop:130, alignItems:'center'}}>
    <Text> {user?.name} </Text>
    <Button title="Sign out" onPress={handleSingOut}/>
  </View>
);

};
export default Dashboard;