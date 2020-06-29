import React, {useState} from 'react';
import {Feather} from  '@expo/vector-icons';
import { View, Image, Text, ImageBackground , Platform, KeyboardAvoidingView, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import {useNavigation} from  '@react-navigation/native'
import {useAuth} from '../../constexts/auth'
import styles from './styles'


const Home = () => {
const[uf, setUf] = useState(''); 
const [city, setCity] = useState(''); //capturando dados dos inptus

  const navigation = useNavigation();
  //const {signOut, user} = useAuth();

  function handleNavigationPoints(){
    navigation.navigate('Points',{
      uf, city
    })

  }
    
  return (
    

   <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
    <ImageBackground source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}>
      
    
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <View>
        <Text style={styles.title}>Seu marktplace de coleta de resíduos</Text>
          <Text style={styles.description}>Ajudamos as pessoas a encontrar pontos de colata de forma eficiente.</Text>
      </View>
      </View>
      <View style={styles.footer}>
        <TextInput
        style={styles.input}
        placeholder="Digite sua Uf"
        value={uf}
        maxLength={2}
        autoCapitalize={"characters"}
        autoCorrect={false}
        onChangeText={setUf}
        
        />
         <TextInput
        style={styles.input}
        placeholder="Digite a sua Cidade"
        value={city}
        autoCorrect={false}
        onChangeText={setCity}
        
        />
        

             
    

        
        <RectButton style={styles.button} onPress={handleNavigationPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Feather name="arrow-right" color="#fff"size={25}/>
          </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
         </View>
    </ImageBackground>
   </KeyboardAvoidingView>
  
  );
}

export default Home;


