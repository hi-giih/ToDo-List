import { View, Text, TouchableOpacity } from "react-native"
import { style } from './styles'

export function Tarefa (){
    return(
    
          <TouchableOpacity style={style.container}>
            <View style={style.check}>
            <Text>oii</Text>
            </View>
          </TouchableOpacity>
    )
}