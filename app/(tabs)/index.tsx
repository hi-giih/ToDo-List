import { StatusBar} from "react-native";

import Header from '../Header'


export default function HomeScreen() {
  return (
      <>
      <StatusBar backgroundColor={'#0D0D0D'}
      translucent
      barStyle={'light-content'}/>
      <Header/>
      </>
      )}
