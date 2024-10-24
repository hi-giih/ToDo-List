import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      height: 173,
      backgroundColor: '#0D0D0D',
      justifyContent: 'center',
      alignItems: 'center'

    },

    containerInput:{
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 4,
      marginTop: 40
    },

    input:{
     backgroundColor: '#262626',
     height: 54,
     width: 271,
     borderRadius: 6,
     padding: 16,
     fontSize: 16
    },

    button:{
      backgroundColor: '#1E6F9F',
      width: 54,
      height: 54,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText:{
      color:'#F2F2F2',
      fontSize: 16,
    }
  })