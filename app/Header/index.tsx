import { View,Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native"
import {style} from './styles'
import { Tarefa } from "../Tarefas"

export default function Header(){
  function handleTarefaAdd(){
    console.log('Você clicou em adicionar')
  }

  function handleTarefaRemove(){
    console.log('Você clicou em Remover')
  }

  const tarefas=['Estudar', 'Correr',  'Treinar']

  return(
    <>
    <View style={style.container}>
        <Image source={require('../../assets/img/Logo.png')}/>
    </View>
    <View style={style.container2}>
      <View style={style.taks}>
        <View style={style.infos}>
          <Text style={style.nova}>Criadas</Text>
          <Text style={style.contador}> 0 </Text>
        </View>
        <View style={style.infos}>
          <Text style={style.encerrada}>Concluídas</Text>
          <Text style={style.contador}> 0 </Text>
        </View>
      </View>
      <View  style={style.linha}></View>
        <Tarefa name="Estudar bonitinha" onRemove={handleTarefaRemove}/>
    </View>
    <View style={style.entrada}>
        <View style={style.containerInput}>
          <TextInput style={style.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}              
          />
          <TouchableOpacity style={style.button} onPress={handleTarefaAdd}>
            <TouchableOpacity style={style.textoIncluir}>
               <Text style={style.buttonText}>+</Text>
             </TouchableOpacity>
          </TouchableOpacity>
        </View>
    </View>
    </>
)}