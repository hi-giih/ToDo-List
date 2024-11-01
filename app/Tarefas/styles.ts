import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
container: {
    backgroundColor: '#333333',
    marginTop: 10,
    borderRadius:8,
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
  },

check: {
  width: 24,
  height: 24, 
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#4EA8DE',
  justifyContent: 'center',
  alignContent: 'center'
},

texto:{
  fontSize: 16,
  flex: 1,
  paddingHorizontal: 15,
  color:'#F2F2F2'
},

icon:{
  width: 15,
  height: 15,
},

iconcheck:{
  width: 35,
  height: 35,
  alignSelf: 'center',
}

})
