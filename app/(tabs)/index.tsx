import { StatusBar} from "react-native";

import Header from '../Header'


export default function HomeScreen() {
  return (
      <>
      <StatusBar barStyle={'light-content'}
      translucent
       backgroundColor={'#0D0D0D'}/>
      <Header/>
      </>
      )}
