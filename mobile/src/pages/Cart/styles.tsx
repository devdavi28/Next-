import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, metrics } from '../../styles'
const { width } = Dimensions.get('window');






const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingTop:10 + Constants.statusBarHeight,
    backgroundColor: colors.white,
    
    
     
  },
  header:{
    paddingVertical: 12,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor:'#999',
    backgroundColor:colors.primary
    
  },

  produtoContainer: {
    backgroundColor: colors.white,
   
    marginTop:metrics.padding,
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 3,
    shadowOpacity: 0.1,

    padding: metrics.padding,
  },
  
  boxContainer:{
    padding:metrics.padding,
   
          
  },

  boxValue:{
    borderTopWidth: StyleSheet.hairlineWidth,
    justifyContent:'space-between',


  },

  value:{

    fontFamily: 'Roboto_500Medium',
    fontSize:22,
  },

  price: {
  
    color: colors.price,
    fontSize:20,
    marginTop: 5,
  },

  priceAnt: {
  
    color: colors.price,
    fontSize:20,
    marginTop: 5,

  },

  boxDetalhes:{
    
  },
  
 

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },

  containerLoad:{
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  },

  textLoad:{
    textAlign:'center',
    justifyContent:'center',
    fontSize:fonts.regular,
  },

  



  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    color: colors.primary,
    zIndex: 1,
  },

  imageContainer: {
    padding: metrics.padding,
  },

  image: {
    width: '50%',
    height: 100,
     // a imagem se adaptar a o espaço

  },

  infoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },
  //titulo do Produto
 
// descrição do Produto
  description: {
    textAlign: 'center',
    color: colors.dark,
    fontFamily: 'Roboto_500Medium',
    marginBottom:8,
  },
// preço//
 
  
  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
   
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },
  
  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

});


export default styles;