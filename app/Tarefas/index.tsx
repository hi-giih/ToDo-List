import { View, Text, TouchableOpacity,Image } from "react-native"
import { style } from './styles'

type Props ={
  name: string;
  onRemove: (name: string)=>void;
}


export function Tarefa ({name, onRemove}: Props){
    return(
      <View style={style.container}>
          <TouchableOpacity style={style.check}/>
          <Text style={style.texto}>{name}</Text>
          <TouchableOpacity  onPress={()=> onRemove(name)}>
            <Image source={require('../../assets/img/Lixeira.png')} 
            style={style.icon}/>
          </TouchableOpacity>
      </View>
    )
}