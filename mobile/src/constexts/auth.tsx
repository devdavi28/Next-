import React, {createContext, useState, useEffect, useContext}from 'react';
import AsyncStorage from '@react-native-community/async-storage'
//import * as auth from '../services/auth'


interface User{
  name:string;
  email:string;
}

interface AuthContextData{
  signed: boolean;
  user: User | null; 
  loading:boolean;
  singIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({}as AuthContextData) //iniciando logado

export const AuthProvider: React.FC =({children})=>{

  //logando na aplicação 
   const [user, setUser] = useState<User | null>(null);
   const[loading, setLoading] = useState(true);

   useEffect(()=>{
     async function loadStoragedData(){
      const storageUser = await AsyncStorage.getItem('@RNAuth:user');
      const storageToken = await  AsyncStorage.getItem('@RNAuth:token');

      if(storageUser && storageToken){
        //.defaults.headers['Autorization'] = `Bearer ${storageToken }`;

        setUser(JSON.parse(storageUser))

        setLoading(false);
      }
  }
    loadStoragedData();    
   },[])


   async function singIn(){
  // const response = await auth.singIn();
 

     
   //setUser(response.user);

 //  api.defaults.headers['Autorization'] = `Bearer ${response.token}`;

 

  //Armazenando os dados logado em um estado
 // await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
  //await AsyncStorage.setItem('@RNAuth:token', response.token);
 
  }

  //Deslogar da aplicação 
   function signOut(){
     AsyncStorage.clear().then(()=>{
      setUser(null);

     });
  }

  

  return(
  <AuthContext.Provider value={{signed: !!user, user, loading ,singIn, signOut}}> 
    {children}
  </AuthContext.Provider>
  );
  

};

export function useAuth(){
  const context = useContext(AuthContext);

  return context;
} 
 