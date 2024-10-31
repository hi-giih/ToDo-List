import { View, Text, TouchableOpacity,Image } from "react-native"
import { style } from './styles'
import { useState } from "react";

type Props ={
  name: string;
  onRemove: (name: string)=>void;
}


export function Tarefa ({name, onRemove}: Props){
  const [check, setCheck] = useState (false);

  function handleCheck(){
    setCheck(!check);
  }


    return(
      <View style={style.container}>
          <TouchableOpacity style={style.check} onPress={handleCheck}>
            {
              check && (
                <Image source={require('../../assets/img/check.png')}
                style={style.iconcheck}/>
              )
            }
          </TouchableOpacity>
          <Text style={style.texto}>{name}</Text>
          <TouchableOpacity  onPress={()=> onRemove(name)}>
            <Image source={require('../../assets/img/Lixeira.png')} 
            style={style.icon}/>
          </TouchableOpacity>
      </View>
    )
}