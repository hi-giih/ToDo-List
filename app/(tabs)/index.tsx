import { StatusBar} from "react-native";

import Header from '../Header'


export default function HomeScreen() {
  return (
      <>
      <StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor='#f0f0f0'
      />     
      <Header/>
      </>
      )}
