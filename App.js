import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import ResultScreen from './src/screens/ResultScreen';


export default function App() {
  const [loaded] = useFonts({
    TekoRegular: require('./src/assets/fonts/Teko-Regular.ttf')
  })

  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setWinOrLose] = useState(false)
  const [result, setResult] = useState('')

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const handleFinishGame = (selection, Number) => {
    if((selection === 'Lower' && userNumber < Number) ||
    (selection === 'Higher' && userNumber > Number)){
      setResult('Win')
    } else {
      setResult('Lose')
    }
    setWinOrLose(true)
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result}/>
  } else if (userNumber) {
    content = <GameScreen handleResult={handleFinishGame}/>
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
