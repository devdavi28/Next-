import React, {useState, useEffect} from 'react';
import { Feather as Icon, FontAwesome,} from '@expo/vector-icons';
import { useNavigation , useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { View, TouchableOpacity , Image, Linking, Text} from 'react-native';
import api from '../../services/api'
import * as MailComposer from 'expo-mail-composer';
import styles from './styles';


interface Params{
  point_id: number;
}
  interface Data{
    point:{
      image:string;
      image_url:string;
      name:string;
      email:string;
      whatsapp:string;
      city:string;
      uf:string;
    };
  items:{
    title:string;
  }[];
}

const Detail = () => {
  
  const [data, setData] = useState<Data>({} as Data);

  const navigation = useNavigation();
  const route =  useRoute();

  const routeParams =  route.params as Params;

  useEffect(()=>{
    api.get(`points/${routeParams.point_id}`).then(response =>{
        setData(response.data);
    })
  },[]);

  function handleNavigationBack(){
    navigation.goBack();
  }

  function handleWatsapp(){
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Tenho interesse em coletar os resíduos`);
    
  }

  function handleComposeMail(){
    MailComposer.composeAsync({
    subject:"Interesse na coleta de resíduos",
    recipients:[data.point.email],
    
    })
  }

  if(!data.point){
    return null;
  }
  return (
    <>
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigationBack}>
        <Icon name="arrow-left" size={25} color="#34cb79" />
      </TouchableOpacity>

      <Image style={styles.pointImage} source={{uri:data.point.image_url}}/>
  <Text style={styles.pointName}>{data.point.name}</Text>
  <Text style={styles.pointItems}>
    {data.items.map(item => item.title).join(', ')}
  </Text>

      <View style={styles.address}> 
  <Text style={styles.addressTitle}>Endereço</Text>
  <Text style={styles.addressContent}>{data.point.city},  {data.point.uf}</Text>
      </View>
  </View>

  <View style={styles.footer}>
    <RectButton style={styles.button} onPress={handleWatsapp}>
    <FontAwesome name="whatsapp" size={20} color="#fff"/>
    <Text style={styles.buttonText}>whatsapp</Text>
    </RectButton>

    <RectButton style={styles.button}onPress={handleComposeMail}>
    <Icon name="mail" size={20} color="#fff"/>
    <Text style={styles.buttonText}>E-mail</Text>
    </RectButton>

  </View>
  </>
  );
};

export default Detail;