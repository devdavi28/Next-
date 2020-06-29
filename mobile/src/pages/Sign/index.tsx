import React, { Component, useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, Image, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';



import styles from './styles';


export default function Welcome() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  


  const navigation = useNavigation();

 

  async function signIn() {
    if (username.length === 0) return
    setLoading(true)

    try {

      const credentials = {
        email: username,
        password: password,
      }

     


    } catch (err) {
      console.log(err)

      setLoading(false)
    
    }
  }




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Faça</Text>
        <Text style={styles.nomeEmpresa}>Login</Text>
      </View>

      <View style={styles.boxLogin}>

        <TextInput style={styles.buttonID}
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="name-phone-pad"
          placeholderTextColor="#cecece"
          value={username}
          onChangeText={setUsername}



        >

        </TextInput>


        <TextInput style={styles.buttonID}
          placeholder="Senha"
          placeholderTextColor="#cecece"
          secureTextEntry={false}
          value={password}
          onChangeText={setPassword}

        >

        </TextInput>

        <TouchableOpacity style={styles.buttonLogin}
          onPress={signIn}>

          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
              <Text style={styles.textSign}>Sign In</Text>
            )}




        </TouchableOpacity>

      </View>

      <TouchableOpacity>
        <Text style={styles.text}>Create  an account</Text>
      </TouchableOpacity>
    </View>

  )
}









