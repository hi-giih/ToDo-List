import { View, Text, TouchableOpacity,Image } from "react-native"
import { style } from './styles'

type Props ={
  name: string;
  onRemove: ()=>void
}


export function Tarefa ({name, onRemove}: Props){
    return(
      <View style={style.container}>
          <TouchableOpacity style={style.check}/>
          <Text style={style.texto}>{name}</Text>
          <TouchableOpacity >
            <Image source={require('../../assets/img/Lixeira.png')} style={style.icon}/>
          </TouchableOpacity>
      </View>
    )
}