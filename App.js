import { StatusBar } from 'expo-status-bar'
import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import Colors from './utilities/Color';

function App() {
  return(
    <>
      <StatusBar style={Colors.light.STATUS}/>
      <MainContainer/>
    </>
  );
}

export default App;