import React, { useState, useEffect } from 'react';
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';
import api from '../../services/api'
import {formatPrice} from '../../util/format'
import { View, TouchableOpacity, SafeAreaView, SectionList, Text, ActivityIndicator, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

import Tab from '../../components/Tab'

import styles from './styles'


interface Params {
  produto_id: number;
}

interface Data {
  produto: {
    title: string;
    description: string,
    value: number,
    image: string;
    image_url: string;
  }
}


const Cart = () => {

  const [data, setData] = useState<Data>({} as Data);
  const [loading, setLoading] = useState(true);
  const [prazo, setPrazo]= useState(0);



 
   


  const navigation = useNavigation();
  const route = useRoute();
  const prazoPagamento = 6 ;

  const routeParams = route.params as Params;



  useEffect(() => {

    api.get(`produto/${routeParams.produto_id}`).then(responde => {
 
       setData(responde.data);

     

      setLoading(false);
      setPrazo(data.produto.value / prazoPagamento);

    })

  }, []);




  function handleNavigationBack() {
    navigation.goBack();
  }


  
  


  if (loading) {
    return (
      <View style={styles.containerLoad}>
        <ActivityIndicator color="#17B443" size="large" />
        <Text style={styles.textLoad}>Aguarde carregando..</Text>
      </View>
    )
  }


  <SafeAreaView style={styles.container}>
    <SectionList
      sections={}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  
  
  /*
  return (
    <>


      <View style={styles.container}>
        <View style={styles.header}>

          <TouchableOpacity onPress={handleNavigationBack}>
            <Icon name="x" size={25} color="#999" />
          </TouchableOpacity>

          <Text style={styles.title}>Carrinho</Text>


          <TouchableOpacity onPress={handleNavigationBack}>
            <Icon name="shopping-cart" size={25} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.produtoContainer}>
        
            <View>

              <Text style={styles.title}>{data.produto.title}</Text>
              <Image style={styles.image} source={{ uri: data.produto.image }} />

              <Text style={styles.description}>{data.produto.description}</Text>
              
              <View style={styles.boxValue}>
              <Text style={styles.price}>à vista</Text>
              <Text style={styles.value}>{formatPrice (data.produto.value)}</Text> 
              <Text style={styles.description}> a prazo em 6x {formatPrice (prazo)}</Text>


              <View style={styles.boxDetalhes}>
              <Text style={styles.title}>Detalhes do Produto</Text>
              <Text style={styles.description}>{data.produto.description}</Text> 
              <Text style={styles.description}> {data.produto.value}</Text>
              <Text style={styles.description}> {data.produto.value}</Text>
              <Text style={styles.description}> {data.produto.value}</Text>






              </View>
            </View>
          </View>
        </View>
     

      <View style={styles.footer}>
        <RectButton style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </RectButton>



      </View>
      </View>
      </View>




    </>

  );*/

};

export default Cart;


