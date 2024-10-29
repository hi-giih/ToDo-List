import { View, Text, TouchableOpacity,Image } from "react-native"
import { style } from './styles'

export function Tarefa (){
    return(
      <View style={style.container}>
          <TouchableOpacity style={style.check}/>
          <Text style={style.texto}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
          <TouchableOpacity >
            <Image source={require('../../assets/img/Lixeira.png')} style={style.icon}/>
          </TouchableOpacity>
      </View>
    )
}