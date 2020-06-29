import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles'


export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.cart,
    justifyContent: 'space-between',



  },

  header: {
    position: "absolute",
    left: 15,
    right: 40,
    top: 90,
    bottom: 53,

  },

  nomeEmpresa: {
    position: "absolute",
    left: 8,
    right: 40,
    padding: 7,
    marginTop: 40,
    fontSize: 26,
    color: colors.darker,
    lineHeight: 23,
    fontFamily: 'Roboto_400Regular',
  },

  title: {
    position: "absolute",
    left: 8,
    right: 40,
    fontSize: 18,
    color: colors.regular,
    lineHeight: 23,
    fontFamily: 'Roboto_400Regular',
  },

  boxLogin: {
   
    marginTop:300,
    marginHorizontal:15,




  },
  imageLogo:{
    marginTop:5,
    alignContent:'center',
    padding:10,
   

  },

  buttonLogin: {
    backgroundColor: "#17B443",
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 290,
    borderRadius: 8,
    textAlign: 'center',
 

    padding: 15,
    marginTop: 15,

  },

  buttonID: {
  
    borderColor: "#17B443",
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap',
  
    borderWidth: 1,
    borderRadius: 8,
    width: 290,
    padding: 10,
    marginTop: 15,
    height: 40,
    alignContent:'space-between',
    




  },


  textSocial: {
    marginLeft: 90,
    marginTop: 30,
    alignItems: "center",
    fontSize: 15,
    color: colors.regular,


  },

  text: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.regular,
    marginBottom: 20,

  },
  textSign: {
    position: 'absolute',
    fontSize: 18,
    color: colors.darker,
    left: 120,



  },

  icon:{

    color: colors.regular,
  }



});