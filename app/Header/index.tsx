import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from "react-native"
import {style} from './styles'

export default function Header(){
  function handleTarefaAdd(){
    console.log('Você clicou em adicionar')
  }

  return(
    <View style={style.container}>
          <Image source={require('../../assets/img/Logo.png')}/>

      <View style={style.containerInput}>
        <TextInput style={style.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}              
        />
        <TouchableOpacity style={style.button} onPress={handleTarefaAdd}>
          <Text style={style.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
)}

