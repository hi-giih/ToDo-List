import { View, Text, TouchableOpacity,Image } from "react-native"
import { style } from './styles'
import { useState } from "react";

type Props ={
  name: string;
  onRemove: (name: string)=>void;
  onToggleComplete: (isComplete: boolean) => void;
}


export function Tarefa ({name, onRemove, onToggleComplete}: Props){
  const [check, setCheck] = useState (false);

  function handleCheck(){
    setCheck(prevCheck => {
      const novoCheck = !prevCheck;
      onToggleComplete(novoCheck);
      return novoCheck
    });
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
          <Text style={[style.texto, 
                check && {textDecorationLine: 'line-through', color:'#808080'}]
                }>{name}
          </Text>
          <TouchableOpacity  onPress={()=> onRemove(name)}>
            <Image source={require('../../assets/img/Lixeira.png')} 
            style={style.icon}/>
          </TouchableOpacity>
      </View>
    )
}
