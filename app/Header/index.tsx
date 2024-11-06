import { View,Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import {style} from './styles'
import { Tarefa } from "../Tarefas"
import { useState } from "react"

export default function Header(){
  const [tarefa, setTarefas] = useState<{name: string; concluida: boolean}[]>([]);
  const [tarefaNome, setTarefaNome] = useState ('');
  const [tarefasCriadas, setTarefasCriadas] = useState(0);
  const [tarefasConcluidas, setTarefasConcluidas] = useState(0);
  
  function handleTarefaAdd(){
    if(tarefaNome.trim()){
    setTarefas(prevState => [...prevState, {name:tarefaNome, concluida:false}]);
    setTarefaNome('');
    setTarefasCriadas(prev => prev + 1);
    }
  }

  function handleTarefaRemove(name:string){
    Alert.alert("Remover Tarefa", "Tem certeza que deseja remover essa tarefa?",
      [{
          text: 'Sim',
          onPress:() => {
            setTarefas(prevState => {
              const tarefaParaRemover = prevState.find(tarefa => tarefa.name === name);

              if(tarefaParaRemover?.concluida){
                setTarefasConcluidas(prev=>prev -1);
              }
              return prevState.filter(tarefa => tarefa.name !==name);
            });
            setTarefasCriadas(prev => prev - 1);            
          },
          
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }


  function handleToggleComplete(name: string, isComplete: boolean){
    setTarefas (prevState =>
      prevState.map(tarefa =>
        tarefa.name === name ? {...tarefa, concluida: isComplete} : tarefa
      )
    );
    setTarefasConcluidas(prev => prev + (isComplete ? 1:-1));
  }

  return(
    <>
    <View style={style.container}>
        <Image source={require('../../assets/img/Logo.png')}/>
    </View>
    <View style={style.container2}>
      <View style={style.taks}>
        <View style={style.infos}>
          <Text style={style.nova}>Criadas</Text>
          <Text style={style.contador}>{tarefasCriadas} </Text>
        </View>
        <View style={style.infos}>
          <Text style={style.encerrada}>Concluídas</Text>
          <Text style={style.contador}>{tarefasConcluidas}</Text>
        </View>
      </View>
      <View  style={style.linha}></View>
      <FlatList
        data={tarefa}
        keyExtractor={(item)=>item.name}
        renderItem={({item})=> (
        <Tarefa 
        key={item.name}
        name={item.name}
        onRemove={()=> handleTarefaRemove(item.name)}
        onToggleComplete={(isComplete) => handleToggleComplete(item.name, isComplete)}/>
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