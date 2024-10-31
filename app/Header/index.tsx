import { View,Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import {style} from './styles'
import { Tarefa } from "../Tarefas"
import { useState } from "react"

export default function Header(){
  const [tarefa, setTarefas] = useState<string[]>([]);
  const [tarefaNome, setTarefaNome] = useState ('') 

  function handleTarefaAdd(){
    setTarefas(prevState => [...prevState, tarefaNome]);
    setTarefaNome('');
  }

  function handleTarefaRemove(name:string){
    Alert.alert("Remover Tarefa", "Tem certeza que deseja remover essa tarefa?",
      [{
          text: 'Sim',
          onPress:() => setTarefas(prevState => prevState.filter(tarefa => tarefa !== name))
        },{
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }
  

  const tarefas=tarefa

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
      <FlatList
        data={tarefas}
        keyExtractor={(item)=>item}
        renderItem={({item})=> (
        <Tarefa 
        key={item}
        name={item}
        onRemove={()=> handleTarefaRemove(item)}/>
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=> ( <View style={style.containerListaVazia}>
        <Image source={require('../../assets/img/Clipboard.png')}/>
        <View>
          <Text style={style.tituloLista}>Você ainda não tem tarefas cadastradas </Text>
          <Text style={style.fraseLista}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
        </View>
      )}
      />
    </View>
    <View style={style.entrada}>
        <View style={style.containerInput}>
          <TextInput style={style.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            value={tarefaNome}
            onChangeText={setTarefaNome}              
          />
          <TouchableOpacity style={style.button} onPress={handleTarefaAdd}>
            <TouchableOpacity style={style.textoIncluir}  onPress={handleTarefaAdd}>
               <Text style={style.buttonText}>+</Text>
             </TouchableOpacity>
          </TouchableOpacity>
        </View>
    </View>
    </>
)}