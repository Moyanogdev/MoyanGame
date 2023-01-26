import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';


export default function App() {
  const [loaded] = useFonts({
    TekoRegular: require('./src/assets/fonts/Teko-Regular.ttf')
  })

  const [userNumber, setUserNumber] = useState()

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if (userNumber) {
    content = <GameScreen />
  }

  if(!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={'Moyan Game'} 
      newStyles={{fontFamily: 'TekoRegular'}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
