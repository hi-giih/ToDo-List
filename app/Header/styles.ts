import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      height:'20%',
      backgroundColor: '#0D0D0D',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container2: {
      height:'80%',
      backgroundColor: '#1A1A1A',
    },

    entrada:{
      position: 'absolute',
      width:'100%',
      top:'18%',
      alignItems: 'center',
    },

    containerInput:{
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 4,
    },

    input:{
     backgroundColor: '#262626',
     width: 271,
     borderRadius: 6,
     padding: 16,
     fontSize: 16,
     color: '#FFF'
    },

    button:{
      backgroundColor: '#1E6F9F',
      width: 54,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textoIncluir:{
      height: 28,
      width: 28,
      borderRadius:14,
      borderWidth:2,
      borderColor: '#F2F2F2',
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText:{
      color:'#F2F2F2',
      fontSize: 14,
    },

    taks:{
      marginTop: 20,
      flexDirection: 'row',
      justifyContent:  'space-between',
      padding: 20
    },

    infos:{
      flexDirection: 'row',
      gap: 10,
    },

    nova:{
      color:'#4EA8DE',
      fontWeight: 'bold',
      fontSize: 14
    },

    contador:{
      borderRadius: 50,
      backgroundColor: '#333333',
      paddingHorizontal: 5,
      color: '#FFF',
      fontWeight: 'bold',
    },

    encerrada:{
      color:'#8284FA',
      fontWeight: 'bold',
      fontSize: 14
    },

    linha:{
      height: 1,
      backgroundColor: '#333333',
      marginLeft: 20,
      marginRight: 20
    }
  })